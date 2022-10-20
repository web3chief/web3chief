import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  getBoxDropListQuery,
  getBoxQuery,
  openBoxQuery,
} from '@web3chief/sdk/queries'

export class BoxStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getBox = (tokenID: string, amount: string) => this.getQuery(getBoxQuery, { tokenID, amount })

  @computed
  get box() {
    return this.getData(getBoxQuery)
  }

  openBox = (tokenID: string, amount: string) => this.getQuery(openBoxQuery, { tokenID, amount })

  @computed
  get openBoxData() {
    return this.getData(openBoxQuery)
  }

  getOpenedBox = (hash: string) => this.getQuery(getBoxDropListQuery, { hash })

  @computed
  get openedBox() {
    return this.getData(getBoxDropListQuery)
  }
}
