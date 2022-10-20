import { UniqKey } from '@web3chief/sdk/sagas'

export class QueryQueue {
  queryPending = new Set<string>()

  has(uniqKey: UniqKey) {
    return this.queryPending.has(uniqKey)
  }

  setPending(uniqKey: UniqKey) {
    return this.queryPending.add(uniqKey)
  }

  removePending(uniqKey: UniqKey) {
    return this.queryPending.delete(uniqKey)
  }
}
