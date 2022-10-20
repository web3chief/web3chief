import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SuccessIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 20 20' {...props}>
    <circle cx='10' cy='10' r='8.5' fill='#00EAB2' fillOpacity='0.3' stroke='#00EAB2' />
    <circle opacity='0.3' cx='10' cy='10' r='6.75' fill='none' stroke='#00EAB2' strokeWidth='0.5' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 7.77443L8.93339 13L6 9.83958L6.8 9.06515L8.93339 10.8096L13.2 7L14 7.77443Z'
      fill='#00EAB2'
    />
  </SvgIcon>
)
