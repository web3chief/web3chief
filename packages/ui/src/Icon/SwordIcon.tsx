import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SwordIcon: FC<SvgIconProps> = props => (
  <SvgIcon width='16' height='16' viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.9904 11.0857L7.40475 12.5L15 6.5V1.5H10L4 9.09526L5.41435 10.5096C5.46871 10.4551 5.52051 10.3969 5.56939 10.335L10.9688 3.5H13V5.53117L6.16498 10.9306C6.10311 10.9795 6.0449 11.0313 5.9904 11.0857Z'
    />
    <path d='M9 13.3182L3.18182 7.5L1.72727 8.95455L3.90909 11.1364L1 14.0455L2.45455 15.5L5.36364 12.5909L7.54545 14.7727L9 13.3182Z' />
  </SvgIcon>
)
