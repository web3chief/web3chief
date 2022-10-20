import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const AvaxWalletIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='12' fill='#E84142' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.60107 16.7752H6.27222C5.78287 16.7752 5.54113 16.7752 5.39372 16.6808C5.23455 16.5776 5.13725 16.4067 5.12545 16.218C5.11662 16.0441 5.23748 15.8318 5.47922 15.4073L11.2295 5.27171C11.4741 4.84131 11.598 4.62613 11.7542 4.54652C11.9222 4.46106 12.1227 4.46106 12.2907 4.54652C12.447 4.62613 12.5708 4.84131 12.8155 5.27171L13.9976 7.33527L14.0036 7.3458C14.2679 7.80755 14.4019 8.04169 14.4604 8.28744C14.5253 8.55571 14.5253 8.8387 14.4604 9.10697C14.4015 9.35461 14.2688 9.59045 14.0005 10.0592L10.9801 15.3985L10.9723 15.4122C10.7062 15.8777 10.5714 16.1136 10.3846 16.2917C10.1812 16.4863 9.9365 16.6278 9.66824 16.7074C9.42356 16.7752 9.1494 16.7752 8.60107 16.7752ZM14.4822 16.7754H17.8193C18.3116 16.7754 18.5592 16.7754 18.7066 16.6782C18.8658 16.575 18.966 16.401 18.9749 16.2124C18.9834 16.0442 18.8652 15.8401 18.6334 15.4403C18.6255 15.4267 18.6175 15.4128 18.6093 15.3987L16.9379 12.5393L16.9188 12.5071C16.684 12.1099 16.5653 11.9093 16.4131 11.8318C16.2451 11.7463 16.0476 11.7463 15.8796 11.8318C15.7263 11.9113 15.6024 12.1207 15.3578 12.5422L13.6922 15.4017L13.6865 15.4115C13.4427 15.8324 13.3208 16.0427 13.3296 16.2153C13.3414 16.404 13.4387 16.5779 13.5979 16.6811C13.7423 16.7754 13.9899 16.7754 14.4822 16.7754Z'
      fill='#F7F6F6'
    />
  </SvgIcon>
)
