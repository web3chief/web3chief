import { computed, makeObservable } from 'mobx'
import { QueryStore } from './QueryStore'
import { getProfilesQuery } from '@web3chief/sdk/queries'

export class ProfilesStore extends QueryStore {
  constructor() {
    super()
    makeObservable(this)
  }

  getProfiles = () => {
    this.getQuery(getProfilesQuery, {})
  }

  @computed
  get profiles() {
    return this.getData(getProfilesQuery)
  }
}
