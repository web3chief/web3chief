import { ErrorCode as ErrorCodeSDK } from '@web3chief/sdk'

export const CODE_ERROR = {
  unknown: '0',
  network: {
    disconnected: '0.1',
    connected: '0.2',
    change: '0.3',
  },
  login: {
    notFoundProvider: '1.1',
    userReject: '1.2',
    unknown: '1.3',
    noAccount: '1.4',
  },
  create: {
    user: '2.1',
  },
  user: {
    notEnoughBalance: '3.1',
    notExist: '3.2',
  },
  config: {
    init: '4.1',
  },
}

export const CODE_ERROR_MESSAGE = {
  '0': 'unknown error',
  [CODE_ERROR.network.disconnected]: 'network disconnected',
  [CODE_ERROR.network.connected]: 'network connected',
  [CODE_ERROR.network.change]: 'network changed',
  [CODE_ERROR.login.notFoundProvider]: 'not found provider',
  [CODE_ERROR.login.userReject]: 'user reject',
  [CODE_ERROR.login.noAccount]: 'not connect wallet',
  [CODE_ERROR.user.notEnoughBalance]: 'not enough token balance',
  [CODE_ERROR.user.notExist]: 'user does not exist',
  [CODE_ERROR.config.init]: 'config dont have all contracts',
}

export class ErrorCode extends ErrorCodeSDK {
  static CODE_ERROR = CODE_ERROR
}