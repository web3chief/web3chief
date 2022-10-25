import { Typography } from '@mui/material'
import { ComponentStory } from '@storybook/react'
import { Box } from '../../Box'
import { Formik, useFormik } from 'formik'
import React from 'react'
import { Step1, FormType } from './Step1'
import * as yup from 'yup'
import { FORM_VALUES } from '.'

export default {
  title: 'CreateTVS/components/Step1',
  component: Step1,
}

const texts = {
  title: 'Blockhain & Token Info',
  subtitle: 'Select Blockhain and insert the token contract address.',
  inputNameTitle: 'Dapp Name',
  inputNamePlaceHolder: 'e.g. Web3chief Vesting',
  inputNetworkTitle: 'Select Blockhain',
  inputAddressTitle: 'Token Vesting Address',
  inputAddressPlaceHolder: 'Insert token vesting address',
  inputDescriptionTitle: (
    <Box flexDirection='row'>
      <Typography variant='subtitle3'>Description</Typography>
      <Typography variant='subtitle3'>(Optional)</Typography>
    </Box>
  ),
  inputDescriptionPlaceHolder: 'e.g. Web3chief Vesting',
  buttonCancelText: 'Cancel',
  buttonContinueText: 'Continue',
  symbol: 'Symbol',
  decimal: 'Decimal',
  supply: 'Total Supply',
}

const networks = [
  { icon: 'img/token.png', name: 'Ethereum', value: 'eth' },
  { icon: 'img/token.png', name: 'Rinkbey', value: 'rinkbey' },
]

const validationSchema = yup.object({
  [FORM_VALUES.ADDRESS]: yup.string().required('Wallet is required'),
  [FORM_VALUES.NAME]: yup.string().required('Name is required'),
  [FORM_VALUES.DESCRIPTION]: yup.string(),
  [FORM_VALUES.NETWORK]: yup.string(),
})

const tokenInfo = {
  icon: 'img/token.png',
  name: 'TKN',
  decimal: 18,
  totalSupply: '18000000000',
}

const Template: ComponentStory<typeof Step1> = () => {
  const initialValues = {
    [FORM_VALUES.ADDRESS]: '',
    [FORM_VALUES.NAME]: '',
    [FORM_VALUES.DESCRIPTION]: '',
    [FORM_VALUES.NETWORK]: networks[0].value,
  }

  const onHandleSubmit = (values: FormType) => {
    console.log(values)
  }

  useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: onHandleSubmit,
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={values => console.log(values)}
    >
      {() => <Step1 tokenInfo={tokenInfo} onCancel={() => null} networks={networks} {...texts} />}
    </Formik>
  )
}

export const Default = Template.bind({})
