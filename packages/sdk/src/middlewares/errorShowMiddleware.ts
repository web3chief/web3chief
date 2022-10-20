import { Middleware } from '@nimel/directorr'
import { actionQueryError, actionLoginError } from '@web3chief/sdk/sagas'

export const errorShowMiddleware: Middleware = (action, next) => {
  next(action)

  if (actionQueryError.isAction(action) || actionLoginError.isAction(action)) {
    console.error(action.payload.error)
  }
}
