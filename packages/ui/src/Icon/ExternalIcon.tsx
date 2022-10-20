import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ExternalIcon: FC<SvgIconProps> = props => (
  <SvgIcon fontSize='inherit' viewBox='0 0 11 11' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.58489 2H1.9991V0H10.9991V9H8.9991V3.41421L2.20621 10.2071L0.791992 8.79289L7.58489 2Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
