import * as React from 'react'
import { FC } from 'react'
import {
  default as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@mui/material/Pagination'
import { PaginationItem } from '@mui/material'
import { ChevronRightIcon } from '@web3chief/ui/Icon/ChevronRightIcon'
import { ChevronLeftIcon } from '@web3chief/ui/Icon/ChevronLeftIcon'

export const Pagination: FC<MuiPaginationProps> = props => (
  <MuiPagination
    shape='rounded'
    size='large'
    renderItem={item => (
      <PaginationItem
        components={{
          previous: ChevronLeftIcon,
          next: ChevronRightIcon,
        }}
        {...item}
      />
    )}
    {...props}
  />
)
