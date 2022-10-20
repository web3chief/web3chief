import { ZERO_ADDRESS } from '@web3chief/sdk/config/wallet'
import profileAbiJson from '@web3chief/sdk/config/contracts/abi/profileAbi.json'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import erc20wrapAbiJson from '@web3chief/sdk/config/contracts/abi/erc20wrapAbi.json'
import { ProfileAbi, Erc20wrapAbi, Erc20Abi } from '@web3chief/sdk/types'
import { Profile, Token } from '@web3chief/sdk/types'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { delay, QueryArg } from '@web3chief/sdk/sagas'
import { stringToWei } from '@web3chief/sdk/utils/web3'

const REFETCH_DELAY = 5000

export type TransferItemToWalletVariables = {
  item: Token
  profile: Profile
  amount: string
}

export async function transferAssetToWalletQuery({
  variables: {
    item,
    profile: { profile },
    amount,
  },
  ctx: {
    createContract,
    account,
    chainID,
    contracts: {
      erc20wrap,
      erc1155: [erc1155],
    },
  },
}: QueryArg<TransferItemToWalletVariables>) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  if (item.standard === 'ERC1155') {
    const encodedData = erc1155.methods
      .safeTransferFrom(profile.contractAddress, account, item.tokenId, amount, ZERO_ADDRESS)
      .encodeABI()

    const profileContract = createContract({
      abi: profileAbiJson,
      addressByChains: { [chainID]: profile.contractAddress },
      web3types: {} as ProfileAbi,
    })

    const response = profileContract.methods
      .call(item?.smartContract, encodedData, 0)
      .send({ from: account })

    await delay(REFETCH_DELAY) // wait backend update

    return response
  }

  if (item.standard === 'ERC20') {
    const wrapedAddresses = await Promise.all(erc20wrap.map(t => t.methods.underlying().call()))

    if (wrapedAddresses.includes(item.smartContract)) {
      const wrapToken = createContract({
        abi: erc20wrapAbiJson,
        addressByChains: { [chainID]: item.smartContract },
        web3types: {} as Erc20wrapAbi,
      })
      const decimals = await wrapToken.methods.decimals().call()
      const encodedData = wrapToken.methods
        .withdrawTo(account, stringToWei(`${amount}`, decimals))
        .encodeABI()
      const profileContract = createContract({
        abi: profileAbiJson,
        addressByChains: { [chainID]: profile.contractAddress },
        web3types: {} as ProfileAbi,
      })

      await profileContract.methods
        .call(item?.smartContract, encodedData, 0)
        .call({ from: account })

      const response = profileContract.methods
        .call(item?.smartContract, encodedData, 0)
        .send({ from: account })

      await delay(REFETCH_DELAY) // wait backend update

      return response
    }

    const token = createContract({
      abi: erc20AbiJson,
      addressByChains: { [chainID]: item.smartContract },
      web3types: {} as Erc20Abi,
    })
    const decimals = await token.methods.decimals().call()
    const encodedData = token.methods
      .transfer(account, stringToWei(`${amount}`, decimals))
      .encodeABI()
    const profileContract = createContract({
      abi: profileAbiJson,
      addressByChains: { [chainID]: profile.contractAddress },
      web3types: {} as ProfileAbi,
    })

    await profileContract.methods.call(item?.smartContract, encodedData, 0).call({ from: account })

    const response = profileContract.methods
      .call(item?.smartContract, encodedData, 0)
      .send({ from: account })

    await delay(REFETCH_DELAY) // wait backend update

    return response
  }
}
