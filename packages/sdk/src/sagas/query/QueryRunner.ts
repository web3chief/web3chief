import { Directorr } from '@nimel/directorr'
import { createUniqKey, UniqKey } from '../utils'
import { actionQuery, ReturnTypeQuery, Query } from './query'

type Callbacks = { resolve: any; reject: any }

export class QueryRunner {
  dispatch: Directorr['dispatch']

  constructor({ dispatch }: { dispatch: Directorr['dispatch'] }) {
    this.dispatch = dispatch
  }

  runnerMap = new Map<string, Callbacks>()

  resolve(uniqKey: UniqKey, data: any) {
    const runners = this.runnerMap.get(uniqKey)

    if (runners) runners.resolve(data)

    this.removeQuery(uniqKey)
  }

  reject(uniqKey: UniqKey, error: any) {
    const runners = this.runnerMap.get(uniqKey)

    if (runners) runners.resolve(error)

    this.removeQuery(uniqKey)
  }

  private removeQuery(uniqKey: UniqKey) {
    return this.runnerMap.delete(uniqKey)
  }

  runQuery = <
    Q extends Query,
    V extends Parameters<Q>[0]['variables'] = Parameters<Q>[0]['variables'],
    R = ReturnTypeQuery<Q>,
  >(
    query: Q,
    variables: V,
  ): Promise<R> => {
    const key = createUniqKey([query.name, variables])
    let resolve: any
    let reject: any
    // eslint-disable-next-line promise/param-names
    const promise = new Promise<R>((res, rej) => {
      resolve = res
      reject = rej
    })

    this.runnerMap.set(key, { resolve, reject })

    this.dispatch(actionQuery.createAction({ query, variables }))

    return promise
  }
}
