import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const BinanceUsd2: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 24 24' {...props}>
    <circle cx='12' cy='12' r='12' fill='#F0B90B' />
    <path
      d='M11.9644 4L13.9376 6.02079L8.96885 10.9896L6.99561 9.01631L11.9644 4Z'
      fill='#EDF0F4'
    />
    <path
      d='M14.9599 6.99512L16.9331 9.01591L8.96885 16.9802L6.99561 15.007L14.9599 6.99512Z'
      fill='#EDF0F4'
    />
    <path
      d='M5.97324 9.99121L7.94648 12.012L5.97324 13.9852L4 12.012L5.97324 9.99121Z'
      fill='#EDF0F4'
    />
    <path
      d='M17.9555 9.99121L19.9287 12.012L11.9645 19.9763L9.99121 18.003L17.9555 9.99121Z'
      fill='#EDF0F4'
    />
  </SvgIcon>
)
