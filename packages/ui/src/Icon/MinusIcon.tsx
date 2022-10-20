import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const MinusIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path fillRule='evenodd' clipRule='evenodd' d='M15 9.00049H1V7.00049H15V9.00049Z' />
  </SvgIcon>
)
