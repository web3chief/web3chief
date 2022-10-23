import { InputAdornment, Typography } from '@mui/material'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { ImageFallback } from '../../Image'
import { FC } from 'react'
import TextMaskInput, { TextMaskInputProps } from '../InputMask/InputMask'

export type TokenInputProps = TextMaskInputProps & {
  icon: string
  available: string
  handleMaxValue: () => void
  value: string
  texts?: {
    availableText?: string
    max?: string
  }
}

export const TokenInput: FC<TokenInputProps> = ({
  icon,
  handleMaxValue,
  available,
  scale,
  mask = Number,
  texts,
  ...args
}) => {
  const { availableText, max } = texts || {}

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
          {availableText || 'Available'}: {available}
        </Typography>
        <Button onClick={handleMaxValue} size='xsmall' variant='base'>
          {max || 'MAX'}
        </Button>
      </Box>
    </>
  )
}
