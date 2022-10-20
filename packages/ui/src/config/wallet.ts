import { CoinbaseIcon } from '@web3chief/ui/Icon/CoinbaseIcon'
import { Coin98Icon } from '@web3chief/ui/Icon/Coin98Icon'
import { TrustIcon } from '@web3chief/ui/Icon/TrustIcon'
import { TokenPocketIcon } from '@web3chief/ui/Icon/TokenPocketIcon'
import { WalletConnectIcon } from '@web3chief/ui/Icon/WalletConnectIcon'
import { BinanceChainIcon } from '@web3chief/ui/Icon/BinanceChainIcon'
import { SafepalIcon } from '@web3chief/ui/Icon/SafepalIcon'
import { MetamaskIcon } from '@web3chief/ui/Icon/MetamaskIcon'
import { ConnectorNames } from '@web3chief/sdk'
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
