import { default as MuiDialog, DialogProps as MUIDialogProps } from '@mui/material/Dialog'
import { FC } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export type DialogProps = MUIDialogProps

export const Dialog: FC<DialogProps> = ({ ...rest }) => {
  const theme = useTheme()

  return <MuiDialog fullScreen={useMediaQuery(theme.breakpoints.down('sm'))} {...rest} />
}
