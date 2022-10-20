import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { FC } from 'react'

export const ProfileIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 0C5.79086 0 4 1.79086 4 4V5C4 7.20914 5.79086 9 8 9C10.2091 9 12 7.20914 12 5V4C12 1.79086 10.2091 0 8 0ZM10 5V4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4V5C6 6.10457 6.89543 7 8 7C9.10457 7 10 6.10457 10 5Z'
    />
    <path d='M6 12C4.34315 12 3 13.3431 3 15V16H1V15C1 12.2386 3.23858 10 6 10H10C12.7614 10 15 12.2386 15 15V16H13V15C13 13.3431 11.6569 12 10 12H6Z' />
  </SvgIcon>
)
