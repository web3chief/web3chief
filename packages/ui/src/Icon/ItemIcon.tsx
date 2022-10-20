import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { FC } from 'react'

export const ItemIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.9904 10.5857L7.40475 12L15 6V1H10L4 8.59526L5.41435 10.0096C5.46871 9.9551 5.52051 9.89689 5.56939 9.83502L10.9688 3H13V5.03117L6.16498 10.4306C6.10311 10.4795 6.0449 10.5313 5.9904 10.5857Z'
      fill='#8C888C'
    />
    <path
      d='M9 12.8182L3.18182 7L1.72727 8.45455L3.90909 10.6364L1 13.5455L2.45455 15L5.36364 12.0909L7.54545 14.2727L9 12.8182Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
