import { FormHelperText, MenuItem, Select, Typography } from '@mui/material'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { ImageFallback } from '../../Image'
import { TextField } from '../../TextField'
import { Form, useFormikContext } from 'formik'
import { FC, ReactNode } from 'react'

export type Step1Props = {
  title: string
  subtitle: string
  inputNameTitle: string | ReactNode
  inputNamePlaceHolder: string
  inputNetworkTitle: string
  inputAddressTitle: string | ReactNode
  inputAddressPlaceHolder: string
  inputDescriptionTitle: string | ReactNode
  inputDescriptionPlaceHolder: string
  buttonCancelText: string
  buttonContinueText: string
  networks: { icon: string; name: string; value: string }[]
  symbol: string
  decimal: string
  supply: string
  onCancel: () => void
  invalidContactError?: string
  tokenInfo?: {
    icon: string
    name: string
    decimal: number
    totalSupply: string
  }
}

export enum FORM_VALUES {
  NAME = 'name',
  ADDRESS = 'address',
  NETWORK = 'network',
  DESCRIPTION = 'description',
}

export type FormType = {
  [FORM_VALUES.NAME]: string
  [FORM_VALUES.ADDRESS]: string
  [FORM_VALUES.NETWORK]: string
  [FORM_VALUES.DESCRIPTION]: string
}

export const Step1: FC<Step1Props> = ({
  title,
  subtitle,
  inputNameTitle,
  inputNamePlaceHolder,
  inputDescriptionTitle,
  inputDescriptionPlaceHolder,
  inputAddressTitle,
  inputAddressPlaceHolder,
  buttonContinueText,
  buttonCancelText,
  inputNetworkTitle,
  networks,
  onCancel,
  tokenInfo,
  symbol,
  decimal,
  supply,
  invalidContactError,
}) => {
  const { values, submitForm, handleChange, errors, touched, handleBlur } =
    useFormikContext<FormType>()

  const currentNetwork = networks.find(el => el.value === values[FORM_VALUES.NETWORK])

  return (
    <Form>
      <Box p={{ xs: 3, md: 5 }} borderRadius='16px' border='1px solid' borderColor='alpha.10'>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='subtitle1' color='text.secondary' mt={2}>
          {subtitle}
        </Typography>
        <Box gap={3} mt={4}>
          <Box>
            <FormHelperText>{inputNameTitle}</FormHelperText>
            <TextField
              name={FORM_VALUES.NAME}
              value={values[FORM_VALUES.NAME]}
              onChange={handleChange}
              placeholder={inputNamePlaceHolder}
              error={
                (Boolean(errors[FORM_VALUES.NAME]) && Boolean(touched[FORM_VALUES.NAME])) ||
                Boolean(invalidContactError)
              }
              helperText={errors[FORM_VALUES.NAME] || invalidContactError}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <FormHelperText>{inputNetworkTitle}</FormHelperText>
            <Select
              fullWidth
              disableUnderline
              onChange={handleChange}
              variant='filled'
              size='medium'
              value='Status'
              name={FORM_VALUES.NETWORK}
              sx={{ '& .MuiSelect-select.MuiInputBase-input': { py: '12px' } }}
              renderValue={() => (
                <Box alignItems='center' gap={1.5} flexDirection='row'>
                  <ImageFallback src={currentNetwork?.icon} width={32} height={32} alt='' />
                  <Typography color='text.primary' variant='subtitle1'>
                    {currentNetwork?.name}
                  </Typography>
                </Box>
              )}
            >
              {networks.map(network => (
                <MenuItem key={network.value} value={network.value}>
                  <Box alignItems='center' flexDirection='row' gap={1}>
                    <ImageFallback src={network.icon} width={24} height={24} alt='' />
                    <Typography variant='menu'>{network.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <FormHelperText>{inputAddressTitle}</FormHelperText>
            <TextField
              name={FORM_VALUES.ADDRESS}
              value={values[FORM_VALUES.ADDRESS]}
              onChange={handleChange}
              placeholder={inputAddressPlaceHolder}
              error={Boolean(errors[FORM_VALUES.ADDRESS]) && Boolean(touched[FORM_VALUES.ADDRESS])}
              helperText={errors[FORM_VALUES.ADDRESS]}
              onBlur={handleBlur}
            />
          </Box>
          {tokenInfo && (
            <Box
              gap={{ xs: 2, md: 7 }}
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems={{ xs: 'flex-start', md: 'center' }}
            >
              <Box>
                <Typography color='text.secondary' variant='subtitle4alt' mb={0.25}>
                  {symbol}
                </Typography>
                <Box alignItems='center' flexDirection='row' gap={0.75}>
                  <ImageFallback src={tokenInfo.icon} width={16} height={16} alt='' />
                  <Typography variant='subtitle1' color='text.primary'>
                    {tokenInfo.name}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color='text.secondary' variant='subtitle4alt' mb={0.25}>
                  {decimal}
                </Typography>
                <Typography variant='subtitle1' color='text.primary'>
                  {tokenInfo.decimal}
                </Typography>
              </Box>
              <Box>
                <Typography color='text.secondary' variant='subtitle4alt' mb={0.25}>
                  {supply}
                </Typography>
                <Typography variant='subtitle1' color='text.primary'>
                  {tokenInfo.totalSupply}
                </Typography>
              </Box>
            </Box>
          )}
          <Box>
            <FormHelperText>{inputDescriptionTitle}</FormHelperText>
            <TextField
              name={FORM_VALUES.DESCRIPTION}
              value={values[FORM_VALUES.DESCRIPTION]}
              onChange={handleChange}
              placeholder={inputDescriptionPlaceHolder}
            />
          </Box>
        </Box>
      </Box>
      <Box flexDirection='row' mt={4} justifyContent='space-between'>
        <Button
          onClick={onCancel}
          size='large'
          fullWidth
          sx={{ maxWidth: '207px' }}
          variant='outlined'
        >
          {buttonCancelText}
        </Button>
        <Button
          onClick={submitForm}
          type='submit'
          size='large'
          fullWidth
          sx={{ maxWidth: '207px' }}
          variant='contained'
        >
          {buttonContinueText}
        </Button>
      </Box>
    </Form>
  )
}
