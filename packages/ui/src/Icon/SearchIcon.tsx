import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const SearchIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M46 27C46 37.4934 37.4934 46 27 46C16.5066 46 8 37.4934 8 27C8 16.5066 16.5066 8 27 8C37.4934 8 46 16.5066 46 27ZM41.5084 43.5384C37.6356 46.9385 32.5586 49 27 49C14.8497 49 5 39.1503 5 27C5 14.8497 14.8497 5 27 5C39.1503 5 49 14.8497 49 27C49 32.5116 46.9732 37.5498 43.6243 41.41L59.028 55.9077L56.972 58.0923L41.5084 43.5384Z'
      fill='#8C888C'
    />
  </SvgIcon>
)
