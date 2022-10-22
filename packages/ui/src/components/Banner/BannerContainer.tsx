import React, { FC } from 'react'
import { Box } from '../Box'
import { BannerProps } from '../Banner'

export const BannerContainer: FC<BannerProps> = ({
  children,
  height = {
    xl: 400,
    md: 374,
    sm: 360,
    xs: 270,
  },
  background,
}) => (
  <Box
    alignItems='center'
    position='relative'
    width={{
      xs: '100%',
    }}
    maxWidth={1920}
    height={height}
    margin={{
      xs: '0 auto',
    }}
    overflow='hidden'
    sx={{
      backgroundImage: background,
      backgroundPosition: '0px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      '&::before, &::after': {
        content: '""',
        display: {
          xxl: 'flex',
          xs: 'none',
        },
        position: 'absolute',
        width: '200px',
        height: '100%',
      },
      '&::before': {
        left: 0,
      },
      '&::after': {
        right: 0,
      },
    }}
  >
    <Box
      alignItems='center'
      maxWidth={{ xs: '536px' }}
      bottom={{ xs: '10%', sm: '18%' }}
      position='absolute'
      margin='auto'
      left='0'
      right='0'
    >
      {children}
    </Box>
  </Box>
)
