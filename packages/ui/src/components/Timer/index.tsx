import React from 'react'
import { Box } from '../Box'
import Typography from '@mui/material/Typography'
import useTimer from './useTimer'
import { useTheme } from '@mui/material'
import { Skeleton } from '../Skeleton'
import { useTranslation } from 'next-i18next'

export type TimerProps = {
  startTimestamp?: number
  endTimestamp?: number | string
  loading?: boolean
}

const Timer = ({ startTimestamp, endTimestamp, loading }: TimerProps) => {
  const { t } = useTranslation('ino')

  const theme = useTheme()

  const totalTime = useTimer(startTimestamp, endTimestamp)

  const time = [
    {
      title: t('hours'),
      value: totalTime.hoursWithoutDays,
    },
    {
      title: t('minutes'),
      value: totalTime.minutes,
    },
    {
      title: t('seconds'),
      value: totalTime.seconds,
    },
  ]

  return (
    <Box flexDirection='row'>
      {time.map((item, i, list) => (
        <Box key={i} flexDirection='row' margin='auto'>
          <Box
            background={theme.palette.alpha[20]}
            border={`1px solid  ${theme.palette.alpha[10]}`}
            boxShadow={`inset 0px 0px 8px ${theme.palette.alpha[20]}`}
            flexDirection='column'
            position='relative'
            width={{ xs: 64, md: 76 }}
            height={{ xs: 64, md: 84 }}
            alignItems='center'
            justifyContent='center'
            borderRadius='4px'
          >
            {loading && (
              <Box mb='4px' width={{ xs: 24, md: 32 }} height={{ xs: 26, md: 34 }}>
                <Skeleton width='100%' height='100%' />
              </Box>
            )}
            {!loading && (
              <Typography
                align='center'
                variant='subtitle0'
                color='text.primary'
                lineHeight={{ xs: 1.2, md: 1.5 }}
              >
                {item.value}
              </Typography>
            )}
            <Typography align='center' variant='subtitle3' color='alpha.60'>
              {item.title}
            </Typography>
            {i === 1 && (
              <Box
                bgcolor='warning.main'
                p={{ xs: '3px 8px', md: '5px 12px' }}
                position='absolute'
                left='50%'
                bottom={{ xs: -12, md: -15 }}
                zIndex='1'
                sx={{ transform: 'translateX(-50%)' }}
                borderRadius='2px'
              >
                <Typography variant='timersubtitle' color='text.altPrimary' whiteSpace='nowrap'>
                  {t('Hurry up to buy!')}
                </Typography>
              </Box>
            )}
          </Box>
          {list?.length - 1 !== i && (
            <Box
              flexDirection='column'
              ml={{ xs: 1, md: 1.5 }}
              mr={{ xs: 1, md: 1.5 }}
              mt='auto'
              mb='auto'
            >
              <Box
                background={theme.palette.alpha[20]}
                width='4px'
                height='4px'
                marginBottom={1.5}
                borderRadius='50%'
              />
              <Box
                background={theme.palette.alpha[20]}
                width='4px'
                height='4px'
                borderRadius='50%'
              />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Timer
