import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const PlusIcon2: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <rect x='1' y='1' width='14' height='14' fill='white' fillOpacity='0.1' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 9V12H9V9H12V7L9 7V4H7V7L4 7V9H7Z'
      fill='white'
    />
  </SvgIcon>
)
