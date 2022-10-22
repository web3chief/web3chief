import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ChevronRightIcon: FC<SvgIconProps> = props => (
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
      d='M9.56174 20.2496L8 19.0002L13.5002 12.1249L8 5.24963L9.56174 4.00024L16.0615 12.1249L9.56174 20.2496Z'
      fill='inherit'
    />
  </SvgIcon>
)
