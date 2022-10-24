import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const LockIcon2: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4H12C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4V6H2V8V14V16H4H12H14V14V8V6H12H6V4ZM4 14V8H12V14H4Z'
      fill={props?.color ? props.color : '#191119'}
    />
  </SvgIcon>
)
