import { QueryArg } from '@web3chief/sdk/sagas'

export type GetBoxVariables = { tokenID: string; amount: string }

export async function getBoxQuery({
  variables: { tokenID },
  ctx: { axios },
}: QueryArg<GetBoxVariables>) {
  const { data } = await axios.apiInfo.apiInfoControllerAssetsByBox(+tokenID)

  return data
}

export async function getBoxDropListQuery({
  variables: { hash },
  ctx: { axios },
}: QueryArg<{ hash: string }>) {
  const { data } = await axios.apiInfo.apiInfoControllerGetBoxInfoByTxHash(hash)

  return data.tokenResponse
}

export type OpenBoxVariables = { tokenID: string; amount: string }

export async function openBoxQuery({
  variables: { tokenID, amount },
  ctx: {
    contracts: { boxes },
    account,
  },
}: QueryArg<OpenBoxVariables>) {
  await boxes.methods.openBox(tokenID, amount).call({ from: account })

  return boxes.methods.openBox(tokenID, amount).send({ from: account })
}

export async function getBoxAssetsQuery({
  variables: { tokenId },
  ctx: { axios },
}: QueryArg<{ tokenId: number | string }>) {
  const { data } = await axios.apiInfo.apiInfoControllerAssetsByBox(+tokenId)

  return Object.values(data).flat()
}
