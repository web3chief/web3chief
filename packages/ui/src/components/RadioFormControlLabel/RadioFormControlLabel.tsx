import { FC } from 'react'
import { FormControlLabel } from '@mui/material'
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel'
import { Radio } from '../Radio/Radio'

export type RadioFormControlLabelProps = Omit<FormControlLabelProps, 'control'>

export const RadioFormControlLabel: FC<RadioFormControlLabelProps> = props => (
  <FormControlLabel {...props} control={<Radio />} />
)
