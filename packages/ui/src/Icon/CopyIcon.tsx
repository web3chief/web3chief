import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const CopyIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <g opacity='0.3'>
      <rect x='5' y='5.00049' width='9' height='9' fill='#F7F6F6' />
      <path d='M3 11.0005V3.00049H11' fill='none' stroke='#F7F6F6' strokeWidth='2' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 2.00049H2V3.00049V11.0005H4V4.00049H11V2.00049H3ZM14 5.00049H5V14.0005H14V5.00049Z'
        fill='#F7F6F6'
      />
    </g>
  </SvgIcon>
)
