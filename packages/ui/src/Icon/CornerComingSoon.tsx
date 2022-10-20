import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CornerComingSoon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='8'
    height='8'
    viewBox='0 0 8 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 0H0V1V8H1V1H8V0H1Z'
      fill='white'
      fillOpacity='0.2'
    />
  </SvgIcon>
)
