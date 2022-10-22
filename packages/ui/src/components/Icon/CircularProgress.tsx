import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CircularProgress: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 25 24' {...props}>
    <path d='M19.5713 19.0711C17.983 20.6594 15.9062 21.6667 13.6756 21.9307C11.445 22.1947 9.19045 21.7 7.27526 20.5264C5.36007 19.3528 3.89578 17.5685 3.11833 15.4612C2.34089 13.3538 2.29557 11.0461 2.98968 8.90983C3.68379 6.77358 5.0769 4.93322 6.94454 3.68531C8.81218 2.43739 11.0456 1.85459 13.2848 2.03083C15.5241 2.20706 17.6388 3.13206 19.2882 4.65677C20.9377 6.18149 22.0257 8.21712 22.3771 10.4357L20.4018 10.7485C20.1206 8.97369 19.2502 7.34519 17.9306 6.12542C16.6111 4.90565 14.9193 4.16565 13.1279 4.02466C11.3365 3.88367 9.54979 4.34991 8.05568 5.34824C6.56157 6.34658 5.44708 7.81886 4.89179 9.52787C4.3365 11.2369 4.37276 13.0831 4.99471 14.7689C5.61667 16.4548 6.7881 17.8822 8.32026 18.8211C9.85241 19.76 11.656 20.1558 13.4405 19.9445C15.225 19.7333 16.8865 18.9275 18.1571 17.6569L19.5713 19.0711Z' />
    <defs>
      <radialGradient
        id='paint0_angular_2158_3116'
        cx='0'
        cy='0'
        r='1'
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(12.5002 12) rotate(43.1524) scale(10.9659)'
      >
        <stop stopColor='currentColor' stopOpacity='0' />
        <stop offset='1' stopColor='currentColor' />
      </radialGradient>
    </defs>
  </SvgIcon>
)