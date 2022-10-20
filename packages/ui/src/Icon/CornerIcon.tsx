import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CornerIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path fillRule='evenodd' clipRule='evenodd' d='M2 0H0V2V12L2 10V2H10L12 0H2Z' fill='#F7F6F6' />
  </SvgIcon>
)
