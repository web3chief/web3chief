import { QueryArg } from '@web3chief/sdk/sagas'
import erc1155GameFiAbiJson from '@web3chief/sdk/config/contracts/abi/erc1155Abi.json'
import { Erc1155Abi, LootBox, Profile, Token } from '@web3chief/sdk/types'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { delay } from '@web3chief/sdk/sagas'
import { isCanCreateOrderQuery } from './order'

const REFETCH_DELAY = 2000

export type TransferNFTVariables = {
  tokenAddress: string
  to: string
  tokenID: string
  amount: string
}

export async function transferAssetToQuery({
  ctx: { createContract, account, chainID },
  variables: { tokenAddress, to, tokenID, amount },
}: QueryArg<TransferNFTVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const token = createContract({
    abi: erc1155GameFiAbiJson,
    addressByChains: { [chainID]: tokenAddress },
    web3types: {} as Erc1155Abi,
  })
  await token.methods.safeTransferFrom(account, to, tokenID, amount, '0x0').call({ from: account })

  const response = token.methods
    .safeTransferFrom(account, to, tokenID, amount, '0x0')
    .send({ from: account })

  await delay(REFETCH_DELAY)

  return response
}

export type GetNftVariables = {
  tokenId: string
  address: string
}

export async function getAssetQuery({
  variables: { address, tokenId },
  ctx: { axios, account, runQuery },
}: QueryArg<GetNftVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const [
    {
      data: { ERC1155, ERC721, ERC20, ERC20WRAP, BOXES, GAMEFI },
    },
    isApproved,
  ] = await Promise.all([
    axios.apiInfo.apiInfoControllerAssets(account, { types: [address] }),
    runQuery(isCanCreateOrderQuery, { nftTokenAddress: address }),
  ])

  const token = [...ERC1155, ...ERC721, ...ERC20, ...ERC20WRAP, ...BOXES, ...GAMEFI].find(
    t => t.tokenId === +tokenId,
  ) as (Token & LootBox & Profile) | undefined

  if (token) {
    return {
      ...token,
      isApproved,
    }
  }
}

export async function getProfileAvatarsQuery({
  variables: { address },
  ctx: { axios, account },
}: QueryArg<{ address: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const {
    data: { AVATARS },
  } = await axios.apiInfo.apiInfoControllerAssets(address)

  return AVATARS
}

export async function getProfileItemsNftQuery({
  variables: { address },
  ctx: { axios, account },
}: QueryArg<{ address: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const {
    data: { ERC1155, ERC721, ERC20, ERC20WRAP, BOXES, GAMEFI },
  } = await axios.apiInfo.apiInfoControllerAssets(address)

  return [...ERC1155, ...ERC721, ...ERC20, ...ERC20WRAP, ...BOXES, ...GAMEFI]
}
