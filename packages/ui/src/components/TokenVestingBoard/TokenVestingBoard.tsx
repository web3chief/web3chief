import { Typography } from '@mui/material'
import { Box } from '../Box'
import { Button } from '../Button'
import { SliderBold } from '../SliderBold'
import { useTranslation } from 'next-i18next'
import { FC } from 'react'

export type TokenVestingBoardProps = {
  totalValue: string | number
  token: string
  currentValue: string
  handleClaim: () => void | Promise<void>
  texts?: {
    canClaim?: string
    claim?: string
    nextStage?: string
    totalRaised?: string
  }
}

export const TokenVestingBoard: FC<TokenVestingBoardProps> = ({
  totalValue,
  token,
  currentValue,
  handleClaim,
  texts
}) => {
  const { t } = useTranslation('tokenVesting')
  const { canClaim, claim, nextStage, totalRaised } = texts || {}

  return (
    <Box p={3} bgcolor='alpha.5' borderRadius='16px'>
      <Box>
        <Box
          flexDirection={{ xs: 'column', lg: 'row' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography variant='h4'>{canClaim || t('You can claim tokens')}</Typography>
          <Box mt={{ xs: 3, lg: 0 }}>
            <Button onClick={handleClaim} variant='contained' size='large'>
              {claim || t('Claim tokens')}
            </Button>
          </Box>
        </Box>
        <Box mt={10}>
          <SliderBold labelTitle={nextStage || t('To next stage')} labelValue={currentValue} value={50} />
          <Box flexDirection='row' justifyContent='flex-end'>
            <Box alignItems='flex-end'>
              <Typography variant='subtitle2alt'>{totalRaised || t('Total raised')}</Typography>
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
