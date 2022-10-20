import Web3Utils from 'web3-utils'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { QueryArg } from '@web3chief/sdk/sagas'
import { MAX_UINT256 } from '@web3chief/sdk/config/wallet'
import erc20Abi from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import { Erc20Abi } from '@web3chief/sdk/types'

export function addTokenQuery({
  variables: { smartContract, decimals, symbol, icon },
  ctx: { provider },
}: QueryArg<{ smartContract: string; decimals: string; symbol: string; icon: string }>) {
  return provider.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: smartContract,
        symbol: symbol,
        decimals: decimals,
        image: icon,
      },
    },
  })
}

export async function getIsApprovedErc20Query({
  ctx: { createContract, account, chainID },
  variables: { tokenAddress, contractForApprove },
}: QueryArg<{ tokenAddress: string; contractForApprove: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const contractErc20 = createContract({
    abi: erc20Abi,
    addressByChains: {
      [chainID as any]: tokenAddress,
    },
    web3types: {} as Erc20Abi,
  })

  const balanceWEI = await contractErc20.methods.allowance(account, contractForApprove).call()

  return Web3Utils.toBN(balanceWEI).gten(100)
}

export function getApproveErc20Query({
  ctx: { createContract, chainID, account },
  variables: { tokenAddress, contractForApprove },
}: QueryArg<{ tokenAddress: string; contractForApprove: string }>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const contractErc20 = createContract({
    abi: erc20Abi,
    addressByChains: {
      [chainID as any]: tokenAddress,
    },
    web3types: {} as Erc20Abi,
  })

  return contractErc20.methods.approve(contractForApprove, MAX_UINT256).send({ from: account })
}

export async function getIsApprovedAllErc20Query({
  ctx: {
    contracts: { erc20 },
    runQuery,
  },
  variables: { contractForApprove },
}: QueryArg<{ contractForApprove: string }>) {
  return Promise.all(
    erc20.map(async contract => ({
      address: contract.address,
      isApproved: await runQuery(getIsApprovedErc20Query, {
        contractForApprove,
        tokenAddress: contract.address,
      }),
    })),
  )
}

export async function getErc20Tokens({
  ctx,
}: QueryArg): Promise<{ icon: string; smartContract: string }[]> {
  const {
    axios,
    contracts: { erc20 },
  } = ctx
  const { data } = await axios.apiMarketplace.apiMarketplaceControllerGetImplementTokens()

  return data.filter((token: { smartContract: string }) =>
    erc20.find(el => el.address.toLowerCase() === token.smartContract.toLowerCase()),
  )
}
