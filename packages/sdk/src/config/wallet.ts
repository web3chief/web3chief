import { AbstractConnector } from '@web3-react/abstract-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import {
  TESTNET_BSC_CHAIN_ID,
  MAINNET_BSC_CHAIN_ID,
  MAINNET_AVAX_CHAIN_ID,
  TESTNET_AVAX_CHAIN_ID,
  ChainNames,
  getNetworkURL,
  BSC_NETWORK,
} from '@web3chief/sdk/config/network'

export const CONNECTOR_ID_KEY = 'CONNECTOR_ID_KEY'
export const DEFAULT_CONNECTOR: ConnectorNames = 'metamask'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

export function createInjectedConnector(chainID: ChainNames) {
  return new InjectedConnector({ supportedChainIds: [chainID] })
}

export function createWalletConnectConnector(chainID: ChainNames) {
  return new WalletConnectConnector({
    chainId: chainID,
    rpc: { [chainID]: getNetworkURL(chainID) },
    bridge: 'https://p.bridge.walletconnect.org',
    qrcode: true,
    qrcodeModalOptions: {
      mobileLinks: ['metamask', 'trust'],
    },
    supportedChainIds: [chainID],
  })
}

export function createBscConnector() {
  return new BscConnector({ supportedChainIds: BSC_NETWORK })
}

export function createWalletLinkConnector(chainID: ChainNames) {
  return new WalletLinkConnector({
    url: getNetworkURL(chainID),
    appName: 'CDEVS Game',
    supportedChainIds: BSC_NETWORK,
  })
}

export type ConnectorNames =
  | 'metamask'
  | 'coinbase'
  | 'coin98'
  | 'trustWallet'
  | 'tokenPocket'
  | 'walletConnect'
  | 'binance'
  | 'safePal'

export type ConnectorConfig = {
  type: ConnectorNames
  title: string
  createConnector: (chainID: ChainNames) => AbstractConnector
}

export const connectorsBSC: ConnectorConfig[] = [
  {
    type: 'metamask',
    title: 'Metamask',
    createConnector: createInjectedConnector,
  },
  {
    type: 'coinbase',
    title: 'Coinbase Wallet',
    createConnector: createWalletLinkConnector,
  },
  {
    type: 'coin98',
    title: 'Coin98',
    createConnector: createBscConnector,
  },
  {
    type: 'trustWallet',
    title: 'Trust Wallet',
    createConnector: createInjectedConnector,
  },
  {
    type: 'tokenPocket',
    title: 'Token Pocket',
    createConnector: createInjectedConnector,
  },
  {
    type: 'walletConnect',
    title: 'Wallet Connect',
    createConnector: createWalletConnectConnector,
  },
  {
    type: 'binance',
    title: 'Binance Chain Wallet',
    createConnector: createBscConnector,
  },
  {
    type: 'safePal',
    title: 'SafePal Wallet',
    createConnector: createInjectedConnector,
  },
]

export const connectorsAvax: ConnectorConfig[] = [
  {
    type: 'metamask',
    title: 'Metamask',
    createConnector: createInjectedConnector,
  },
  {
    type: 'coinbase',
    title: 'Coinbase Wallet',
    createConnector: createWalletLinkConnector,
  },
  {
    type: 'coin98',
    title: 'Coin98',
    createConnector: createInjectedConnector,
  },
  {
    type: 'trustWallet',
    title: 'Trust Wallet',
    createConnector: createInjectedConnector,
  },
  {
    type: 'tokenPocket',
    title: 'Token Pocket',
    createConnector: createInjectedConnector,
  },
  {
    type: 'walletConnect',
    title: 'Wallet Connect',
    createConnector: createWalletConnectConnector,
  },
  {
    type: 'safePal',
    title: 'SafePal Wallet',
    createConnector: createInjectedConnector,
  },
]

export const CONNECTORS_BY_CHAIN = {
  [MAINNET_BSC_CHAIN_ID]: connectorsBSC,
  [TESTNET_BSC_CHAIN_ID]: connectorsBSC,
  [MAINNET_AVAX_CHAIN_ID]: connectorsAvax,
  [TESTNET_AVAX_CHAIN_ID]: connectorsAvax,
}

export const CONNECTORS: string[] = [
  ...connectorsBSC.map(c => c.type),
  ...connectorsAvax.map(c => c.type),
]

export function getConnectors(chainID?: ChainNames) {
  return chainID ? CONNECTORS_BY_CHAIN[chainID] : []
}

export function setConnectorName(connectorName?: ConnectorNames) {
  if (connectorName) {
    localStorage.setItem(CONNECTOR_ID_KEY, connectorName)
  } else {
    localStorage.removeItem(CONNECTOR_ID_KEY)
  }

  return connectorName
}

export function getConnectorName() {
  const connectorName = localStorage.getItem(CONNECTOR_ID_KEY)

  if (connectorName)
    return CONNECTORS.includes(connectorName)
      ? (connectorName as ConnectorNames)
      : setConnectorName(DEFAULT_CONNECTOR)

  return connectorName
}
