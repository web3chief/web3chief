import { Typography, useTheme, Theme } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { FC } from 'react'
import { Button, ButtonProps } from '@web3chief/ui/Button'
import { CloseIcon } from '@web3chief/ui/Icon/CloseIcon'
import { SuccessIcon } from '@web3chief/ui/Icon/SuccessIcon'
import { WarningIcon } from '@web3chief/ui/Icon/WarningIcon'
import { ErrorIcon } from '@web3chief/ui/Icon/ErrorIcon'
import { useSnackbar, OptionsObject } from './useSnackbar'

const getBgcolor = (type: string, theme: Theme) => {
  switch (type) {
    case 'success': {
      return theme.palette.success.light
    }
    case 'error': {
      return theme.palette.error.light
    }
    case 'warning': {
      return theme.palette.warning.light
    }
  }
}

type SnackbarContentProps = Pick<ButtonProps, 'onClick'> & {
  variant: 'success' | 'error' | 'warning' | 'default' | 'info'
}

export const SnackbarContent: FC<SnackbarContentProps> = ({
  variant = 'success',
  children,
  onClick,
}) => {
  const theme = useTheme()

  return (
    <Box
      maxWidth='356px'
      position='relative'
      flexDirection='row'
      background={getBgcolor(variant, theme)}
      borderRadius='8px'
    >
      <Box alignItems='center' justifyContent='center' p={2} pr={5}>
        {variant === 'success' && <SuccessIcon sx={{ width: '36px', height: '36px' }} />}
        {variant === 'error' && <ErrorIcon sx={{ width: '36px', height: '36px' }} />}
        {variant === 'warning' && <WarningIcon sx={{ width: '36px', height: '36px' }} />}
      </Box>

      <Box ml={-5} p={2} pr={6} alignSelf='center'>
        <Typography variant='body2'>{children}</Typography>
      </Box>

      <Box position='absolute' top='0' right='-10px'>
        <Button variant='text' onClick={onClick}>
          <CloseIcon />
        </Button>
      </Box>
    </Box>
  )
}

export const SnackContent = (key: string, { message, variant = 'success' }: OptionsObject) => {
  const { closeSnackbar } = useSnackbar()

  return (
    <div id={key}>
      <SnackbarContent variant={variant} onClick={() => closeSnackbar(key)}>
        {message}
      </SnackbarContent>
    </div>
  )
}
