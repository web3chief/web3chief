import { useState, useEffect, useCallback } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null

    return {
      width,
      height,
    }
  }, [hasWindow])

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions())
  }, [getWindowDimensions])

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (hasWindow) window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow, handleResize])
  // eslint-disable-next-line react-@web3chief/ui/hooks/exhaustive-deps

  return windowDimensions
}
