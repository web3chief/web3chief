import { CoinbaseIcon,
  Coin98Icon,
  TrustIcon, TokenPocketIcon, WalletConnectIcon, BinanceChainIcon, SafepalIcon, MetamaskIcon } from '../components/Icon'
import { ConnectorNames } from '../../../sdk'
import { FC } from 'react'
import { SvgIconProps } from '@mui/material'

export const WALLET_ICON_BY_CONNECTOR: Record<ConnectorNames, FC<SvgIconProps>> = {
  metamask: MetamaskIcon,
  binance: BinanceChainIcon,
  coin98: Coin98Icon,
  coinbase: CoinbaseIcon,
  safePal: SafepalIcon,
  tokenPocket: TokenPocketIcon,
  trustWallet: TrustIcon,
  walletConnect: WalletConnectIcon,
}
