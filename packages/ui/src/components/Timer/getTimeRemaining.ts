export const getTimeRemaining = (expiryTimestmp?: number) => {
  if (expiryTimestmp) {
    const seconds = Math.floor(expiryTimestmp % 60)
    const minutes = Math.floor((expiryTimestmp / 60) % 60)
    const hours = Math.floor((expiryTimestmp / (60 * 60)) % 24)
    const days = Math.floor(expiryTimestmp / (60 * 60 * 24))
    const hoursWithoutDays = Math.floor(expiryTimestmp / (60 * 60))

    return {
      days,
      hours,
      minutes,
      seconds,
      hoursWithoutDays,
    }
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hoursWithoutDays: 0,
  }
}
