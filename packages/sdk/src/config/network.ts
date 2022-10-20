import web3Utils from 'web3-utils'
import random from 'lodash/random'

export const BLOCKCHAIN_NETWORK_ID_KEY = 'BLOCKCHAIN_NETWORK_ID'

export const MAINNET_BSC_CHAIN_ID = 56
export const TESTNET_BSC_CHAIN_ID = 97
export const MAINNET_AVAX_CHAIN_ID = 43_114
export const TESTNET_AVAX_CHAIN_ID = 43_113

export const MAIN_NETWORK = [MAINNET_BSC_CHAIN_ID, MAINNET_AVAX_CHAIN_ID]
export const BSC_NETWORK = [MAINNET_BSC_CHAIN_ID, TESTNET_BSC_CHAIN_ID]
export const AVAX_NETWORK = [MAINNET_AVAX_CHAIN_ID, TESTNET_AVAX_CHAIN_ID]

export type ChainNames =
  | typeof MAINNET_BSC_CHAIN_ID
  | typeof TESTNET_BSC_CHAIN_ID
  | typeof MAINNET_AVAX_CHAIN_ID
  | typeof TESTNET_AVAX_CHAIN_ID

export type BlockChainNetwork = {
  name: string
  chainID: number
  walletChain: {
    chainId: string
    chainName: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls: string[]
  }
  icon: string
}

export const CHAIN_BY_NETWORK: Map<ChainNames, BlockChainNetwork> = new Map([
  [
    MAINNET_BSC_CHAIN_ID,
    {
      name: 'Binance',
      chainID: MAINNET_BSC_CHAIN_ID,
      walletChain: {
        chainId: web3Utils.numberToHex(MAINNET_BSC_CHAIN_ID),
        chainName: 'Binance Smart Chain Mainnet',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'bnb',
          decimals: 18,
        },
        rpcUrls: [
          'https://bsc-dataseed1.ninicoin.io',
          'https://bsc-dataseed1.defibit.io',
          // 'https://bsc-dataseed.binance.org',
        ],
        blockExplorerUrls: ['https://bscscan.com'],
      },
      icon: '/images/bnb.png',
    },
  ],
  [
    TESTNET_BSC_CHAIN_ID,
    {
      name: 'Binance Testnet',
      chainID: TESTNET_BSC_CHAIN_ID,
      walletChain: {
        chainId: web3Utils.numberToHex(TESTNET_BSC_CHAIN_ID),
        chainName: 'Binance Smart Chain Testnet',
        nativeCurrency: {
          name: 'BNB',
          symbol: 'bnb',
          decimals: 18,
        },
        rpcUrls: [
          'https://data-seed-prebsc-1-s1.binance.org:8545/',
          'https://data-seed-prebsc-2-s1.binance.org:8545/',
          'https://data-seed-prebsc-1-s2.binance.org:8545/',
        ],
        blockExplorerUrls: ['https://testnet.bscscan.com'],
      },
      icon: '/images/bnb.png',
    },
  ],
  [
    MAINNET_AVAX_CHAIN_ID,
    {
      name: 'AVAX',
      chainID: MAINNET_AVAX_CHAIN_ID,
      walletChain: {
        chainId: web3Utils.numberToHex(MAINNET_AVAX_CHAIN_ID),
        chainName: 'AVAX Mainnet',
        nativeCurrency: {
          name: 'AVAX',
          symbol: 'avax',
          decimals: 18,
        },
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://snowtrace.io/'],
      },
      icon: '/images/avalanche.png',
    },
  ],
  [
    TESTNET_AVAX_CHAIN_ID,
    {
      name: 'AVAX Testnet',
      chainID: TESTNET_AVAX_CHAIN_ID,
      walletChain: {
        chainId: web3Utils.numberToHex(TESTNET_AVAX_CHAIN_ID),
        chainName: 'AVAX Testnet',
        nativeCurrency: {
          name: 'AVAX',
          symbol: 'avax',
          decimals: 18,
        },
        rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://cchain.explorer.avax-test.network'],
      },
      icon: '/images/avalanche.png',
    },
  ],
])

export const CHAINS = [...BSC_NETWORK, ...AVAX_NETWORK]

export function setNetworkChainID(chainID: ChainNames) {
  localStorage.setItem(BLOCKCHAIN_NETWORK_ID_KEY, `${chainID}`)

  return chainID
}

export function getNetworkChainID(supportingChains: ChainNames[] = []) {
  const chainID = localStorage.getItem(BLOCKCHAIN_NETWORK_ID_KEY)

  if (!chainID || !supportingChains.includes(Number.parseInt(chainID) as ChainNames))
    return setNetworkChainID(supportingChains[0])

  return Number.parseInt(chainID) as ChainNames
}

export function getNetworkURL(chainID: ChainNames) {
  const {
    walletChain: { rpcUrls },
  } = CHAIN_BY_NETWORK.get(chainID) as BlockChainNetwork
  const randomIndex = random(0, rpcUrls.length - 1)

  return rpcUrls[randomIndex]
}
