import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const TypeOfPack: FC<SvgIconProps> = props => (
  <SvgIcon viewBox='0 0 16 16' {...props}>
    <svg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 3.67544L9.55848 2H2.44152L3 3.67544V10.3246L2.44565 11.9876C4.79756 11.9817 7.5962 11.9866 9.55579 11.9919L9 10.3246V3.67544ZM11.8461 12.5381C11.8678 12.6033 11.8872 12.669 11.9044 12.7354C11.9044 12.7354 11.9044 12.7354 11.9044 12.7354C11.9678 12.9805 12 13.233 12 13.4868V13.8977C12 13.9541 11.9558 13.9998 11.8994 13.9996C10.9632 13.9959 3.73098 13.9688 0.100389 13.9991C0.0437554 13.9996 0 13.9538 0 13.8972V13.4868C0 13.2407 0.0302961 12.9957 0.0899981 12.7575C0.1085 12.6837 0.129826 12.6105 0.15395 12.5381L1 10V4L0.153951 1.46185C0.134845 1.40453 0.117494 1.34671 0.101912 1.28846C0.0343287 1.03583 0 0.775196 0 0.513167V0.101911C0 0.045627 0.0456277 0 0.101912 0H11.8981C11.9544 0 12 0.045627 12 0.101911V0.513167C12 0.775196 11.9657 1.03583 11.8981 1.28846C11.8825 1.34671 11.8652 1.40453 11.8461 1.46185L11 4V10L11.8461 12.5381Z'
        fill='#8C888C'
      />
    </svg>
  </SvgIcon>
)
