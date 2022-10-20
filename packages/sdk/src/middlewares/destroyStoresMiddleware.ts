import { Middleware } from '@nimel/directorr'
import { actionDestroyStore } from '@web3chief/sdk/stores'

export const destroyStoresMiddleware: Middleware = (action, next, directorr) => {
  if (actionDestroyStore.isAction(action)) {
    return directorr.removeStore(action.payload.store)
  }

  next(action)
}
