import { InputAdornment, Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { Button } from '@web3chief/ui/Button'
import { useTranslation } from 'next-i18next'
import { ImageFallback } from '@web3chief/ui/Image'
import { FC } from 'react'
import TextMaskInput, { TextMaskInputProps } from '../InputMask/InputMask'

export type TokenInputProps = TextMaskInputProps & {
  icon: string
  available: string
  handleMaxValue: () => void
  value: string
}

export const TokenInput: FC<TokenInputProps> = ({
  icon,
  handleMaxValue,
  available,
  scale,
  mask = Number,
  ...args
}) => {
  const { t } = useTranslation('common')

  return (
    <>
      <TextMaskInput
        scale={scale}
        mask={mask}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <ImageFallback src={icon} width={32} height={32} alt='' />
            </InputAdornment>
          ),
        }}
        textalign='right'
        size='number'
        {...args}
      />
      <Box mt={1.5} flexDirection='row' alignItems='center' justifyContent='space-between'>
        <Typography variant='subtitle3' color='text.secondary'>
          {t('Available')}: {available}
        </Typography>
        <Button onClick={handleMaxValue} size='xsmall' variant='base'>
          {t('MAX')}
        </Button>
      </Box>
    </>
  )
}
