import { fork } from 'redux-saga/effects'
import { queryChannel } from './query'
import { login, init } from './login'

export function* root() {
  yield fork(rootQuery)
  yield fork(login)
  yield fork(init)
}

export function* rootQuery() {
  yield fork(queryChannel)
}
