import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SettingsIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 5.16065L8 2.3035L13 5.16065V10.8394L8 13.6965L3 10.8394V5.16065ZM8 0L15 4V12L8 16L1 12V4L8 0ZM9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
