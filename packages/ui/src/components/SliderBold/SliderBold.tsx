import { Slider, SliderProps, Typography } from '@mui/material'
import { Box } from '../Box'
import { FC } from 'react'
// import DoneIcon from '@mui/icons-material/Done'

export type SliderBoldProps = SliderProps & {
  labelTitle: string
  labelValue: string
  value: number
}

export const SliderBold: FC<SliderBoldProps> = ({ value, labelTitle, labelValue }) => (
  <Slider
    size='large'
    sx={{
      '& .MuiSlider-valueLabelOpen': {
        background: 'transparent',
        transform: `translate(${value >= 50 ? '-30%' : '30%'}, -90%) !important`,
      },
    }}
    disabled
    valueLabelDisplay='on'
    valueLabelFormat={() => (
      <Box alignItems={`${value >= 50 ? 'flex-end' : 'flex-start'}`}>
        <Typography variant='subtitle2alt'>{labelTitle}</Typography>
        <Typography variant='h8' color='text.secondary'>
          {labelValue}
        </Typography>
      </Box>
    )}
    value={value}
  />
)
