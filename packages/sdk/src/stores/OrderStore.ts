import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  approveBuyOrderQuery,
  cancelOrderQuery,
  getOrderQuery,
} from '@web3chief/sdk/queries'

export class OrderStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getOrder = (id: string) => {
    this.getQuery(getOrderQuery, { id })
  }

  @computed
  get order() {
    return this.getData(getOrderQuery)
  }

  approveOrder = (paymentTokenAddress: string) => {
    this.getQuery(approveBuyOrderQuery, { paymentTokenAddress })
  }

  @computed
  get approveOrderData() {
    return this.getData(approveBuyOrderQuery)
  }

  cancelOrder = (orderId: string) => {
    this.getQuery(cancelOrderQuery, { orderId })
  }

  @computed
  get cancelOrderData() {
    return this.getData(cancelOrderQuery)
  }
}
