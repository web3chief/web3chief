import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ArrowDropIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.375 6.78049L3.62439 5.21875L7.9997 8.71899L12.375 5.21875L13.6244 6.78049L7.9997 11.2802L2.375 6.78049Z'
        fill='inherit'
      />
    </svg>
  </SvgIcon>
)
