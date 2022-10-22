import * as React from 'react'
import { FC } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

export type PaginationInfoProps = {
  page: number
  perPage: number
  itemsCount: number
  itemsName?: string
}
export const PaginationInfo: FC<PaginationInfoProps> = ({
  page,
  perPage,
  itemsCount,
  itemsName = 'items',
}) => {
  const { t } = useTranslation('common')

  const pageStart = Math.floor(page * perPage - perPage)
  const items_from = pageStart > 0 ? pageStart : 1
  const items_to = Math.floor(page * perPage < itemsCount ? page * perPage : itemsCount)

  return (
    <>
      <Typography variant='subtitle2' color='text.secondary'>
        {items_from + '-' + items_to + ` ${t('from')} ` + itemsCount + ' ' + itemsName}
      </Typography>
    </>
  )
}
