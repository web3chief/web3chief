import { TOKEN_SPECS } from '@web3chief/sdk/config/tokens'
import { CONTRACT_SPECS } from '@web3chief/sdk/config/contracts'
import { getAnonimWeb3, QueryArg } from '@web3chief/sdk/sagas'
import { MAINNET_BSC_CHAIN_ID } from '@web3chief/sdk/config/network'
import { weiToNumber } from '@web3chief/sdk/utils/web3'
import { ErrorCode } from '@web3chief/sdk/config/error'

export async function getBalanceQuery({
  ctx: {
    account,
    web3,
    axios,
    contracts: { erc20 },
  },
}: QueryArg) {
  if (!account) throw new ErrorCode(ErrorCode.CODE_ERROR.login.noAccount)

  const web3NoAccount = getAnonimWeb3(MAINNET_BSC_CHAIN_ID)
  const usdt = TOKEN_SPECS.usdt.address[MAINNET_BSC_CHAIN_ID]
  const tokenRateContract = new web3NoAccount.eth.Contract(
    CONTRACT_SPECS.oneInchSpotPriceAggregator.abi as any,
    CONTRACT_SPECS.oneInchSpotPriceAggregator.addressByChains[MAINNET_BSC_CHAIN_ID],
  )
  const [tokens, prices, decimals, balances, nativeRate, nativeBalance] = await Promise.all([
    Promise.all(erc20.map(token => axios.apiInfo.apiInfoControllerInfoToken(token.address, '0'))),
    Promise.all(
      erc20.map(token => tokenRateContract.methods.getRate(token.address, usdt, true).call()),
    ),
    Promise.all(erc20.map(token => token.methods.decimals().call())),
    Promise.all(erc20.map(contract => contract.methods.balanceOf(account).call())),
    tokenRateContract.methods.getRateToEth(usdt, true).call(),
    web3.eth.getBalance(account),
  ])

  const nativeBalanceInUsd = (weiToNumber(nativeBalance, 18) / weiToNumber(nativeRate, 18)).toFixed(
    2,
  )

  const tokensWithBalance = tokens.map(
    (
      {
        data: {
          category: { icon },
          symbol,
          smartContract,
          name,
        },
      },
      i,
    ) => {
      const balance = weiToNumber(balances[i], decimals[i], 2)
      const balanceInUsd = weiToNumber(balance * 2).toFixed(2)

      return {
        name,
        balance,
        balanceInUsd,
        price: prices[i],
        icon,
        symbol,
        smartContract,
        decimal: decimals[i],
      }
    },
  )

  const totalInUsd =
    +nativeBalanceInUsd +
    tokensWithBalance.reduce((accumulator, { balanceInUsd }) => accumulator + +balanceInUsd, 0)

  return {
    nativeBalanceInUsd,
    tokensWithBalance,
    totalInUsd,
    nativeBalance: weiToNumber(nativeBalance, 18, 2),
  }
}
