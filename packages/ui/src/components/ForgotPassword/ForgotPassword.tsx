import { Typography } from '@mui/material'
import { Dialog } from '../Dialog'
import { FC } from 'react'
import { Box } from '../Box'
import { TextField } from '../TextField'
import Link from '@mui/material/Link'
import { Button } from '../Button'
import { DialogContent } from '../Dialog/DialogContent'
import { DialogHeader } from '../Dialog/DialogHeader'

export interface ForgotPasswordProps {
  title: string
  descriptionAboutCode?: string
  securityCodeInput?: boolean
  ruleDescription?: string
  timerMessage?: string
  email?: string
  securityButton?: {
    title: string
    onClick: () => void
  }
  submitButton?: {
    title: string
    onClick: () => void
  }
  signUpControl?: {
    description: string
    title: string
    onClick: () => void
  }
  closeModal: () => void
  isOpen: boolean
  texts?: {
    email?: string
    securityCode?: string
    securityInputPlaceHolder?: string
  }
}

export const ForgotPassword: FC<ForgotPasswordProps> = ({
  title,
  descriptionAboutCode,
  email,
  securityCodeInput,
  ruleDescription,
  timerMessage,
  securityButton,
  submitButton,
  signUpControl,
  closeModal,
  isOpen,
  texts,
}) => {
  const { email: emailText, securityCode, securityInputPlaceHolder } = texts || {}

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader title={title} onBack={closeModal} onClose={closeModal} />
      <DialogContent>
        {descriptionAboutCode && (
          <Typography variant='subtitle1' color='text.secondary' mt={2}>
            {descriptionAboutCode}
          </Typography>
        )}

        {email && (
          <Typography display='flex' variant='subtitle1' color='text.secondary' mt={2}>
            {emailText || 'Email'}:{' '}
            <Typography variant='subtitle1' color='text.primary'>
              {email}
            </Typography>
          </Typography>
        )}

        <Box mt={3}>
          {securityCodeInput && (
            <>
              {' '}
              <Typography variant='subtitle3' color='text.primary'>
                {securityCode || 'Security code'}
              </Typography>
              <TextField
                size='medium'
                placeholder={securityInputPlaceHolder || 'Enter security code'}
                name='password'
                fullWidth
                value=''
                sx={{
                  mt: 0.75,
                }}
              />
            </>
          )}

          {ruleDescription && (
            <Typography mt={0.75} color='text.secondary' variant='subtitle3'>
              {ruleDescription}
            </Typography>
          )}

          {timerMessage && (
            <Typography variant='subtitle2' color='text.secondary' mt={1.5}>
              {timerMessage}
            </Typography>
          )}

          {securityButton && (
            <Link
              variant='subtitle2'
              fontSize='subtitle3alt'
              component='button'
              width='fit-content'
              sx={{ mt: 1.5 }}
              onClick={securityButton.onClick}
            >
              {securityButton.title}
            </Link>
          )}
        </Box>
        {submitButton && (
          <Button
            fullWidth
            onClick={submitButton.onClick}
            sx={{ mt: 4 }}
            size='large'
            variant='contained'
          >
            {submitButton.title}
          </Button>
        )}
        {signUpControl && (
          <Typography variant='subtitle2' color='text.secondary' mt={4}>
            {signUpControl.description}{' '}
            <Link
              variant='subtitle2'
              fontSize='subtitle2'
              component='button'
              width='fit-content'
              onClick={signUpControl.onClick}
            >
              {signUpControl.title}
            </Link>
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  )
}
