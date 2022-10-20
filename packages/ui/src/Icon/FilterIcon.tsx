import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const FilterIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 6.99994H11V6H3V4.00003L11 4.00002V3.00006L13 3V4.00001L21 4V6H13V6.99994ZM16 13.9999H18V13H21V11L18 11V10L16 10.0001V11L3 11.0001V13H16V13.9999ZM8 20.9999H6V20.0001H3V18.0001L6 18.0001V17.0001L8 17V18.0001L21 18.0001V20.0001H8V20.9999Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
