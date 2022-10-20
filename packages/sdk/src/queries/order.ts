import { QueryArg } from '@web3chief/sdk/sagas'
import Web3Utils from 'web3-utils'
import erc1155GameFiAbiJson from '@web3chief/sdk/config/contracts/abi/erc1155Abi.json'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import erc1155AbiJson from '@web3chief/sdk/config/contracts/abi/erc1155Abi.json'
import { Erc20Abi, Erc1155Abi } from '@web3chief/sdk/types'
import BN from 'bignumber.js'
import { MAX_UINT256 } from '@web3chief/sdk/config/wallet'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { delay } from '@web3chief/sdk/sagas'

export const REFETCH_TIMEOUT = 5000

export type ApproveNFTVariables = {
  nftTokenAddress: string
}

export function isCanCreateOrderQuery({
  ctx: {
    createContract,
    account,
    chainID,
    contracts: { marketplace },
  },
  variables: { nftTokenAddress },
}: QueryArg<ApproveNFTVariables>) {
  if (!account) return false

  const token = createContract({
    abi: erc1155GameFiAbiJson,
    addressByChains: { [chainID]: nftTokenAddress },
    web3types: {} as Erc1155Abi,
  })

  return token.methods.isApprovedForAll(account, marketplace.address).call()
}

export function approveCreateOrderQuery({
  ctx: {
    createContract,
    account,
    chainID,
    contracts: { marketplace },
  },
  variables: { nftTokenAddress },
}: QueryArg<ApproveNFTVariables>) {
  const token = createContract({
    abi: erc1155GameFiAbiJson,
    addressByChains: { [chainID]: nftTokenAddress },
    web3types: {} as Erc1155Abi,
  })

  return token.methods.setApprovalForAll(marketplace.address, true).send({ from: account })
}

export type ApprovePaymentTokenVariables = {
  paymentTokenAddress: string // CONTRACT_SPECS.zoa.addressByChains[chainID]
}

export async function isCanBuyOrderQuery({
  ctx: {
    createContract,
    account,
    chainID,
    contracts: { marketplace },
  },
  variables: { paymentTokenAddress },
}: QueryArg<ApprovePaymentTokenVariables>) {
  if (!account) return false

  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })
  const balanceWEI = await token.methods.allowance(account, marketplace.address).call()

  return new BN(Web3Utils.fromWei(balanceWEI)).gt(100)
}

export function approveBuyOrderQuery({
  ctx: {
    createContract,
    chainID,
    account,
    contracts: { marketplace },
  },
  variables: { paymentTokenAddress },
}: QueryArg<ApprovePaymentTokenVariables>) {
  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })

  return token.methods.approve(marketplace.address, MAX_UINT256).send({ from: account })
}

export function approveSellOrderQuery({
  ctx: {
    createContract,
    chainID,
    account,
    contracts: { marketplace },
  },
  variables: { erc1155Address },
}: QueryArg<{ erc1155Address: string }>) {
  const token = createContract({
    abi: erc1155AbiJson,
    addressByChains: { [chainID]: erc1155Address },
    web3types: {} as Erc1155Abi,
  })

  return token.methods.setApprovalForAll(marketplace.address, true).send({ from: account })
}

export const NFT_STANDART = {
  ERRC20: 0,
  ERC721: 1,
  ERC1155: 2,
} as const

export type CreateOrderVariables = {
  nftStandart: 0 | 1 | 2
  tokenAddress: string
  tokenId: string
  tokenAmount: string
  price: string
  payTokenAddress: string // CONTRACT_SPECS.zoa.addressByChains[chainID]
  tokenDecimals: number
}

export async function createOrderQuery({
  variables: {
    nftStandart,
    tokenAddress,
    tokenId,
    tokenAmount,
    price,
    payTokenAddress,
    tokenDecimals,
  },
  ctx: {
    contracts: { marketplace },
    account,
  },
}: QueryArg<CreateOrderVariables>) {
  const priceInDecimals = new BN(price)
    .multipliedBy(new BN(10).pow(new BN(tokenDecimals)))
    .toString(10)

  await marketplace.methods
    .createOrder(
      nftStandart,
      tokenAddress,
      tokenId,
      `${tokenAmount}`,
      payTokenAddress,
      [],
      priceInDecimals,
    )
    .call({ from: account })
  const { events } = await marketplace.methods
    .createOrder(
      nftStandart,
      tokenAddress,
      tokenId,
      `${tokenAmount}`,
      payTokenAddress,
      [],
      priceInDecimals,
    )
    .send({ from: account })
  await delay(REFETCH_TIMEOUT) // wait backend update

  return events?.CreateOrder?.returnValues?.orderId as string
}

export type OrderVariables = {
  orderId: string
}

export async function cancelOrderQuery({
  variables: { orderId },
  ctx: {
    account,
    contracts: { marketplace },
  },
}: QueryArg<OrderVariables>) {
  await marketplace.methods.cancelOrder(orderId).call({ from: account })

  const res = await marketplace.methods.cancelOrder(orderId).send({ from: account })
  await delay(REFETCH_TIMEOUT) // wait backend update

  return res
}

export async function buyOrderQuery({
  variables: { orderId, paymentTokenAddress, price },
  ctx: {
    createContract,
    account,
    chainID,
    contracts: { marketplace },
  },
}: QueryArg<OrderVariables & ApprovePaymentTokenVariables & { price: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })

  const balance = Web3Utils.fromWei(await token.methods.balanceOf(account).call())

  if (Number.parseFloat(balance) < Number.parseFloat(price))
    throw new ErrorCode(ErrorCode.CODE_ERROR.user.notEnoughBalance)

  await marketplace.methods.executeOrder(orderId).call({ from: account })

  const response = await marketplace.methods.executeOrder(orderId).send({ from: account })

  await delay(REFETCH_TIMEOUT) // Ожидание обновления ордера после покупки для правильного отображения его статуса

  return response
}

export async function getOrderQuery({
  variables: { id },
  ctx: { axios, runQuery },
}: QueryArg<{ id: string }>) {
  const { data } = await axios.apiMarketplace.apiMarketplaceControllerGetOrder(+id)
  const isApproved = await runQuery(isCanBuyOrderQuery, {
    paymentTokenAddress: data.tokenIn.smartContract,
  })

  return { ...data, isApproved }
}

export function getMarketplaceFeeQuery({ ctx: { contracts } }: QueryArg) {
  return contracts.marketplace.methods.tradeFeePercentage().call()
}

export async function getHistoryPrice({
  variables: { address, tokenId },
  ctx: { axios },
}: QueryArg<{ address: string; tokenId: string }>) {
  const { data } = await axios.apiInfo.apiInfoControllerHistoryPrice(address, tokenId)

  return data
}
