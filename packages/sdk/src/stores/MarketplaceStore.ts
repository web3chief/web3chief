import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  getMarketplaceFilterQuery,
  getMarketplaceOrdersQuery,
  GetMarketplaceOrdersVariables,
  getMarketplaceCategoriesQuery,
} from '@web3chief/sdk/queries'

export class MarketplaceStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getCategories = () => this.getQuery(getMarketplaceCategoriesQuery, {})

  @computed
  get categories() {
    return this.getData(getMarketplaceCategoriesQuery)
  }

  getFilters = (categorySC: string) => {
    this.getQuery(getMarketplaceFilterQuery, { category: categorySC })
  }

  @computed
  get filters() {
    return this.getData(getMarketplaceFilterQuery)
  }

  getOrders = (params: GetMarketplaceOrdersVariables['params']) => {
    this.getQuery(getMarketplaceOrdersQuery, { params })
  }

  @computed
  get orders() {
    return this.getData(getMarketplaceOrdersQuery)
  }
}
