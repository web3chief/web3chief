import { createActionAndEffect } from '@nimel/directorr'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { ChainNames } from '@web3chief/sdk/config/network'
import { ConnectorConfig } from '@web3chief/sdk/config/wallet'
import { GetSettingsResponseDto, Web3 } from '@web3chief/sdk/types'
import { Contracts } from './context'

export type ErrorPayload = {
  error: ErrorCode
}

export type LoginPayload = {
  connectorConfig: ConnectorConfig
  chainID: ChainNames
  settings?: GetSettingsResponseDto
}

export type LoginSuccessPayload = {
  chainID: ChainNames
  account?: string
  web3: Web3
  connectorConfig?: ConnectorConfig
  supportingChains: ChainNames[]
  settings: GetSettingsResponseDto
  contracts: Contracts
}

export const [
  actionLogin,
  effectLogin,
  actionLoginSuccess,
  effectLoginSuccess,
  actionLoginError,
  effectLoginError,
  actionLoginLoading,
  effectLoginLoading,
] = createActionAndEffect<LoginPayload, LoginSuccessPayload, ErrorPayload, void>('LOGIN')

export const [actionLogout, effectLogout] = createActionAndEffect<void>('LOGOUT')

export type ChainChangedPayload = {
  chainID: ChainNames
}

export const [
  actionChainChanged,
  effectChainChanged,
  actionChainChangedSuccess,
  effectChainChangedSuccess,
  actionChainChangedError,
  effectChainChangedError,
] = createActionAndEffect<ChainChangedPayload, ChainChangedPayload, ErrorPayload>('CHAIN_CHANGED')

export type ChainToChangePayload = ChainChangedPayload

export const [
  actionChainToChange,
  effectChainToChanged,
  actionChainToChangedSuccess,
  effectChainToChangedSuccess,
  actionChainToChangedError,
  effectChainToChangedError,
] = createActionAndEffect<ChainToChangePayload, ChainToChangePayload, ErrorPayload>(
  'CHAIN_TO_CHANGE',
)

export type AccountsChangedPayload = {
  account: string
}

export const [actionAccountsChanged, effectAccountsChanged] =
  createActionAndEffect<AccountsChangedPayload>('ACCOUNTS_CHANGED')

export type ConnectInfoPayload = {
  chainID: number
}

export const [actionConnected, effectConnected] =
  createActionAndEffect<ConnectInfoPayload>('ACCOUNT_CONNECTED')

export type DisconnectInfo = {
  error: Error
}

export const [actionDisconnected, effectDisconnected] =
  createActionAndEffect<DisconnectInfo>('ACCOUNT_DISCONNECTED')

export type MessageInfoPayload = {
  type: string
}

export const [actionMessage, effectMessage] =
  createActionAndEffect<MessageInfoPayload>('ACCOUNT_MESSAGE')
