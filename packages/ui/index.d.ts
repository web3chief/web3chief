declare module '*.woff2' {
  const value: string
  export default value
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

interface Window {
  ethereum: any
  curProvider: any
}
