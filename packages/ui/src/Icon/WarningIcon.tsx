import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const WarningIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 20 20' {...props}>
    <path
      d='M0.582555 13.8782L7.66855 2H10H12.3315L19.4174 13.8782L16.9475 18H10H3.05251L0.582555 13.8782Z'
      fill='#FFBE4D'
      fillOpacity='0.3'
      stroke='#FFBE4D'
    />
    <path
      opacity='0.3'
      d='M2.7897 13.9969L8.64508 3.75H10.0152H11.3549L17.2103 13.9969L15.8585 16.25H10.0152H4.14155L2.7897 13.9969Z'
      fill='none'
      stroke='#FFBE4D'
      strokeWidth='0.5'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 6H11L10.6944 11.5H9.30556L9 6ZM9.38889 13L9.5 15H10.5L10.6111 13H9.38889Z'
      fill='#FFBE4D'
    />
  </SvgIcon>
)
