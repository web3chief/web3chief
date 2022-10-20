import * as yup from 'yup'
import { QueryContext, Contracts } from './context'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { ChainNames } from '@web3chief/sdk/config/network'
import { GetSettingsResponseDto } from '@web3chief/sdk/types'

const CONTRACTS_SCHEMA = yup.object({
  marketplace: yup.object().required(),
  shops: yup.object().required(),
  boxes: yup.object().required(),
  avatars: yup.object().required(),
  gameFiCore: yup.object().required(),
  erc20: yup.array(yup.object()).required(),
  erc20wrap: yup.array(yup.object()).required(),
  erc1155: yup.array(yup.object()).required(),
})

export function createContracts(
  chainID: ChainNames,
  { smartContracts }: GetSettingsResponseDto,
  createContract: QueryContext['createContract'],
) {
  const contracts = smartContracts.reduce<Contracts>((acc, { typeContract, abi, address }) => {
    if ((typeContract as unknown as string) === 'MARKETPLACE') {
      acc.marketplace = createContract({ abi, addressByChains: { [chainID]: address } } as any)
    } else if ((typeContract as unknown as string) === 'SHOPS') {
      acc.shops = createContract({ abi, addressByChains: { [chainID]: address } } as any)
    } else if ((typeContract as unknown as string) === 'BOXES') {
      acc.boxes = createContract({ abi, addressByChains: { [chainID]: address } } as any)
    } else if ((typeContract as unknown as string) === 'AVATARS') {
      acc.avatars = createContract({ abi, addressByChains: { [chainID]: address } } as any)
    } else if ((typeContract as unknown as string) === 'GAMEFI') {
      acc.gameFiCore = createContract({ abi, addressByChains: { [chainID]: address } } as any)
    } else if ((typeContract as unknown as string) === 'ERC20') {
      if (Array.isArray(acc.erc20)) {
        acc.erc20.push(createContract({ abi, addressByChains: { [chainID]: address } } as any))
      } else {
        acc.erc20 = [createContract({ abi, addressByChains: { [chainID]: address } } as any)]
      }
    } else if ((typeContract as unknown as string) === 'ERC20WRAP') {
      if (Array.isArray(acc.erc20wrap)) {
        acc.erc20wrap.push(createContract({ abi, addressByChains: { [chainID]: address } } as any))
      } else {
        acc.erc20wrap = [createContract({ abi, addressByChains: { [chainID]: address } } as any)]
      }
    } else if ((typeContract as unknown as string) === 'ERC1155') {
      if (Array.isArray(acc.erc1155)) {
        acc.erc1155.push(createContract({ abi, addressByChains: { [chainID]: address } } as any))
      } else {
        acc.erc1155 = [createContract({ abi, addressByChains: { [chainID]: address } } as any)]
      }
    }

    return acc
  }, {} as Contracts)

  if (!CONTRACTS_SCHEMA.isValidSync(contracts))
    throw new ErrorCode(ErrorCode.CODE_ERROR.config.init, contracts)

  return contracts
}
