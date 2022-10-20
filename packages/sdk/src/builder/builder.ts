import '@web3chief/sdk/config/directorr'
import { Directorr, DirectorrStoreClassConstructor } from '@nimel/directorr'
import createSagaMiddleware from 'redux-saga'
import {
  root,
  QUERY_CONTEXT,
  CONNECTOR_CONTEXT,
  QUERY_CACHE_CONTEXT,
  SETTINGS_CONTEXT,
  DISPATCH_CONTEXT,
} from '@web3chief/sdk/sagas'
import {
  logMiddleware,
  errorShowMiddleware,
  destroyStoresMiddleware,
} from '@web3chief/sdk/middlewares'
import { IS_DEV, IS_SERVER } from '@web3chief/sdk/config/env'
import merge from 'lodash/merge'

export const DEFAULT_OPTIONS = {
  middlewares: IS_DEV
    ? [logMiddleware, destroyStoresMiddleware, errorShowMiddleware]
    : [destroyStoresMiddleware, errorShowMiddleware],
  rootSaga: root,
}

export function createBuilder(createOptions = DEFAULT_OPTIONS) {
  const { middlewares } = merge({}, createOptions, DEFAULT_OPTIONS)
  const directorr = new Directorr()

  if (!IS_SERVER) {
    directorr.addMiddlewares(middlewares)

    const sagaMiddleware = createSagaMiddleware({
      context: {
        [QUERY_CONTEXT]: {},
        [CONNECTOR_CONTEXT]: {},
        [QUERY_CACHE_CONTEXT]: {},
        [SETTINGS_CONTEXT]: {},
        [DISPATCH_CONTEXT]: directorr.dispatch,
      },
    })

    directorr.addReduxMiddlewares([sagaMiddleware])
    let sagaTask = sagaMiddleware.run(root)

    if ((import.meta as any).webpackHot) {
      ;(import.meta as any).webpackHot?.accept('@web3chief/sdk/sagas', () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
        const { root } = require('@web3chief/sdk/sagas')
        sagaTask.cancel()
        void sagaTask.toPromise().then(() => {
          sagaTask = sagaMiddleware.run(root)
        })
      })
    }

    if (IS_DEV) {
      ;(global as any).dirtr = directorr
    }
  }

  return {
    builder: <I>(StoreConstructor: DirectorrStoreClassConstructor<I>): I =>
      directorr.addStore(StoreConstructor),
    directorr,
  }
}
