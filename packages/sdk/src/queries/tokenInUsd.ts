import { getAnonimWeb3, QueryArg } from '@web3chief/sdk/sagas'
import { CONTRACT_SPECS } from '@web3chief/sdk/config/contracts'
import { MAINNET_BSC_CHAIN_ID } from '@web3chief/sdk/config/network'
import { TOKEN_SPECS } from '@web3chief/sdk/config/tokens'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import { stringToWei } from '@web3chief/sdk/utils/web3'

export async function getTokenInUSDQuery({
  variables: { tokenAddress },
}: QueryArg<{ tokenAddress: string }>) {
  const usdtAddress = TOKEN_SPECS.usdt.address[MAINNET_BSC_CHAIN_ID]
  const web3NoAccount = getAnonimWeb3(MAINNET_BSC_CHAIN_ID)

  const tokenRateContract = new web3NoAccount.eth.Contract(
    CONTRACT_SPECS.oneInchSpotPriceAggregator.abi as any,
    CONTRACT_SPECS.oneInchSpotPriceAggregator.addressByChains[MAINNET_BSC_CHAIN_ID],
  )
  const usdtContract = new web3NoAccount.eth.Contract(erc20AbiJson as any, usdtAddress)
  const decimals = await usdtContract.methods.decimals().call()

  const rate = await tokenRateContract.methods.getRate(tokenAddress, usdtAddress, true).call()

  return stringToWei(rate, decimals)
}
