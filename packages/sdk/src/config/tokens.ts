// import { MAINNET_BSC_CHAIN_ID, TESTNET_BSC_CHAIN_ID } from '@web3chief/sdk/config/network'
import { ContractSpec, CONTRACT_SPECS } from '@web3chief/sdk/config/contracts'
import { MAINNET_BSC_CHAIN_ID } from './network'

export type TokenSpec = {
  symbol: string
  contract: ContractSpec
  decimals: number
  projectLink: string
  logo: any
}

export const TOKEN_SPECS = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      [MAINNET_BSC_CHAIN_ID]: '0x55d398326f99059ff775485246999027b3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
    logoUrl: '',
  },
  busd: {
    symbol: 'BUSD',
    contract: CONTRACT_SPECS.busd,
    decimals: 18,
    projectLink: 'https://tether.to/',
    logoUrl: '',
  },
  // yay: {
  //   symbol: 'YAY',
  //   address: {
  //     56: '0x524df384bffb18c0c8f3f43d012011f8f9795579',
  //     43_114: '0x01C2086faCFD7aA38f69A6Bd8C91BEF3BB5adFCa',
  //     43_113: '0x37bb8f2839dDc1A84C35cB5555738D8cf7B220FA',
  //     97: '0x37bb8f2839dDc1A84C35cB5555738D8cf7B220FA',
  //   },
  //   decimals: 18,
  //   projectLink: 'https://www.yay.games/',
  //   logoUrl: '/images/yay-logo2.svg',
  // },
  // yayTest: {
  //   symbol: 'YAY',
  //   address: {
  //     56: '',
  //     43_114: '',
  //     43_113: '0x64b07f032A417328b12927d62E34F1E8118139d3',
  //     97: '',
  //   },
  //   decimals: 18,
  //   projectLink: 'https://www.yay.games/',
  //   logoUrl: '/images/yay-logo2.svg',
  // },
  // avax: {
  //   symbol: 'AVAX',
  //   address: {
  //     56: '0x1ce0c2827e2ef14d5c4f29a091d735a204794041',
  //     43_114: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
  //   },
  //   decimals: 18,
  //   projectLink: 'https://www.avax.network/',
  //   logoUrl: '/images/avalanche.svg',
  // },
} as const
