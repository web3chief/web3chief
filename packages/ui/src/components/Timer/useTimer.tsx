import { useCallback, useEffect, useState } from 'react'
import { getTimeRemaining } from './getTimeRemaining'

interface IObjectKeys {
  [key: string]: number
}

interface ITimer extends IObjectKeys {
  days: number
  hours: number
  minutes: number
  seconds: number
  hoursWithoutDays: number
}

const useTimer = (timestamp?: number, currentTimestamp?: number | string) => {
  const [time, setTime] = useState<number>(0)
  const startTime = getTimeRemaining()
  const [formatTotalTime, setFormatTotalTime] = useState(startTime)

  const setFormattingTotalTime = useCallback((timeRemaining: any) => {
    Object.keys(timeRemaining).forEach((el: string) =>
      setFormatTotalTime(prev => ({
        ...prev,
        [el]: handleDigit(timeRemaining[el]),
      })),
    )
  }, [])

  useEffect(() => {
    if (timestamp && currentTimestamp && timestamp > currentTimestamp) {
      const time = timestamp - +currentTimestamp
      setTime(time)
      setFormattingTotalTime(time)
    }
  }, [timestamp, currentTimestamp, setFormattingTotalTime])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time) {
        const timeRemaining: ITimer = getTimeRemaining(time - 1)
        setTime(time - 1)
        setFormattingTotalTime(timeRemaining)
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  const handleDigit = (value: number) => {
    if (value < 0) {
      return '00'
    }

    return value <= 9 ? `0${value}` : value.toString()
  }

  return formatTotalTime
}

export default useTimer
