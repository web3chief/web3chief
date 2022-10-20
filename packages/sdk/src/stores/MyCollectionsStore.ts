import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  getMarketplaceOrdersQuery,
  getMarketplaceCategoriesQuery,
  getMyCollectionsAssetsQuery,
  GetMyCollectionsListVariables,
} from '@web3chief/sdk/queries'

export class MyCollectionsStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getCategories = () => this.getQuery(getMarketplaceCategoriesQuery, {})

  @computed
  get categories() {
    return this.getData(getMarketplaceCategoriesQuery)
  }

  getAssets = (params: GetMyCollectionsListVariables) => {
    this.getQuery(getMyCollectionsAssetsQuery, params)
  }

  @computed
  get assets() {
    return this.getData(getMarketplaceOrdersQuery)
  }
}
