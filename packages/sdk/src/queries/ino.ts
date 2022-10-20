import { QueryArg } from '@web3chief/sdk/sagas'
import { Erc20Abi, GetAllShopsResponseDto } from '@web3chief/sdk/types'
import uniqBy from 'lodash/uniqBy'
import groupBy from 'lodash/groupBy'
import BN from 'bignumber.js'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { MAX_UINT256 } from '@web3chief/sdk/config/wallet'
import { delay } from '@web3chief/sdk/sagas'
import { WAIT_BACKEND } from '@web3chief/sdk/config/api'

export type InoItem = GetAllShopsResponseDto & {
  items: GetAllShopsResponseDto[]
  amount: string
}

export async function getInoShopsQuery({ ctx: { axios, contracts } }: QueryArg) {
  const { data } = await axios.apiShops.apiShopsControllerGetAllShops({
    active: 'OPEN',
    tags: ['ino'],
  })

  const items = data.reduce<Array<InoItem>>((acc, currentBox) => {
    const box = acc.find(
      b =>
        b.tokenOutOffer.smartContract === currentBox.tokenOutOffer.smartContract &&
        b.tokenOutOffer.tokenId === currentBox.tokenOutOffer.tokenId,
    )

    if (box) {
      box.items.push(currentBox)
    } else {
      acc.push({ ...currentBox, amount: '0', items: [currentBox] })
    }

    return acc
  }, [])

  const sc = uniqBy(items, 'tokenOutOffer.smartContract').map(
    item => item.tokenOutOffer.smartContract,
  )
  const assetsByTypes = await Promise.all(
    sc.map(s =>
      axios.apiInfo.apiInfoControllerAssets(contracts.shops.address, {
        types: [s],
      }),
    ),
  )
  const assets = assetsByTypes.flatMap(({ data: { BOXES } }) => BOXES)

  return items.map(item => {
    const amount = assets.find(
      as =>
        as.smartContract === item.tokenOutOffer.smartContract &&
        `${as.tokenId}` === item.tokenOutOffer.tokenId,
    )?.amount

    if (amount) {
      return {
        ...item,
        amount,
      }
    }

    return item
  })
}

export type InoItemRarity = {
  icon: string
  nameProperty: string
  nameValue: string
  typeView: string
  probability: number
}

export type InoItemCategory = {
  itemsCount: number
  name: string
  rarities: Array<InoItemRarity>
  icon: string
  slots?: string
  probability?: number
}

export async function getInoShopQuery({
  variables: { shopID },
  ctx: { axios, runQuery },
}: QueryArg<{ shopID: string }>) {
  const items = await runQuery(getInoShopsQuery, {})

  const item = items.find(i => i.id === +shopID)

  if (!item) return

  const [
    {
      data: { dropDownTokens },
    },
    isApproved,
  ] = await Promise.all([
    axios.apiInfo.apiInfoControllerAssetsByBox(Number(item.tokenOutOffer.tokenId), {}),
    runQuery(isCanBuyInoItemQuery, { paymentTokenAddress: item.tokenInOffer.smartContract }),
  ])
  const categories: Array<InoItemCategory> = Object.entries(
    groupBy(dropDownTokens, 'category.name'),
  ).map(([name, currentCategoryItems]) => {
    const rarities = currentCategoryItems.reduce<(InoItemRarity & { probability: number })[]>(
      (resultRarities, { probability, properties }) => {
        const tier = properties.find(property => property.nameProperty === 'Tier')

        if (!tier) return resultRarities

        const rarity = resultRarities.find(r => r.nameValue === tier.nameValue)

        if (!rarity) {
          resultRarities.push({ ...tier, probability })

          return resultRarities
        }

        rarity.probability = rarity.probability + probability

        return resultRarities
      },
      [],
    )

    const itemsCount = currentCategoryItems.length
    const { icon = '' } = currentCategoryItems[0]?.category

    if (name.toLowerCase() === 'spaceships') {
      const spaceship = currentCategoryItems[0].properties.find(
        property => property.nameProperty === 'Slots',
      )

      if (spaceship) {
        return {
          name,
          icon,
          itemsCount,
          rarities,
          slots: `(${spaceship.nameValue} Slots)`,
          probability: currentCategoryItems[0].probability,
        }
      }
    }

    return {
      name,
      icon,
      itemsCount,
      rarities,
    }
  })

  return { ...item, isApproved, categories, dropDownTokens }
}

export function approveInoShopQuery({
  ctx: {
    createContract,
    chainID,
    account,
    contracts: { shops },
  },
  variables: { paymentTokenAddress },
}: QueryArg<{ paymentTokenAddress: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })

  return token.methods.approve(shops.address, MAX_UINT256).send({ from: account })
}

export async function isCanBuyInoItemQuery({
  ctx: { createContract, chainID, account, contracts },
  variables: { paymentTokenAddress },
}: QueryArg<{ paymentTokenAddress: string }>) {
  if (!account) return false

  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })
  const balanceWEI = await token.methods.allowance(account, contracts.shops.address).call()

  return new BN(balanceWEI).gt(100)
}

export type BuyInoItemVariables = { shopID: string; amount: string | number }

export async function buyInoShopQuery({
  ctx: {
    account,
    contracts: { shops },
  },
  variables: { shopID, amount },
}: QueryArg<BuyInoItemVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const shopIds = Array.from({ length: +amount }).map(() => shopID)

  await shops.methods.buyTokenBatch(shopIds).call({ from: account })

  const res = await shops.methods.buyTokenBatch(shopIds).send({ from: account })

  await delay(WAIT_BACKEND)

  return res
}

export async function getDropItemInfo({
  ctx: { axios },
  variables: { collection, tokenId },
}: QueryArg<{ collection: string; tokenId: string }>) {
  const { data } = await axios.apiInfo.apiInfoControllerInfoToken(collection, tokenId)

  return data
}
