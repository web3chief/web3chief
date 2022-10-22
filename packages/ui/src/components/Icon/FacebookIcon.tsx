import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const FacebookIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 24 24' color='primary' {...props}>
    <path
      d='M22 12.0251C22 6.49123 17.52 2 12 2C6.48 2 2 6.49123 2 12.0251C2 16.8772 5.44 20.9173 10 21.8496V15.0326H8V12.0251H10V9.5188C10 7.58396 11.57 6.01003 13.5 6.01003H16V9.01754H14C13.45 9.01754 13 9.46867 13 10.0201V12.0251H16V15.0326H13V22C18.05 21.4987 22 17.2281 22 12.0251Z'
      fill='#F7F6F6'
    />
  </SvgIcon>
)
