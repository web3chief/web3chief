import {
  MAINNET_BSC_CHAIN_ID,
  TESTNET_BSC_CHAIN_ID,
  MAINNET_AVAX_CHAIN_ID,
  TESTNET_AVAX_CHAIN_ID,
} from '@web3chief/sdk/config/network'
import erc20AbiJson from '@web3chief/sdk/config/contracts/abi/erc20Abi.json'
import oneInchSpotAbiJson from '@web3chief/sdk/config/contracts/abi/oneInchSpotAbi.json'
import multiTransactorAbiJson from '@web3chief/sdk/config/contracts/abi/multiTransactorAbi.json'
import routerAbiJson from '@web3chief/sdk/config/contracts/abi/routerAbi.json'
import { ChainNames } from '@web3chief/sdk/config/network'
import { AbiItem } from '@web3chief/sdk/types/web3'
import { BaseContract } from '@web3chief/sdk/types/contracts/types'
import {
  Erc20Abi,
  OneInchSpotAbi,
  RouterAbi,
  MultiTransactorAbi,
} from '@web3chief/sdk/types'
import { ZERO_ADDRESS } from '@web3chief/sdk/config/wallet'

declare module 'web3-eth-contract' {
  interface Contract {
    // @ts-ignore
    address: string
  }
}

export type ContractSpec<T = string> = {
  abi: AbiItem
  addressByChains: {
    [prop in ChainNames]?: T
  }
  web3types: BaseContract
}

export const CONTRACT_SPECS = {
  oneInchSpotPriceAggregator: {
    abi: oneInchSpotAbiJson,
    addressByChains: {
      [TESTNET_BSC_CHAIN_ID]: '',
      [MAINNET_BSC_CHAIN_ID]: '0xfbD61B037C325b959c0F6A7e69D8f37770C2c550',
      [TESTNET_AVAX_CHAIN_ID]: '',
      [MAINNET_AVAX_CHAIN_ID]: '0xBd0c7AaF0bF082712EbE919a9dD94b2d978f79A9',
    },
    web3types: {} as OneInchSpotAbi,
  },
  busd: {
    abi: erc20AbiJson,
    addressByChains: {
      [TESTNET_BSC_CHAIN_ID]: '0x64b07f032A417328b12927d62E34F1E8118139d3',
      [MAINNET_BSC_CHAIN_ID]: '0x64b07f032A417328b12927d62E34F1E8118139d3',
      [TESTNET_AVAX_CHAIN_ID]: '0x64b07f032A417328b12927d62E34F1E8118139d3',
      [MAINNET_AVAX_CHAIN_ID]: '0x64b07f032A417328b12927d62E34F1E8118139d3',
    },
    web3types: {} as Erc20Abi,
  },
  multiTransactor: {
    abi: multiTransactorAbiJson,
    addressByChains: {
      [TESTNET_BSC_CHAIN_ID]: ZERO_ADDRESS,
      [MAINNET_BSC_CHAIN_ID]: ZERO_ADDRESS,
      [TESTNET_AVAX_CHAIN_ID]: '0x17F113524725CE0B3d0BC235054d5379809B6155',
      [MAINNET_AVAX_CHAIN_ID]: ZERO_ADDRESS,
    },
    web3types: {} as MultiTransactorAbi,
  },
  router: {
    abi: routerAbiJson,
    addressByChains: {
      [TESTNET_BSC_CHAIN_ID]: '0x4119F5F3a9b90B7BDAD99484925af28B51Cc2F99',
      [MAINNET_BSC_CHAIN_ID]: ZERO_ADDRESS,
      [TESTNET_AVAX_CHAIN_ID]: '0x5f2D628304D5860aF0BBbF821794198dB57bF82a',
      [MAINNET_AVAX_CHAIN_ID]: ZERO_ADDRESS,
    },
    web3types: {} as RouterAbi,
  },
} as const
