import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const InfoFillIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 11.2502C8.8995 11.2502 11.25 8.89968 11.25 6.00018C11.25 3.10069 8.8995 0.750183 6 0.750183C3.10051 0.750183 0.75 3.10069 0.75 6.00018C0.75 8.89968 3.10051 11.2502 6 11.2502ZM5.25 4.50018V3.00018H6.75V4.50018H5.25ZM5.25 9.00018V5.25018H6.75V9.00018H5.25Z'
      fill='white'
      fillOpacity='0.6'
    />
  </SvgIcon>
)
