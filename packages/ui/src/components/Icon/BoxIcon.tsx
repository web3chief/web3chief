import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const BoxIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 17 16' {...props}>
    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_901_42994)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.00293 3C2.89836 3 2.00293 3.89543 2.00293 5V13H14.0029V5C14.0029 3.89543 13.1075 3 12.0029 3H4.00293ZM0.00292969 5C0.00292969 2.79086 1.79379 1 4.00293 1H12.0029C14.2121 1 16.0029 2.79086 16.0029 5V15H0.00292969V5Z'
          fill='#797979'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.17364 9H2.00293V7H5.17364V9Z'
          fill='#797979'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.0029 9H10.8322V7H14.0029V9Z'
          fill='#797979'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.00293 9C8.55521 9 9.00293 8.55228 9.00293 8C9.00293 7.44772 8.55521 7 8.00293 7C7.45064 7 7.00293 7.44772 7.00293 8C7.00293 8.55228 7.45064 9 8.00293 9ZM8.00293 11C9.65978 11 11.0029 9.65685 11.0029 8C11.0029 6.34315 9.65978 5 8.00293 5C6.34608 5 5.00293 6.34315 5.00293 8C5.00293 9.65685 6.34608 11 8.00293 11Z'
          fill='#797979'
        />
      </g>
      <defs>
        <clipPath id='clip0_901_42994'>
          <rect width='16' height='16' fill='white' transform='translate(0.00292969)' />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
)
