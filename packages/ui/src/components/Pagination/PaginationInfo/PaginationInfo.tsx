import * as React from 'react'
import { FC } from 'react'
import { Typography } from '@mui/material'

export type PaginationInfoProps = {
  page: number
  perPage: number
  itemsCount: number
  itemsName?: string
  textFrom?: string
}
export const PaginationInfo: FC<PaginationInfoProps> = ({
  page,
  perPage,
  itemsCount,
  itemsName = 'items',
  textFrom
}) => {
  const pageStart = Math.floor(page * perPage - perPage)
  const items_from = pageStart > 0 ? pageStart : 1
  const items_to = Math.floor(page * perPage < itemsCount ? page * perPage : itemsCount)

  return (
    <>
      <Typography variant='subtitle2' color='text.secondary'>
        {items_from + '-' + items_to + ` ${textFrom || 'from'}` + itemsCount + ' ' + itemsName}
      </Typography>
    </>
  )
}
