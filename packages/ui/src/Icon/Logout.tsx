import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const LogoutIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 17 16' {...props}>
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.00293 1H1.00293V2V14V15H2.00293H7.00293V13H3.00293V3H7.00293V1H2.00293ZM10.2958 5.70711L11.5887 7L5.00293 7V9L11.5887 9L10.2958 10.2929L11.71 11.7071L14.71 8.70711L15.4171 8L14.71 7.29289L11.71 4.29289L10.2958 5.70711Z'
        fill='#797979'
      />
    </svg>
  </SvgIcon>
)
