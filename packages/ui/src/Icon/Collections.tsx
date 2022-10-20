import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CollectionsIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <svg width='16' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.00293 2H13.0029V12H15.0029V0H5.00293V2ZM3.00293 6H9.00293V14H3.00293V6ZM1.00293 16V4H11.0029V16H1.00293Z'
        fill='#797979'
      />
    </svg>
  </SvgIcon>
)
