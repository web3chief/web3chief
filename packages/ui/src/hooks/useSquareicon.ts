import { useEffect, useState } from 'react'
import squareicon from 'squareicon'

export function useSqareicon(address = '') {
  const [imgUrl, setImageUrl] = useState('')

  const hasher = (address: string): string => address

  useEffect(() => {
    squareicon(
      {
        id: 'mistic100',
        colors: 3,
        pixels: 8,
        scheme: 'standard',
        hasher: () => hasher(address),
        // hasher: address as (val: string) => string,
        size: 140,
        padding: 0,
        symmetry: 'none',
        background: 'rgb(132, 239, 144)',
      },
      (err, data: string | Buffer) => {
        if (!err) setImageUrl(data as string)
      },
    )
  }, [address])

  return imgUrl
}
