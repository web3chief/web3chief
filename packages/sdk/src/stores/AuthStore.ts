import { observable, computed, makeObservable } from 'mobx'
import {
  actionLogin,
  effectLoginError,
  effectLoginSuccess,
  LoginSuccessPayload,
  actionLogout,
  effectLogout,
  LoginPayload,
  ErrorPayload,
  effectLoginLoading,
  actionChainToChange,
  Contracts,
} from '@web3chief/sdk/sagas'
import { ChainNames } from '@web3chief/sdk/config/network'
import { GetSettingsResponseDto, Web3 } from '@web3chief/sdk/types'
import { ConnectorConfig } from '@web3chief/sdk/config/wallet'
import { QueryStore } from './QueryStore'
import { ErrorCode } from '@web3chief/sdk/config/error'

export class User {
  account: string

  constructor(account: string) {
    this.account = account
  }
}

export class AuthStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  @observable chainID?: ChainNames

  @observable.ref supportingChains?: number[]

  @observable.ref settings?: GetSettingsResponseDto

  @observable.ref web3?: Web3

  @observable.ref error?: ErrorCode

  @observable.ref connectorConfig?: ConnectorConfig

  @observable.ref contracts?: Contracts

  @computed
  get isLogin() {
    return !!this.user
  }

  @computed
  get isReady() {
    return (
      !!this.chainID &&
      !!this.supportingChains &&
      !!this.settings &&
      !!this.web3 &&
      !!this.connectorConfig &&
      !!this.contracts
    )
  }

  dd?: number

  get isHavedd(): boolean {
    return !!this.dd
  }

  @observable user?: User

  @observable isLoading = true

  @actionLogin
  login = (chainID: LoginPayload['chainID'], connectorConfig: LoginPayload['connectorConfig']) => ({
    connectorConfig,
    chainID,
  })

  @effectLoginLoading
  toLoading = () => {
    this.isLoading = true
  }

  @effectLoginSuccess
  @effectLoginError
  toEndLoading = () => {
    this.isLoading = false
  }

  @effectLoginSuccess
  whenLoginSuccess = ({
    account,
    chainID,
    web3,
    connectorConfig,
    supportingChains,
    settings,
    contracts,
  }: LoginSuccessPayload) => {
    this.chainID = chainID
    this.web3 = web3
    this.supportingChains = supportingChains
    this.settings = settings
    this.contracts = contracts

    if (account) {
      this.user = new User(account)
      this.connectorConfig = connectorConfig
    }
  }

  @effectLoginError
  whenLoginError = ({ error }: ErrorPayload) => {
    this.error = error
  }

  @actionLogout
  logout = () => {}

  @effectLogout
  toLogout = () => {
    this.user = undefined
    this.chainID = undefined
    this.web3 = undefined
    this.connectorConfig = undefined
    this.supportingChains = undefined
    this.settings = undefined
    this.contracts = undefined
  }

  @actionChainToChange
  changeChain = (chainID: ChainNames) => ({ chainID })
}
