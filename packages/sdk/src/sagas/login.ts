import { take, put, call, fork, cancel, delay } from 'typed-redux-saga/macro'
import { Action } from '@nimel/directorr'
import { UnsupportedChainIdError } from '@web3-react/core'
import { eventChannel } from 'redux-saga'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import web3Utils from 'web3-utils'
import { AbstractConnector } from '@web3-react/abstract-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import Web3 from 'web3'
import { setupCache } from 'axios-cache-interceptor'
import {
  setQueryContext,
  resetQueryContext,
  setConnectorContext,
  resetConnectorContext,
  getConnectorContext,
  setQueryCacheContext,
  resetQueryCacheContext,
  getQueryContext,
  getSettingsContext,
  setSettingsContext,
  getDispatchContext,
} from './context'
import { ErrorCode } from '@web3chief/sdk/config/error'
import {
  setNetworkChainID,
  getNetworkChainID,
  ChainNames,
} from '@web3chief/sdk/config/network'
import {
  getConnectorName,
  getConnectors,
  setConnectorName,
  CONNECTORS_BY_CHAIN,
  ConnectorConfig,
  ConnectorNames,
} from '@web3chief/sdk/config/wallet'
import { IS_DEV, API_URL } from '@web3chief/sdk/config/env'
import {
  actionLogin,
  LoginPayload,
  actionLogout,
  actionLoginLoading,
  actionLoginError,
  actionLoginSuccess,
  actionAccountsChanged,
  actionMessage,
  actionChainChanged,
  actionChainChangedError,
  ChainChangedPayload,
  actionConnected,
  actionChainToChange,
  ChainToChangePayload,
  actionDisconnected,
} from './decorators'
import { getAnonimWeb3, switchNetwork, createContractFabric } from './utils'
import { QueryQueue } from './query'
import { Api, GetSettingsResponseDto } from '@web3chief/sdk/types'
import { addMock } from '@web3chief/sdk/queries/mocks/axiosMock'
import { IS_SIGNED_KEY } from '@web3chief/sdk/config/keys'
import { createContracts } from './createContracts'
import { QueryRunner } from './query/QueryRunner'

const BLACK_LIST_SWITCH_CONNECTORS: ConnectorNames[] = ['walletConnect']
// const BLACK_LIST_SWITCH_CONNECTORS: ConnectorNames[] = []
const ACCOUNTS_CHANGED_EVENT = 'accountsChanged'
const CONNECT_EVENT = 'connect'
const DISCONNECT_EVENT = 'disconnect'
const CHAIN_CHANGED_EVENT = 'chainChanged'
const MESSAGE_EVENT = 'message'

export function* watchEtheriumAccountChanged(provider: any) {
  const channel = eventChannel<string[]>(emitter => {
    provider.on(ACCOUNTS_CHANGED_EVENT, emitter)

    return () => {
      provider.off(ACCOUNTS_CHANGED_EVENT, emitter)
    }
  })

  while (true) {
    const [account] = yield* take(channel)
    const { account: currentAccount } = yield* getQueryContext()

    if (account !== currentAccount) yield put(actionAccountsChanged.createAction({ account }))
  }
}

export function* watchEtheriumConnected(provider: any) {
  const channel = eventChannel(emitter => {
    provider.on(CONNECT_EVENT, emitter)

    return () => {
      provider.off(CONNECT_EVENT, emitter)
    }
  })

  while (true) {
    const { chainId } = yield take(channel)

    yield put(actionConnected.createAction({ chainID: web3Utils.hexToNumber(chainId) }))
  }
}

export function* watchEtheriumDisconnected(provider: any) {
  const channel = eventChannel<{ error: Error | string }>(emitter => {
    const handler = (error = ErrorCode.CODE_ERROR.network.disconnected) => emitter({ error })
    provider.on(DISCONNECT_EVENT, handler)

    return () => {
      provider.off(DISCONNECT_EVENT, handler)
    }
  })

  while (true) {
    const error = yield* take(channel)
    const { account: currentAccount } = yield* getQueryContext()

    if (currentAccount) {
      yield put(
        actionDisconnected.createAction({
          error: new ErrorCode(ErrorCode.CODE_ERROR.network.disconnected, error),
        }),
      )
      yield put(actionLogout.createAction())
    }
  }
}

export function* watchEtheriumChainChanged(provider: any) {
  const channel = eventChannel<string | { chainId: string }>(emitter => {
    provider.on(CHAIN_CHANGED_EVENT, emitter)

    return () => {
      provider.off(CHAIN_CHANGED_EVENT, emitter)
    }
  })

  while (true) {
    const payload = yield* take(channel)
    const { chainID: currentChainID } = yield* getQueryContext()

    const chainID = web3Utils.hexToNumber(
      typeof payload === 'string' || typeof payload === 'number' ? payload : payload.chainId,
    ) as ChainNames

    if (currentChainID && chainID !== currentChainID)
      yield put(actionChainChanged.createAction({ chainID }))
  }
}

export function* watchEtheriumMessage(provider: any) {
  const channel = eventChannel<{ type: string }>(emitter => {
    provider.on(MESSAGE_EVENT, emitter)

    return () => {
      provider.off(MESSAGE_EVENT, emitter)
    }
  })

  while (true) {
    const message = yield* take(channel)

    yield put(actionMessage.createAction(message))
  }
}

export function* resetContexts() {
  yield call(resetQueryContext)
  yield call(resetConnectorContext)
  yield call(resetQueryCacheContext)
}

export function* authorize(
  chainID: ChainNames,
  connector: AbstractConnector,
  connectorConfig: ConnectorConfig,
  set?: GetSettingsResponseDto,
): unknown {
  yield put(actionLoginLoading.createAction())

  const axios = new Api({ baseURL: API_URL })

  let settings: GetSettingsResponseDto
  let supportingChains: ChainNames[]

  try {
    settings =
      set || (yield* call(() => axios.apiInfo.apiInfoControllerSettings().then(({ data }) => data)))
    supportingChains = [Number.parseInt(settings.blockchainId)] as ChainNames[]
  } catch (error) {
    return yield put(
      actionLoginError.createAction({
        error: new ErrorCode(ErrorCode.CODE_ERROR.unknown, error),
      }),
    )
  }

  try {
    try {
      yield call(() => connector.activate())
    } catch (error) {
      yield call(() => connector.deactivate())

      if (error instanceof UnsupportedChainIdError) {
        try {
          yield put(
            actionChainChanged.createAction({
              chainID: supportingChains[0],
            }),
          )
        } catch (switchError) {
          return yield put(
            actionChainChangedError.createAction({
              error: new ErrorCode(ErrorCode.CODE_ERROR.network.change, switchError),
            }),
          )
        }

        yield call(() => connector.activate())
      } else if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
        return yield put(
          actionLoginError.createAction({
            error: new ErrorCode(ErrorCode.CODE_ERROR.login.notFoundProvider, error),
          }),
        )
      } else if (
        error instanceof UserRejectedRequestErrorInjected ||
        error instanceof UserRejectedRequestErrorWalletConnect
      ) {
        return yield put(
          actionLoginError.createAction({
            error: new ErrorCode(ErrorCode.CODE_ERROR.login.userReject, error),
          }),
        )
      }
    }

    yield call(setConnectorName, connectorConfig.type)

    const provider = yield call(() => connector.getProvider())
    const account: string = yield call(() => connector.getAccount())

    if (process.env.MOCK === 'true') {
      addMock(axios.instance)
    } else {
      setupCache(axios.instance, { ttl: 2000 })
    }

    yield call(switchNetwork, chainID, provider)

    const web3 = new Web3(provider)

    const [signedAccount] = JSON.parse(localStorage.getItem(IS_SIGNED_KEY) || JSON.stringify([]))

    if (signedAccount !== account) {
      const {
        data: { phrase },
      } = yield* call(() =>
        axios.apiAuth.apiAuthControllerGetPhrase({ wallet: account, requestType: 'AUTH' }),
      )

      const signedPhrase = yield* call(() => web3.eth.personal.sign(phrase, account, ''))

      try {
        yield* call(() =>
          axios.apiAuth.apiAuthControllerCheckPhrase({
            wallet: account,
            phrase,
            signedPhrase,
            source: 'CABINET',
          }),
        )

        localStorage.setItem(IS_SIGNED_KEY, JSON.stringify([account, phrase, signedPhrase]))
      } catch (error) {
        return yield put(
          actionLoginError.createAction({
            error: new ErrorCode(ErrorCode.CODE_ERROR.user.notExist, error),
          }),
        )
      }
    }

    yield fork(watchEtheriumAccountChanged, provider)
    yield fork(watchEtheriumConnected, provider)
    yield fork(watchEtheriumDisconnected, provider)
    yield fork(watchEtheriumChainChanged, provider)

    if (IS_DEV) {
      window.curProvider = provider
    }

    const createContract = createContractFabric(web3, chainID)
    const contracts = createContracts(chainID, settings, createContract)
    const dispatch = yield* getDispatchContext()
    const queryRunner = new QueryRunner({ dispatch })

    yield call(setQueryContext, {
      chainID,
      account,
      web3,
      createContract,
      axios,
      connector,
      provider,
      type: connectorConfig.type,
      supportingChains,
      contracts,
      runQuery: queryRunner.runQuery,
    })
    yield call(setConnectorContext, {
      connector,
      provider,
      type: connectorConfig.type,
    })
    yield call(setQueryCacheContext, {
      queue: new QueryQueue(),
      queryRunner,
    })
    yield call(setSettingsContext, {
      settings,
      supportingChains,
    })

    yield put(
      actionLoginSuccess.createAction({
        chainID,
        account,
        web3,
        connectorConfig,
        supportingChains,
        settings,
        contracts,
      }),
    )
  } catch (error) {
    yield call(() => connector.deactivate())
    yield call(setConnectorName)

    yield put(
      actionLoginError.createAction({
        error: new ErrorCode(ErrorCode.CODE_ERROR.unknown, error),
      }),
    )
  }
}

export function* initAnonim(chainID: ChainNames, set?: GetSettingsResponseDto) {
  yield delay(0)

  try {
    const axios = new Api({ baseURL: API_URL })
    const web3 = getAnonimWeb3(chainID)
    const createContract = createContractFabric(web3, chainID)
    const settings =
      set || (yield* call(() => axios.apiInfo.apiInfoControllerSettings().then(({ data }) => data)))
    const supportingChains = [Number.parseInt(settings.blockchainId)] as ChainNames[]
    const contracts = createContracts(chainID, settings, createContract)
    const dispatch = yield* getDispatchContext()
    const queryRunner = new QueryRunner({ dispatch })

    if (process.env.MOCK === 'true') {
      addMock(axios.instance)
    } else {
      setupCache(axios.instance, { ttl: 2000 })
    }

    yield call(setSettingsContext, {
      settings,
      supportingChains,
    })

    yield call(setQueryContext, {
      chainID,
      web3,
      createContract,
      axios,
      supportingChains,
      contracts,
      runQuery: queryRunner.runQuery,
    })
    yield call(setQueryCacheContext, {
      queue: new QueryQueue(),
      queryRunner,
    })

    yield put(actionLoginLoading.createAction())

    yield put(
      actionLoginSuccess.createAction({
        chainID,
        web3,
        supportingChains,
        settings,
        contracts,
      }),
    )
  } catch (error) {
    yield put(
      actionLoginError.createAction({
        error: new ErrorCode(ErrorCode.CODE_ERROR.unknown, error),
      }),
    )
  }
}

export function* init() {
  const axios = new Api({ baseURL: API_URL })

  const { data: settings } = yield* call(() => axios.apiInfo.apiInfoControllerSettings())
  const supportingChains = [Number.parseInt(settings.blockchainId)] as ChainNames[]
  const chainID = getNetworkChainID(supportingChains)
  const connectorName = getConnectorName()
  const connectorConfs = getConnectors(chainID)
  const connectorConfig = connectorConfs.find(c => c.type === connectorName)

  if (
    connectorConfig &&
    !BLACK_LIST_SWITCH_CONNECTORS.includes(connectorConfig.type) &&
    localStorage.getItem(IS_SIGNED_KEY)
  ) {
    return yield* put(
      actionLogin.createAction({
        connectorConfig,
        chainID,
        settings,
      }),
    )
  }

  yield call(setConnectorName)
  yield call(initAnonim, chainID, settings)
}

export function* chainChangedWatch() {
  while (true) {
    const {
      payload: { chainID },
    }: Action<string, ChainChangedPayload> = yield take([actionChainChanged.type])

    const { type } = yield* getConnectorContext()
    const { supportingChains } = yield* getSettingsContext()
    const newChainConnectors = CONNECTORS_BY_CHAIN[chainID]?.find(c => c.type === type)

    if (newChainConnectors && supportingChains.includes(chainID)) {
      try {
        setNetworkChainID(chainID)

        window.location.reload()
      } catch (error: any) {
        yield put(actionChainChangedError.createAction({ error }))
      }
    } else {
      setNetworkChainID(supportingChains[0])
      yield put(actionLogout.createAction())
    }
  }
}

export function* chainToChangeWatch() {
  while (true) {
    const {
      payload: { chainID },
    }: Action<string, ChainToChangePayload> = yield take([actionChainToChange.type])

    const { type, provider } = yield* getConnectorContext()
    const newChainConnectors = CONNECTORS_BY_CHAIN[chainID]?.find(c => c.type === type)

    if (newChainConnectors) {
      yield call(switchNetwork, chainID, provider)

      setNetworkChainID(chainID)

      window.location.reload()
    } else {
      yield put(
        actionChainChangedError.createAction({
          error: new ErrorCode(ErrorCode.CODE_ERROR.network.change),
        }),
      )
    }
  }
}

export function* accountChangeWatch() {
  while (true) {
    yield take([actionAccountsChanged.type])
    yield put(actionLogout.createAction())
  }
}

export function* login() {
  yield call(resetContexts)

  yield fork(chainChangedWatch)
  yield fork(chainToChangeWatch)
  yield fork(accountChangeWatch)

  while (true) {
    const {
      payload: { connectorConfig, chainID, settings },
    }: Action<string, LoginPayload> = yield take(actionLogin.type)
    const connector = connectorConfig.createConnector(chainID)

    const task = yield* fork(authorize, chainID, connector, connectorConfig, settings)
    const { type } = yield* take([actionLoginError.type, actionLogout.type])

    if (type === actionLogout.type) {
      yield cancel(task)

      yield call(() => connector.deactivate())
      yield call(setConnectorName)
      yield call(resetContexts)
    }

    yield call(initAnonim, chainID)
  }
}
