export const ellipsis = (value?: string, count = 4, count2?: number) => {
  if (value && value.length && value.length > 10) {
    if (count2) {
      return `${value.slice(0, Math.max(0, count))}...${value.slice(
        value.length - count2,
        value.length - count2 + value.length,
      )}`
    }

    return `${value.slice(0, Math.max(0, count))}...${value.slice(
      value.length - count,
      value.length - count + value.length,
    )}`
  }

  return value
}
