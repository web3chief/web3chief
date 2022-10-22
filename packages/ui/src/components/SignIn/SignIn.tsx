import { FC, useMemo, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Dialog } from '../Dialog'
import Link from '@mui/material/Link'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from '../Button/Button'
import { WalletIcon } from '../Icon/WalletIcon'
import { KeyIcon } from '../Icon/KeyIcon'
import { Alert } from '../Alert'
import { EyeIcon } from '../Icon/EyeIcon'
import { DialogHeader } from '../Dialog/DialogHeader'
import { DialogContent } from '../Dialog/DialogContent'
import { IconButton } from '../Button'
import { Box } from '../Box'
import { useTranslation } from 'next-i18next'

const initialValues = {
  email: '',
  password: '',
}

export interface SignInProps {
  isOpen: boolean
  closeModal: () => void
}

export const SignIn: FC<SignInProps> = ({ isOpen, closeModal }) => {
  const { t } = useTranslation('common')

  const [passwordShow, setPassworShow] = useState(false)

  const validationSchema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .default(t('Enter your email'))
          .email(t('Enter a valid email'))
          .required(t('Email is required')),
        password: yup
          .string()
          .default(t('Enter your password'))
          .min(8, t('Minimum 8 characters length'))
          .required(t('Password is required')),
      }),
    [t],
  )

  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: formValues => {
      console.log(JSON.stringify(formValues, null, 2))
    },
  })

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader onClose={closeModal} title={t('Sign in')} />
      <DialogContent>
        <Alert variant='success'>example Alert</Alert>
        <form onSubmit={handleSubmit}>
          <Box mt={3}>
            <FormHelperText>{t('Email')}</FormHelperText>
            <TextField
              name='email'
              placeholder={t('Enter email')}
              fullWidth
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Box>
          <Box mt={2}>
            <FormHelperText>{t('Password')}</FormHelperText>
            <TextField
              placeholder={t('Enter password')}
              name='password'
              fullWidth
              type={passwordShow ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton
                    variant='text'
                    onClick={() => setPassworShow(!passwordShow)}
                    sx={{ background: 'none', '&:hover': { background: 'none' }, height: '24px' }}
                  >
                    <EyeIcon fontSize='large' />
                  </IconButton>
                ),
              }}
            />
          </Box>
          <Box mt={1}>
            <Link component='button' href='#'>
              {t('Forgot Password')}
            </Link>
          </Box>
          <Box mt={4}>
            <Button size='large' variant='contained' fullWidth type='submit'>
              {t('Sign in')}
            </Button>
          </Box>
        </form>

        <Typography color='text.secondary' mt={2} align='center' variant='subtitle1'>
          {t('or')}
        </Typography>
        <Box mt={2}>
          <Button size='large' color='primary' fullWidth>
            <Box flexDirection='row' width='100%' justifyContent='space-between'>
              <WalletIcon />
              <Typography variant='buttonBig' width='100%' textAlign='center'>
                {t('Login with Wallet')}
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box mt={1}>
          <Button size='large' color='primary' fullWidth>
            <Box display='flex' flexDirection='row' width='100%' justifyContent='space-between'>
              <KeyIcon />
              <Typography variant='buttonBig' width='100%' textAlign='center'>
                {t('Login with private key')}
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box flexDirection='row' mt={3} alignItems='baseline'>
          <Typography color='text.secondary' variant='subtitle2'>
            {t('Don’t have an account?')}
          </Typography>
          <Box ml={1}>
            <Link component='button'>{t('Sign Up')}</Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
