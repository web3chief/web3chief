import { Typography } from '@mui/material'
import { Box } from '../Box'
import { Button } from '../Button'
import { SliderBold } from '../SliderBold'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

export type TokenVestingCardProps = {
  totalValue: string | number
  token: string
  currentValue: string
}

export const TokenVestingBoard: FC<TokenVestingCardProps> = ({
  totalValue,
  token,
  currentValue,
}) => {
  const { t } = useTranslation('tokenVesting')

  return (
    <Box p={3} bgcolor='alpha.5' borderRadius='16px'>
      <Box>
        <Box
          flexDirection={{ xs: 'column', lg: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h4'>{t('You can claim tokens')}</Typography>
          <Box mt={{ xs: 3, lg: 0 }}>
            <Button variant='contained' size='large'>
              {t('Claim tokens')}
            </Button>
          </Box>
        </Box>
        <Box mt={10}>
          <SliderBold labelTitle={t('To next stage')} labelValue={currentValue} value={50} />
          <Box flexDirection='row' justifyContent='flex-end'>
            <Box alignItems='flex-end'>
              <Typography variant='subtitle2alt'>{t('Total raised')}</Typography>
              <Typography variant='h8' color='text.secondary'>
                {`${totalValue} ${token}`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
