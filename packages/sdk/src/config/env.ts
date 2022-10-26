import pkg from '../../package.json'
// import packageJSON from './contracts/abi/avatarsAbi.json'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_SERVER = typeof window === 'undefined'
// eslint-disable-next-line prefer-destructuring
export const API_URL = process.env.API_URL
export const PACKAGE_NAME = pkg.name

// if (!API_URL) throw new Error(`${PACKAGE_NAME}: set proccess.env.API_URL`)
