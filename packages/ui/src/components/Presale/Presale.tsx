import React, { FC } from 'react'
import { Box, BoxProps } from '../Box'
import { Typography } from '@mui/material'
import Timer from '../Timer'

export type PresaleProps = Pick<BoxProps, 'background' | 'height'> & {
  title: string
  description: string
  timer: {
    startTimestamp?: number
    endTimestamp?: number | string
  }
  loading?: boolean
}

export const Presale: FC<PresaleProps> = ({ title, description, timer, loading }) => (
  <Box
    position='relative'
    bgcolor='alpha.5'
    mb={4.75}
    border='1px solid'
    borderColor='alpha.10'
    borderRadius='8px'
    width='100%'
  >
    <Box
      flexDirection='row'
      position='relative'
      height={{ lg: 148 }}
      justifyContent={{ md: 'center', lg: 'space-between' }}
      p={{ xs: '20px 20px 28px', sm: '20px 16px 30px 0', md: '24px 24px 31px 0' }}
    >
      <Box
        display={{ xs: 'none', sm: 'flex' }}
        overflow='hidden'
        width={{ sm: 170, md: 217 }}
        justifyContent='flex-end'
        position='absolute'
        bottom={0}
        left={0}
      >
        <Box
          width={{ sm: 183, md: 290, lg: 236 }}
          height={{ sm: 274, md: 381, lg: 345 }}
          position='relative'
          bottom={{ sm: -12, md: -90, lg: -102 }}
          left={{ sm: -12, md: -35, lg: 0 }}
        >
          <Box
            // background='url(/img/ino-warrior2.png) no-repeat center bottom / contain'
            height='100%'
            width='100%'
            position='absolute'
            bottom={0}
            left={0}
            justifyContent='flex-end'
          />
          <Box
            mixBlendMode='lighten'
            // background={{
            //   xs: 'url(/img/fire-ino-md.png) no-repeat left bottom / contain',
            //   md: 'url(/img/fire-ino-lg.png) no-repeat center top / contain',
            // }}
            height='100%'
            width='100%'
            position='absolute'
            justifyContent='flex-end'
            zIndex='0'
            bottom={{ sm: 0, md: 0, lg: -10 }}
            left={{ sm: 0, md: 0, lg: -19 }}
          />
        </Box>
      </Box>
      <Box
        flexDirection='row'
        alignItems='center '
        flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        pl={{ sm: '180px', md: '240px' }}
        width='100%'
      >
        <Box mr={{ lg: 3 }} justifyContent='center' mb={{ xs: 2, md: 3, lg: 0 }}>
          <Box mb={1}>
            <Typography variant='h3' color='text.primary'>
              {title}
            </Typography>
          </Box>
          <Typography align='left' variant='subtitle2' color='alpha.60'>
            {description}
          </Typography>
        </Box>
        <Box ml={{ lg: 'auto' }}>
          <Timer
            startTimestamp={timer.startTimestamp}
            endTimestamp={timer.endTimestamp}
            loading={loading}
          />
        </Box>
      </Box>
    </Box>
  </Box>
)
