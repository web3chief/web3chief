import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ErrorIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 20 20' {...props}>
    <circle cx='10' cy='10' r='8.5' fill='#EE2051' fillOpacity='0.3' stroke='#EE2051' />
    <circle opacity='0.3' cx='10' cy='10' r='6.75' fill='none' stroke='#EE2051' strokeWidth='0.5' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 6H11L10.7188 10.5H9.28125L9 6ZM9.375 12L9.5 14H10.5L10.625 12H9.375Z'
      fill='#EE2051'
    />
  </SvgIcon>
)
