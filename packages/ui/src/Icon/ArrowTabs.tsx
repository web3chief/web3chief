import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ArrowTabsIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 24 24' {...props}>
    <rect width='24' height='24' rx='4' fill='white' fillOpacity='0.12' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.7805 6.37531L15.2802 12L10.7805 17.6247L9.21875 16.3753L12.719 12L9.21875 7.6247L10.7805 6.37531Z'
      fill='inherit'
    />
  </SvgIcon>
)
