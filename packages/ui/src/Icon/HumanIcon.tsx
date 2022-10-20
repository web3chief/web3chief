import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const HumanIcon: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 34 38' {...props}>
    <svg
      width='34'
      height='38'
      viewBox='0 0 34 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <rect x='0.75' width='32.5' height='37.5' fill='url(#pattern0)' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use
            xlinkHref='#image0_4700_31275'
            transform='translate(-0.00533408) scale(0.00052639)'
          />
        </pattern>
        <image
          id='image0_4700_31275'
          width='1920'
          height='2192'
        />
      </defs>
    </svg>
  </SvgIcon>
)