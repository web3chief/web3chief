import mockAdapter from 'axios-mock-adapter'
import { AxiosInstance } from 'axios'
import { PROFILES_MOCK } from './profiles'
import configResponse from './config.json'

export function addMock(axios: AxiosInstance) {
  const mock = new mockAdapter(axios, { delayResponse: 2000, onNoMatch: 'passthrough' })
  const VERIFY_KEY = 'VERIFY_KEY'
  // const verifyKey = localStorage.hasOwnProperty(VERIFY_KEY)

  mock
    .onGet('/profiles/0x2144ab076f20499a6e932bb0bbb57a4ededc82ea')
    .reply(() => [200, PROFILES_MOCK])

  mock.onPost('/api-auth/phrase/check').reply(() => {
    localStorage.setItem(VERIFY_KEY, `MOCK_KEY`)

    return [
      200,
      {
        status: 'ok',
      },
    ]
    // return [403]
  })

  mock.onPost('/api-auth/phrase').reply(() => [200, { phrase: 'phrase' }])

  mock.onGet('/api-info/settings').reply(() => [200, configResponse])
}
