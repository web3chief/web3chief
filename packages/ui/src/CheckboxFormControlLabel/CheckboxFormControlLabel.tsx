import { FormControlLabel } from '@mui/material'
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel'
import { Checkbox } from '@web3chief/ui/Checkbox'
import { FC } from 'react'

export type CheckboxFormControlLabelProps = Omit<FormControlLabelProps, 'control'>

export const CheckboxFormControlLabel: FC<CheckboxFormControlLabelProps> = props => (
  <FormControlLabel
    componentsProps={{ typography: { variant: 'subtitle2alt' } }}
    {...props}
    control={<Checkbox />}
  />
)
