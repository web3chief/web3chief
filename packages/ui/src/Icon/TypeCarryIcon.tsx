import { FC } from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const TypeCarryIcon: FC<SvgIconProps> = props => {
  const { style: { fill } = { fill: '#F7F6F6' } } = props as any

  return (
    <SvgIcon
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M8.73205 3L7 2L5.50989 4.58094L7.44194 5.23453L8.73205 3Z' fill={fill} />
      <path d='M16 7.09808L14.9599 10.213L13.085 9.46046L14.7942 6.50002L16 7.09808Z' fill={fill} />
      <path d='M13.9282 6L12.1476 9.08417L10.2726 8.33161L12.1962 5L13.9282 6Z' fill={fill} />
      <path d='M11.3301 4.5L10.34 6.21491L8.40797 5.56132L9.59808 3.5L11.3301 4.5Z' fill={fill} />
      <path
        d='M3 9L5 5.4641L9.83013 7.09808L9.12167 8.32515L5.90665 8.37924L5.92347 9.37909L8.53237 9.33521L10.6027 13.2299L11.4857 12.7605L9.54998 9.11907L15.3923 11.4641L16 13.5L14.0753 14.7452L14.5 18H6.5L7.19615 13.6603L3 9Z'
        fill={fill}
      />
    </SvgIcon>
  )
}
