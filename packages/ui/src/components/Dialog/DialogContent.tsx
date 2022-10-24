import {
  DialogContentProps as MuiDialogContentProps,
  default as MUIDialogContent,
} from '@mui/material/DialogContent'
import { FC } from 'react'

export type DialogContentProps = MuiDialogContentProps

export const DialogContent: FC<DialogContentProps> = ({ children, sx, ...rest }) => (
  <MUIDialogContent
    sx={{
      paddingX: {
        xs: 1.5,
        sm: 2,
        md: 5,
      },
      pt: {
        xs: 1,
        md: 2,
      },
      pb: {
        xs: 3,
      },
      ...sx,
    }}
    {...rest}
  >
    {children}
  </MUIDialogContent>
)
