import { Typography } from '@mui/material'
import { Box } from '../Box'
import { FC } from 'react'

export type TokenVestingTimerCardProps = {
  time: string
  value: string
  progress: number
  texts?: {
    sideFront?: string
    sideBack?: string
  }
}

export const TokenVestingTimerCard: FC<TokenVestingTimerCardProps> = ({
  time,
  value,
  progress,
  texts
}) => {
  const { sideFront, sideBack } = texts || {}

  return (
    <Box
      height={{ xs: '89px', xl: '100%' }}
      width='100%'
      sx={{
        perspective: '1000px',
        '&:hover .card-inner': {
          transform: 'rotateY(180deg)',
        },
      }}
    >
      <Box
        className='card-inner'
        height='100%'
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 600ms',
        }}
        position='relative'
      >
        <Box
          height='100%'
          width='100%'
          px={3}
          py={{ xs: 2, xl: 4 }}
          border='1px solid'
          borderColor='alpha.10'
          borderRadius='16px'
          overflow='hidden'
          position='absolute'
          bgcolor='background.default'
          transform='translateX(-50%)'
          left='50%'
          sx={{ backfaceVisibility: 'hidden' }}
        >
          <Typography color='text.secondary' variant='subtitle2alt'>
            {sideFront || 'Your vesting stage'}
          </Typography>
          <Typography variant='h4'>{value}</Typography>
          <Box bottom={0} left={0} width='100%' position='absolute' height='4px' bgcolor='alpha.8'>
            <Box
              position='absolute'
              left={0}
              bottom={0}
              height='100%'
              width={`${progress}%`}
              bgcolor='primary.main'
              borderRadius='2px'
            />
          </Box>
        </Box>
        <Box
          height='100%'
          width='100%'
          px={3}
          py={{ xs: 2, xl: 4 }}
          border='1px solid'
          borderColor='alpha.10'
          borderRadius='16px'
          overflow='hidden'
          position='absolute'
          bgcolor='background.default'
          left='50%'
          transform='rotateY(180deg) translateX(50%)'
          sx={{ backfaceVisibility: 'hidden' }}
        >
          <Typography color='text.secondary' variant='subtitle2alt'>
            {sideBack || 'Your vesting stage'}
          </Typography>
          <Typography variant='h4'>{time}</Typography>
          <Box bottom={0} left={0} width='100%' position='absolute' height='4px' bgcolor='alpha.8'>
            <Box
              position='absolute'
              left={0}
              bottom={0}
              height='100%'
              width={`${progress}%`}
              bgcolor='primary.main'
              borderRadius='2px'
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
