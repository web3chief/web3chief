import { getContext, setContext } from 'typed-redux-saga/macro'
import {
  QUERY_CONTEXT,
  CONNECTOR_CONTEXT,
  QUERY_CACHE_CONTEXT,
  SETTINGS_CONTEXT,
  DISPATCH_CONTEXT,
} from './constants'
import Web3 from 'web3'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { ConnectorNames } from '@web3chief/sdk/config/wallet'
import { ChainNames } from '@web3chief/sdk/config/network'
import { createContractFabric } from './utils'
import { QueryQueue } from './query'
import {
  Api,
  AvatarsAbi,
  BoxesAbi,
  Erc1155Abi,
  Erc20Abi,
  Erc20wrapAbi,
  GamefiAbi,
  GetSettingsResponseDto,
  MarketplaceAbi,
  ShopsAbi,
} from '@web3chief/sdk/types'
import { QueryRunner } from './query/QueryRunner'
import { Directorr } from '@nimel/directorr'

export type Contracts = {
  marketplace: MarketplaceAbi
  shops: ShopsAbi
  boxes: BoxesAbi
  avatars: AvatarsAbi
  gameFiCore: GamefiAbi
  erc20: Erc20Abi[]
  erc20wrap: Erc20wrapAbi[]
  erc1155: Erc1155Abi[]
}

export interface QueryContext {
  chainID: ChainNames
  account?: string
  web3: Web3
  createContract: ReturnType<typeof createContractFabric>
  axios: Api<unknown>
  connector?: AbstractConnector
  provider?: any
  type?: ConnectorNames
  supportingChains: ChainNames[]
  contracts: Contracts
  runQuery: QueryRunner['runQuery']
}

export function* setQueryContext(newContext: QueryContext) {
  const context = yield* getContext<QueryContext>(QUERY_CONTEXT)

  yield setContext({
    [QUERY_CONTEXT]: Object.assign(context, newContext),
  })
}

export function* getQueryContext() {
  return yield* getContext<QueryContext>(QUERY_CONTEXT)
}

export function* resetQueryContext() {
  const context = yield* getContext<QueryContext>(QUERY_CONTEXT)

  yield setContext({
    [QUERY_CONTEXT]: Object.assign(context, {
      chainID: undefined,
      account: undefined,
      web3: undefined,
    }),
  })
}

export interface SettingsContext {
  settings: GetSettingsResponseDto
  supportingChains: ChainNames[]
}

export function* setSettingsContext(newContext: SettingsContext) {
  const context = yield* getContext<SettingsContext>(SETTINGS_CONTEXT)

  yield setContext({
    [SETTINGS_CONTEXT]: Object.assign(context, newContext),
  })
}

export function* getSettingsContext() {
  return yield* getContext<SettingsContext>(SETTINGS_CONTEXT)
}

export function* resetSettingsContext() {
  const context = yield* getContext<SettingsContext>(SETTINGS_CONTEXT)

  yield setContext({
    [SETTINGS_CONTEXT]: Object.assign(context, {
      settings: undefined,
      supportingChains: undefined,
    }),
  })
}

export type ConnectorContext = {
  connector?: AbstractConnector
  provider?: any
  type?: ConnectorNames
}

export function* setConnectorContext(newContext: Partial<ConnectorContext>) {
  const context = yield* getContext<ConnectorContext>(CONNECTOR_CONTEXT)

  yield setContext({
    [CONNECTOR_CONTEXT]: Object.assign(context, newContext),
  })
}

export function* getConnectorContext() {
  return yield* getContext<ConnectorContext>(CONNECTOR_CONTEXT)
}

export function* resetConnectorContext() {
  const context = yield* getContext<ConnectorContext>(CONNECTOR_CONTEXT)

  yield setContext({
    [CONNECTOR_CONTEXT]: Object.assign(context, {
      connector: undefined,
      provider: undefined,
    }),
  })
}

export type QueryCacheContext = {
  queue: QueryQueue
  queryRunner: QueryRunner
}

export function* setQueryCacheContext(newContext: QueryCacheContext) {
  const context = yield* getContext<QueryCacheContext>(QUERY_CACHE_CONTEXT)

  yield setContext({
    [QUERY_CACHE_CONTEXT]: Object.assign(context, newContext),
  })
}

export function* getQueryCacheContext() {
  return yield* getContext<QueryCacheContext>(QUERY_CACHE_CONTEXT)
}

export function* resetQueryCacheContext() {
  const context = yield* getContext<QueryCacheContext>(QUERY_CACHE_CONTEXT)

  yield setContext({
    [QUERY_CACHE_CONTEXT]: Object.assign(context, {
      queue: undefined,
      queryRunner: undefined,
    }),
  })
}

export function* getDispatchContext() {
  return yield* getContext<Directorr['dispatch']>(DISPATCH_CONTEXT)
}
