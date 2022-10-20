import React, { FC } from 'react'
import { Box, BoxProps } from '@web3chief/ui/Box'
import { useTheme } from '@mui/material'

export type BannerProps = Pick<BoxProps, 'background' | 'height' | 'width'>

export const Banner: FC<BannerProps> = ({
  children,
  height = {
    xs: 280,
  },
  background,
  width = { xxxl: 'calc(100% + 348px + 348px)', xxl: '98vw', xs: '100%' },
}) => {
  const theme = useTheme()

  return (
    <Box
      background={background}
      alignItems='center'
      position='relative'
      width={width}
      maxWidth={1920}
      height={height}
      margin={{
        xxl: '0 -348px',
        xs: '0 auto',
      }}
      overflow='hidden'
      sx={{
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
          background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, rgba(25, 17, 25, 0) 100%)`,
        },
        '&::after': {
          right: 0,
          background: `linear-gradient(270deg, ${theme.palette.background.default} 0%, rgba(25, 17, 25, 0) 100%)`,
        },
      }}
    >
      <Box
        alignItems='center'
        maxWidth={{ xs: '536px' }}
        margin='auto'
        mt={{ xs: '108px', sm: '142px', md: '124px', lg: '112px' }}
      >
        {children}
      </Box>
    </Box>
  )
}
