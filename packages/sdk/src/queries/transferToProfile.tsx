import { QueryArg } from '@web3chief/sdk/sagas'
import BN from 'bignumber.js'
import { MAX_UINT256, ZERO_ADDRESS } from '@web3chief/sdk/config/wallet'
import erc1155AbiJson from '@web3chief/sdk/config/contracts/abi/erc1155Abi.json'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import { Erc1155Abi, Erc20Abi, Token } from '@web3chief/sdk/types'
import { TransferItemToWalletVariables } from './transferToWallet'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { delay } from '@web3chief/sdk/sagas'
import { stringToWei } from '@web3chief/sdk/utils/web3'

const REFETCH_DELAY = 3000

export async function transferAssetToProfileQuery({
  variables: { item, profile, amount },
  ctx: { account, chainID, createContract, contracts },
}: QueryArg<TransferItemToWalletVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  if (item.standard === 'ERC1155') {
    const token = createContract({
      abi: erc1155AbiJson,
      addressByChains: { [chainID]: item?.smartContract },
      web3types: {} as Erc1155Abi,
    })

    const response = token.methods
      .safeTransferFrom(
        account,
        profile.profile.contractAddress,
        item.tokenId,
        amount,
        ZERO_ADDRESS,
      )
      .send({ from: account })

    await delay(REFETCH_DELAY)

    return response
  }

  if (item.standard === 'ERC20') {
    const wrapedAddresses = await Promise.all(
      contracts.erc20wrap.map(t => t.methods.underlying().call()),
    )
    const token = createContract({
      abi: erc20AbiJson,
      addressByChains: { [chainID]: item.smartContract },
      web3types: {} as Erc20Abi,
    })

    if (wrapedAddresses.includes(item.smartContract)) {
      const idx = wrapedAddresses.indexOf(item.smartContract)
      const wrapToken = contracts.erc20wrap[idx]
      const decimals = await wrapToken.methods.decimals().call()

      await wrapToken.methods
        .depositFor(profile.profile.contractAddress, stringToWei(amount, decimals))
        .call({ from: account })

      const response = wrapToken.methods
        .depositFor(profile.profile.contractAddress, stringToWei(amount, decimals))
        .send({ from: account })

      await delay(REFETCH_DELAY)

      return response
    }

    const decimals = await token.methods.decimals().call()
    await token.methods
      .transfer(profile.profile.contractAddress, stringToWei(amount, decimals))
      .call({ from: account })

    const response = token.methods
      .transfer(profile.profile.contractAddress, stringToWei(amount, decimals))
      .send({ from: account })

    await delay(REFETCH_DELAY)

    return response
  }
}

export type IsCanTransferToProfileVariables = {
  item: Token
}

export async function isCanTransferToProfileQuery({
  variables: { item },
  ctx: { account, chainID, createContract, contracts },
}: QueryArg<IsCanTransferToProfileVariables>) {
  if (!account) return false

  if (item.standard === 'ERC20') {
    const wrapedAddresses = await Promise.all(
      contracts.erc20wrap.map(t => t.methods.underlying().call()),
    )

    const token = createContract({
      abi: erc20AbiJson,
      addressByChains: { [chainID]: item.smartContract },
      web3types: {} as Erc20Abi,
    })

    if (wrapedAddresses.includes(item.smartContract)) {
      const idx = wrapedAddresses.indexOf(item.smartContract)
      const wrapToken = contracts.erc20wrap[idx]

      const balanceWEI = await token.methods.allowance(account, wrapToken.address).call()

      return new BN(balanceWEI).gte(100)
    }
  }

  return true
}

export async function approveTransferToProfileQuery({
  variables: { item },
  ctx: { account, chainID, createContract, contracts },
}: QueryArg<IsCanTransferToProfileVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  if (item.standard === 'ERC20') {
    const wrapedAddresses = await Promise.all(
      contracts.erc20wrap.map(t => t.methods.underlying().call()),
    )
    const token = createContract({
      abi: erc20AbiJson,
      addressByChains: { [chainID]: item.smartContract },
      web3types: {} as Erc20Abi,
    })

    if (wrapedAddresses.includes(item.smartContract)) {
      const idx = wrapedAddresses.indexOf(item.smartContract)
      const wrapToken = contracts.erc20wrap[idx]

      return token.methods.approve(wrapToken.address, MAX_UINT256).send({ from: account })
    }
  }
}
