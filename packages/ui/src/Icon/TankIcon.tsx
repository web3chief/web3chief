import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const TankIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    viewBox='0 0 20 20'
    {...props}
    width='20'
    height='20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4V5H8V4H4ZM2 10L3 6H9C10.6569 6 12 7.34315 12 9V10H2ZM2 11C0.895431 11 0 11.8954 0 13C0 14.1046 0.89543 15 2 15H16C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11H2ZM13 9H14V8H19V9H20V6H19V7H14V6H11.6459C12.4763 6.73295 13 7.80531 13 9Z'
      fill='#F7F6F6'
    />
  </SvgIcon>
)
