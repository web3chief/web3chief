import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const BurgerIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 6H21V4L3 4.00003V6ZM3 13H21V11L3 11.0001V13ZM21 20.0001H3V18.0001L21 18.0001V20.0001Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
