import { FC } from 'react'
import { FormControlLabel } from '@mui/material'
import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel'
import { Switch } from '@web3chief/ui/Switch'

export type SwitchFormControlLabelProps = Omit<FormControlLabelProps, 'control'>

export const SwitchFormControlLabel: FC<SwitchFormControlLabelProps> = props => (
  <FormControlLabel {...props} control={<Switch />} />
)
