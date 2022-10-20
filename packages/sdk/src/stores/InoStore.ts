import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  approveInoShopQuery,
  buyInoShopQuery,
  getInoShopQuery,
  getInoShopsQuery,
} from '@web3chief/sdk/queries'

export class InoStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getShops = () => this.getQuery(getInoShopsQuery, {})

  @computed
  get shops() {
    return this.getData(getInoShopsQuery)
  }

  getShop = (shopID: string) => {
    this.getQuery(getInoShopQuery, { shopID })
  }

  @computed
  get shop() {
    return this.getData(getInoShopQuery)
  }

  approveShop = (paymentTokenAddress: string) => {
    this.getQuery(approveInoShopQuery, { paymentTokenAddress })
  }

  @computed
  get approveShopData() {
    return this.getData(approveInoShopQuery)
  }

  buyInShop = (shopID: string, amount: string | number) => {
    this.getQuery(buyInoShopQuery, { shopID, amount })
  }

  @computed
  get buyInShopData() {
    return this.getData(buyInoShopQuery)
  }
}
