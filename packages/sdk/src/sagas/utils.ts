import Web3 from 'web3'
import { AbiItem } from '@web3chief/sdk/types'
import {
  getNetworkURL,
  CHAIN_BY_NETWORK,
  ChainNames,
  BlockChainNetwork,
} from '@web3chief/sdk/config/network'
import { Contract } from '@web3chief/sdk/types'
import { ContractSpec } from '@web3chief/sdk/config/contracts'
import { ZERO_ADDRESS } from '@web3chief/sdk/config/wallet'

export function getAnonimWeb3(chainID: ChainNames) {
  const httpProvider = new Web3.providers.HttpProvider(getNetworkURL(chainID), {
    timeout: 10_000,
  })

  return new Web3(httpProvider)
}

export const USER_REJECT_ERROR = 'User rejected the request.'

export async function switchNetwork(
  chainID: ChainNames,
  provider = window.ethereum,
): Promise<void> {
  if (provider) {
    const { walletChain } = CHAIN_BY_NETWORK.get(chainID) as BlockChainNetwork

    try {
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: walletChain.chainId }],
        })
      } catch {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [walletChain],
        })

        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: walletChain.chainId }],
        })
      }
    } catch (error) {
      if (error.toString() === USER_REJECT_ERROR || error?.code === 4001) {
        throw error
      }

      console.error(error)
    }
  }
}

export type ContractConfig = {
  abi: AbiItem
  addressByChains: Record<string, string>
}

export function createContractFabric(web3: Web3, chainID: ChainNames) {
  const cache = new Map<AbiItem, Map<string, Contract>>()

  return function createContract<CS extends ContractSpec>(
    { abi, addressByChains }: CS,
    overrideChainID: ChainNames = chainID,
  ): CS['web3types'] {
    const address = addressByChains[overrideChainID] || ZERO_ADDRESS
    const contract = cache.get(abi)?.get(address)

    if (contract) return contract

    const newContract = new web3.eth.Contract(abi as any, address)
    ;(newContract as any).address = address

    if (cache.has(abi)) {
      cache.get(abi)?.set(address, newContract)
    } else {
      cache.set(abi, new Map([[address, newContract]]))
    }

    return newContract
  }
}

export function delay<R, F extends () => R = () => R>(timeout: number, func?: F) {
  return new Promise<typeof func extends undefined ? undefined : R>(resolve =>
    setTimeout(() => resolve(func && (func() as any)), timeout),
  )
}

export type Key = (string | number | Record<string, string | number> | any)[]
export type UniqKey = string

export function createUniqKey(key: Key): UniqKey {
  return JSON.stringify(key)
}
