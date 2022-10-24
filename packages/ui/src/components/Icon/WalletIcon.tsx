import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const WalletIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='-3 -2 24 24' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.5 7.00049C2.22386 7.00049 2 7.22435 2 7.50049V14.0005C2 15.1051 2.89543 16.0005 4 16.0005H15.5C15.7761 16.0005 16 15.7766 16 15.5005V11.5005V7.50049C16 7.22435 15.7761 7.00049 15.5 7.00049H2.5ZM0 7.50049C0 6.11978 1.95262 5.00049 3.33333 5.00049H15.5C16.8807 5.00049 18 6.11978 18 7.50049V15.5005C18 16.8812 16.8807 18.0005 15.5 18.0005H4C1.79086 18.0005 0 16.2096 0 14.0005V7.50049Z'
    />
    <path fillRule='evenodd' clipRule='evenodd' d='M0 7.50049V3.50049H2V7.50049H0Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 3.50049C0 1.63359 1.42852 0.000488281 3.33333 0.000488281H15V2.00049H3.33333C2.66082 2.00049 2 2.60596 2 3.50049C2 4.39502 2.66082 5.00049 3.33333 5.00049H15.5V7.00049H2.5C0.595188 7.00049 0 5.36738 0 3.50049Z'
    />
    <path fillRule='evenodd' clipRule='evenodd' d='M11 10.5005H16V11.5005V12.5005H11V10.5005Z' />
  </SvgIcon>
)
