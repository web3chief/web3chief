import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const BinanceUsd: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 24 24' {...props}>
    <circle cx='8' cy='8' r='8' fill='#F0B90B' />
    <path
      d='M7.97657 2.66675L9.29207 4.01394L5.97956 7.32645L4.66406 6.01096L7.97657 2.66675Z'
      fill='#EDF0F4'
    />
    <path
      d='M9.97359 4.66357L11.2891 6.01077L5.97956 11.3203L4.66406 10.0048L9.97359 4.66357Z'
      fill='#EDF0F4'
    />
    <path
      d='M3.98249 6.66064L5.29798 8.00784L3.98249 9.32333L2.66699 8.00784L3.98249 6.66064Z'
      fill='#EDF0F4'
    />
    <path
      d='M11.9707 6.66064L13.2862 8.00784L7.97663 13.3174L6.66113 12.0019L11.9707 6.66064Z'
      fill='#EDF0F4'
    />
  </SvgIcon>
)
