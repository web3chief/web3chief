import {
  put,
  call,
  fork,
  takeEvery,
  cancel,
  actionChannel,
  take,
  delay,
} from 'typed-redux-saga/macro'
import { Channel } from 'redux-saga'
import { Action, createActionAndEffect } from '@nimel/directorr'
import {
  getQueryContext,
  QueryContext,
  getQueryCacheContext,
} from '@web3chief/sdk/sagas/context'
import { ErrorCode } from '@web3chief/sdk/config/error'
import { ReturnPromiseType } from '@web3chief/sdk/types'
import {
  actionLogout,
  actionLoginSuccess,
  actionLoginError,
} from '@web3chief/sdk/sagas/decorators'
import { createUniqKey } from '@web3chief/sdk/sagas/utils'

export const [
  actionQuery,
  effectQuery,
  actionQuerySuccess,
  effectQuerySuccess,
  actionQueryError,
  effectQueryError,
  actionQueryLoading,
  effectQueryLoading,
] = createActionAndEffect<
  DataQueryPayload,
  DataQueryPayloadSuccess,
  DataQueryPayloadError,
  DataQueryPayload
>('QUERY')

export type Variables = any

export type QueryArg<V extends Variables = unknown> = {
  ctx: QueryContext
  variables: V
}

export type Query<V extends Variables = Variables, R = any> = ({
  ctx,
  variables,
}: QueryArg<V>) => Promise<R> | R

export type ReturnTypeQuery<Q extends Query> = ReturnPromiseType<ReturnType<Q>>

export interface DataQueryPayload<Q extends Query = Query, V = any> {
  query: Q
  variables: V
  pollingInterval?: number
}

export interface DataQueryPayloadSuccess<Q extends Query = Query, V = any>
  extends DataQueryPayload<Q, V> {
  data: ReturnPromiseType<ReturnType<Q>>
}

export interface DataQueryPayloadError<Q extends Query = Query, V = any>
  extends DataQueryPayload<Q, V> {
  error: ErrorCode
}

function* getQuery({ payload: { query, variables } }: Action<string, DataQueryPayload>) {
  const queryContext = yield* getQueryContext()
  const { queue, queryRunner } = yield* getQueryCacheContext()

  yield put(actionQueryLoading.createAction({ query, variables }))

  const key = createUniqKey([query.name, variables])
  const isPending = queue.has(key)

  if (isPending) return

  queue.setPending(key)

  try {
    const data = yield* call(query, { ctx: queryContext, variables })
    queue.removePending(key)
    yield put(actionQuerySuccess.createAction({ query, variables, data }))
    queryRunner.resolve(key, data)
  } catch (error: any) {
    queue.removePending(key)
    yield put(actionQueryError.createAction({ query, variables, error }))
    queryRunner.reject(key, error)
  }
}

export function* queryWatch(channel: Channel<Action>) {
  yield takeEvery(channel, getQuery)
}

export function* queryChannel() {
  const channel = yield* actionChannel(actionQuery.type)

  while (true) {
    yield take(actionLoginSuccess.type)

    const task = yield* fork(queryWatch, channel)

    yield* take([actionLoginError.type, actionLogout.type])

    channel.flush(() => {})

    yield cancel(task)

    yield delay(0)
  }
}
