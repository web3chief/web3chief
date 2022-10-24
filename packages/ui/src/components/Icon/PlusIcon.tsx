import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const PlusIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M7 7V1H9V7H15V9H9V15H7V9H1V7H7Z' />
  </SvgIcon>
)
