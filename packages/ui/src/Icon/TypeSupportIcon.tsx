import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const TypeSupportIcon: FC<SvgIconProps> = props => {
  const { style: { fill } = { fill: '#F7F6F6' } } = props as any

  return (
    <SvgIcon
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 8V3H12V8H17V12H12V17H8V12H3V8H8Z'
        fill={fill}
      />
    </SvgIcon>
  )
}
