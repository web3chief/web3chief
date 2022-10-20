import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { FC } from 'react'

export const SpaceshipIcon: FC<SvgIconProps> = props => (
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
      d='M0.16795 3.44531L2.16795 0.445312L3.83205 1.55471L2 4.30279V7.00001H4.12602C4.4878 5.59441 5.59439 4.48781 7 4.12603V2.00001H9V4.12603C10.4056 4.48781 11.5122 5.59441 11.874 7.00001H14V4.30279L12.1679 1.55471L13.8321 0.445312L15.8321 3.44531L16 3.69724V4.00001V8.00001V12V12.3028L15.8321 12.5547L13.8321 15.5547L12.1679 14.4453L14 11.6972V9.00001H11.874C11.4299 10.7252 9.86384 12 8 12C6.13616 12 4.57006 10.7252 4.12602 9.00001H2V11.6972L3.83205 14.4453L2.16795 15.5547L0.16795 12.5547L0 12.3028V12V8.00001V4.00001V3.69724L0.16795 3.44531ZM8 10C9.10457 10 10 9.10458 10 8.00001C10 6.89544 9.10457 6.00001 8 6.00001C6.89543 6.00001 6 6.89544 6 8.00001C6 9.10458 6.89543 10 8 10Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
