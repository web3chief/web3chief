import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { FC } from 'react'

export const BoxIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_4149_30428)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.50781 1H4.12585H11.8833H12.5014L12.7777 1.55279L15.7777 7.55279L16.0014 8L15.7777 8.44721L12.7777 14.4472L12.5014 15H11.8833H4.12585H3.50781L3.23142 14.4472L0.231419 8.44721L0.0078125 8L0.231419 7.55279L3.23142 1.55279L3.50781 1ZM4.12585 4.23607L6.00781 8L4.12585 11.7639L2.24388 8L4.12585 4.23607ZM5.74388 13H11.2653L13.2653 9H7.74388L5.74388 13ZM7.74388 7H13.2653L11.2653 3H5.74388L7.74388 7Z'
        fill='#8C888C'
      />
    </g>
    <defs>
      <clipPath id='clip0_4149_30428'>
        <rect width='16' height='16' fill='white' />
      </clipPath>
    </defs>
  </SvgIcon>
)
