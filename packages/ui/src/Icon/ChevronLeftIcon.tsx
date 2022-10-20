import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ChevronLeftIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2195 20.125L14.7812 18.8756L9.28101 12.0003L14.7813 5.125L13.2195 3.87561L6.71976 12.0003L13.2195 20.125Z'
      fill='inherit'
    />
  </SvgIcon>
)
