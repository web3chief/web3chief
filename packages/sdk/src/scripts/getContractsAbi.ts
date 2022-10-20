import { Api } from '../types/apiAxios'
// eslint-disable-next-line import/no-extraneous-dependencies
import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

const CONTRACTS_JSON_PATH = path.resolve(process.cwd(), './src/config/contracts/abi')

if (!fs.existsSync(CONTRACTS_JSON_PATH)) {
  fs.mkdirSync(CONTRACTS_JSON_PATH, { recursive: true })
}

dotenv.config({ path: path.resolve(process.cwd(), '.env.development') })

const axios = new Api({ baseURL: process.env.BACKEND_ADDRESS })

void axios.apiInfo.apiInfoControllerSettings().then(({ data: { smartContracts } }) => {
  smartContracts.forEach(({ typeContract, abi }) => {
    const type = `${typeContract}`.toLowerCase()
    fs.writeFileSync(path.resolve(CONTRACTS_JSON_PATH, `${type}Abi.json`), JSON.stringify(abi))
  })
})
