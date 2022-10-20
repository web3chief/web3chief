import { QueryArg } from '@web3chief/sdk/sagas'
import {
  GetImplementTokensResponseDto,
  GetOrdersRequestDto,
  Token,
} from '@web3chief/sdk/types'
import { getTokenInUSDQuery } from './tokenInUsd'
import { ErrorCode } from '@web3chief/sdk/config/error'

export type Tokens = GetImplementTokensResponseDto & {
  usd: number
}

export type GetMarketplaceOrdersVariables = {
  params: Omit<GetOrdersRequestDto, 'mainSettlementToken'>
}

export async function getMarketplaceOrdersQuery({
  variables: { params },
  ctx: { axios, runQuery },
}: QueryArg<GetMarketplaceOrdersVariables>) {
  const [
    {
      data: { list, count },
    },
    tokens,
  ] = await Promise.all([
    axios.apiMarketplace.apiMarketplaceControllerOrders(params as any),
    runQuery(getMarketplaceSellTokensQuery, {}),
  ])

  return {
    count,
    list: list.map((item: any) => ({
      ...item,
      priceInUsd: tokens.find(
        token => token.smartContract === item?.tokenIn?.smartContract.toLowerCase(),
      )?.usd,
    })),
  }
}

export async function getMarketplaceFilterQuery({
  variables: { category },
  ctx: { axios },
}: QueryArg<{ category: string }>) {
  const { data } = await axios.apiMarketplace.apiMarketplaceControllerFilterByCategory(category)

  return data
}

export async function getMarketplaceCategoriesQuery({ ctx: { axios } }: QueryArg) {
  const { data } = await axios.apiMarketplace.apiMarketplaceControllerGetCategories()

  return data
}

export type GetMyCollectionsListVariables = {
  collectionAddress?: string
  status?: 'OPEN' | 'OWNED' | 'EXECUTED'
  skip?: number
  take?: number
}

export async function getMyCollectionsAssetsQuery({
  ctx: { axios, account },
  variables: { collectionAddress, status = 'OPEN', skip, take },
}: QueryArg<GetMyCollectionsListVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  if (status === 'OWNED') {
    const argsCollections = collectionAddress ? { types: [collectionAddress] } : undefined
    const { data } = await axios.apiInfo.apiInfoControllerAssets(account, argsCollections)

    const allItems: Token[] = Object.entries(data)
      .filter(([type]) => type !== 'ERC20' && type !== 'ERC20WRAP')
      .flatMap(([_, items]) => items)

    return { list: allItems, count: allItems.length }
  }

  const { data } = await axios.apiMarketplace.apiMarketplaceControllerGetOrdersByAddress(account, {
    collectionAddress,
    skip: skip,
    take: take,
    status,
  })

  return data
}

export async function getMarketplaceSellTokensQuery({
  ctx: { axios, runQuery },
}: QueryArg): Promise<Tokens[]> {
  const { data: tokens } = await axios.apiMarketplace.apiMarketplaceControllerGetImplementTokens()

  if (!tokens || tokens.length === 0) return []

  return Promise.all(
    tokens.map(async (token: GetImplementTokensResponseDto) => ({
      ...token,
      usd: await runQuery(getTokenInUSDQuery, { tokenAddress: token.smartContract }),
    })),
  )
}
