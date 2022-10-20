import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const BorderIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 8 92' preserveAspectRatio='none' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 0H8V26L5 29V63L8 66V92H0V63V29V0Z' />
  </SvgIcon>
)
