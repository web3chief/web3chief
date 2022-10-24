import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const InfoOutlinedIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M7.00098 4H9.00098V6H7.00098V4Z' fill='#8C888C' />
    <path d='M9.00098 12V7H7.00098V12H9.00098Z' fill='#8C888C' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.00098 16C12.4193 16 16.001 12.4183 16.001 8C16.001 3.58172 12.4193 0 8.00098 0C3.5827 0 0.000976562 3.58172 0.000976562 8C0.000976562 12.4183 3.5827 16 8.00098 16ZM8.00098 14C11.3147 14 14.001 11.3137 14.001 8C14.001 4.68629 11.3147 2 8.00098 2C4.68727 2 2.00098 4.68629 2.00098 8C2.00098 11.3137 4.68727 14 8.00098 14Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
