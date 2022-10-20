import { FC } from 'react'
import { default as MuiSkeleton, SkeletonProps } from '@mui/material/Skeleton'

export const Skeleton: FC<SkeletonProps> = ({ variant = 'rectangular', ...rest }) => (
  <MuiSkeleton variant={variant} {...rest} />
)
