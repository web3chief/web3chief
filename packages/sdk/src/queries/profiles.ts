import { Erc20Abi } from './../types/contracts/Erc20Abi'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { QueryArg, delay } from '@web3chief/sdk/sagas'
import Web3Utils from 'web3-utils'
import { PROFILE_ID_KEY } from '@web3chief/sdk/config/keys'
import { CONTRACT_SPECS } from '@web3chief/sdk/config/contracts'
import web3Utils from 'web3-utils'
import { getApproveErc20Query, getIsApprovedAllErc20Query } from './token'
import { Profile } from '@web3chief/sdk/types'
import { isCanTransferToProfileQuery } from './transferToProfile'

export async function getProfilesQuery({ ctx: { account, axios } }: QueryArg) {
  // used for auth check
  if (!account) return []

  const { data } = await axios.apiInfo.apiInfoControllerAssets(account)

  return data.GAMEFI
}

export async function createProfileQuery({
  ctx: { account, createContract, chainID },
  variables: { avatarID, username, price, paymentTokenAddress },
}: QueryArg<{ avatarID: string; username: string; price: string; paymentTokenAddress: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const token = createContract({
    abi: erc20AbiJson,
    addressByChains: { [chainID]: paymentTokenAddress },
    web3types: {} as Erc20Abi,
  })

  const balance = Web3Utils.fromWei(await token.methods.balanceOf(account).call())

  if (Number.parseFloat(balance) < Number.parseFloat(price))
    throw new ErrorCode(ErrorCode.CODE_ERROR.user.notEnoughBalance)

  const routeContract = createContract(CONTRACT_SPECS.router)

  try {
    await routeContract.methods
      .createProfile(avatarID, web3Utils.toHex(username))
      .call({ from: account })

    await routeContract.methods
      .createProfile(avatarID, web3Utils.toHex(username))
      .send({ from: account })
  } catch (error) {
    throw new ErrorCode(ErrorCode.CODE_ERROR.create.user, error)
  }
}

export async function getCurrentProfileIDQuery(queryArg: QueryArg) {
  const currentProfileID = localStorage.getItem(PROFILE_ID_KEY)
  const profiles = await getProfilesQuery(queryArg)

  if (currentProfileID && profiles.some(p => +p.tokenId === +currentProfileID))
    return currentProfileID

  const profileID = profiles[0]?.tokenId

  if (profileID !== undefined) {
    return setCurrentProfileIDQuery({ ...queryArg, variables: { profileID: String(profileID) } })
  }

  return undefined
}

export async function getCurrentProfileQuery(queryArg: QueryArg) {
  const currentProfileID = localStorage.getItem(PROFILE_ID_KEY) || ''
  const profiles = await getProfilesQuery(queryArg)
  const currentProfile = profiles.find(p => +p.tokenId === +currentProfileID)

  if (currentProfile) return currentProfile

  const [profile] = profiles

  if (profile !== undefined) {
    return setCurrentProfileQuery({ ...queryArg, variables: { profile } })
  }

  return undefined
}

export function setCurrentProfileIDQuery({
  variables: { profileID },
}: QueryArg<{ profileID: string }>) {
  localStorage.setItem(PROFILE_ID_KEY, String(profileID))

  return profileID
}

export function setCurrentProfileQuery({ variables: { profile } }: QueryArg<{ profile: Profile }>) {
  localStorage.setItem(PROFILE_ID_KEY, String(profile.tokenId))

  return profile
}

export type GetInventoryProfileListVariables = { profileAddress: string; scAddresses?: string[] }

export async function getInventoryProfileAssetsQuery({
  ctx: {
    axios,
    contracts: { erc20wrap },
  },
  variables: { profileAddress, scAddresses },
}: QueryArg<GetInventoryProfileListVariables>) {
  const erc20WrapAdresses = erc20wrap.map(contract => contract.address)
  const {
    data: { ERC1155, ERC721, ERC20WRAP },
  } = await axios.apiInfo.apiInfoControllerAssets(profileAddress, {
    types: scAddresses ? [...scAddresses, ...erc20WrapAdresses] : [],
  })

  return {
    erc20Tokens: ERC20WRAP,
    all: [...ERC1155, ...ERC721, ...ERC20WRAP],
  }
}

export async function getInventoryWalletAssetsQuery({
  ctx: { axios, account, runQuery },
  variables: { scAddresses },
}: QueryArg<{ scAddresses?: string[] }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const {
    data: { ERC1155, ERC20, ERC721 },
  } = await axios.apiInfo.apiInfoControllerAssets(account, {
    types: scAddresses ? scAddresses : undefined,
  })

  return Promise.all(
    [...ERC1155, ...ERC20, ...ERC721].map(async token => ({
      ...token,
      isApproved: await runQuery(isCanTransferToProfileQuery, { item: token }),
    })),
  )
}

export async function getBoxesQuery({
  ctx: {
    account,
    axios,
    contracts: { boxes },
  },
}: QueryArg): Promise<any[]> {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const { data } = await axios.apiInfo.apiInfoControllerAssets(account, {
    types: [boxes.address],
  })

  return data.BOXES
}

export async function getProfileCategoriesQuery({ ctx: { axios } }: QueryArg) {
  const { data } = await axios.apiInfo.apiInfoControllerCabinetFilter()

  return data
}

export async function isCanCreateProfileQuery({ ctx: { chainID, runQuery } }: QueryArg) {
  return runQuery(getIsApprovedAllErc20Query, {
    contractForApprove: CONTRACT_SPECS.router.addressByChains[chainID],
  })
}

export function getApproveCreateProfileQuery({
  ctx: { chainID, runQuery },
  variables: { tokenAddress },
}: QueryArg<{ tokenAddress: string }>) {
  return runQuery(getApproveErc20Query, {
    tokenAddress,
    contractForApprove: CONTRACT_SPECS.router.addressByChains[chainID],
  })
}

export async function updateInventorySignalQuery() {
  await delay(0)

  return 'ok'
}
