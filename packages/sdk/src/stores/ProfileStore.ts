import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import {
  getBoxesQuery,
  getProfileCategoriesQuery,
  getCurrentProfileQuery,
  getInventoryProfileAssetsQuery,
  GetInventoryProfileListVariables,
  lockProfileQuery,
  setCurrentProfileQuery,
  transferAssetToWalletQuery,
  TransferItemToWalletVariables,
  unlockProfileQuery,
} from '@web3chief/sdk/queries'
import { whenInit } from '@nimel/directorr'
import { Profile } from '@web3chief/sdk/types'

export class ProfileStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  @whenInit
  getProfile = () => {
    this.getQuery(getCurrentProfileQuery, {})
  }

  changeProfile = (profile: Profile) => {
    this.getQuery(setCurrentProfileQuery, { profile })
    this.getQuery(getCurrentProfileQuery, {})
  }

  @computed
  get profile() {
    return this.getData(getCurrentProfileQuery)
  }

  getAssets = (params: GetInventoryProfileListVariables) => {
    this.getQuery(getInventoryProfileAssetsQuery, params)
  }

  @computed
  get assets() {
    return this.getData(getInventoryProfileAssetsQuery)
  }

  // private whenProfileChange = autorun(() => {
  //   if (this.profile) {
  //     this.getQuery(getInventoryProfileAssetsQuery, { profile: `${this.profile.profile.contractAddress}` })
  //   }
  // })

  // @whenDestroy
  // whenDestroy = () => {
  //   this.whenProfileChange()
  // }

  getCategories = () => this.getQuery(getProfileCategoriesQuery, {})

  @computed
  get categories() {
    return this.getData(getProfileCategoriesQuery)
  }

  getBoxes = () => this.getQuery(getBoxesQuery, {})

  @computed
  get boxes() {
    return this.getData(getBoxesQuery)
  }

  lock = (profileID: string) => this.getQuery(lockProfileQuery, { profileID })

  @computed
  get lockData() {
    return this.getData(lockProfileQuery)
  }

  unlock = (profileID: string) => this.getQuery(unlockProfileQuery, { profileID })

  @computed
  get unlockData() {
    return this.getData(unlockProfileQuery)
  }

  transferToWallet = (params: TransferItemToWalletVariables) =>
    this.getQuery(transferAssetToWalletQuery, params)

  @computed
  get transferToWalletData() {
    return this.getData(transferAssetToWalletQuery)
  }
}
