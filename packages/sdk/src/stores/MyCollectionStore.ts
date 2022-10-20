import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  approveCreateOrderQuery,
  approveTransferToProfileQuery,
  createOrderQuery,
  CreateOrderVariables,
  getInventoryWalletAssetsQuery,
  getAssetQuery,
  GetNftVariables,
  IsCanTransferToProfileVariables,
  TransferNFTVariables,
  transferAssetToQuery,
} from '@web3chief/sdk/queries'

export class MyCollectionStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getAsset = (params: GetNftVariables) => {
    this.getQuery(getAssetQuery, params)
  }

  @computed
  get asset() {
    return this.getData(getAssetQuery)
  }

  getInventory = (scAddresses?: string[]) => {
    this.getQuery(getInventoryWalletAssetsQuery, { scAddresses })
  }

  @computed
  get inventory() {
    return this.getData(getInventoryWalletAssetsQuery)
  }

  transferAssetTo = (params: TransferNFTVariables) => {
    this.getQuery(transferAssetToQuery, params)
  }

  @computed
  get transferAssetToData() {
    return this.getData(transferAssetToQuery)
  }

  approveCreateOrder = (nftTokenAddress: string) => {
    this.getQuery(approveCreateOrderQuery, { nftTokenAddress })
  }

  @computed
  get approveCreateOrderData() {
    return this.getData(approveCreateOrderQuery)
  }

  createOrder = (params: CreateOrderVariables) => {
    this.getQuery(createOrderQuery, params)
  }

  @computed
  get createdOrderData() {
    return this.getData(createOrderQuery)
  }

  approveTransferToProfile = (params: IsCanTransferToProfileVariables) => {
    this.getQuery(approveTransferToProfileQuery, params)
  }

  @computed
  get approveTransferToProfileData() {
    return this.getData(approveTransferToProfileQuery)
  }
}
