import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TokenInput } from './TokenInput'
import { Box } from '@web3chief/ui/Box'
import { FormHelperText } from '@mui/material'

export const Inputs: Story = () => {
  const initialValues = {
    text: '',
  }

  const validationSchema = Yup.object({
    text: Yup.string().required('Text is required'),
  })

  const { values, handleChange } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => console.log('done'),
  })

  return (
    <Box>
      <FormHelperText>Label</FormHelperText>
      <TokenInput
        mask={Number}
        scale={4}
        handleMaxValue={() => null}
        available='700,353,000.45 TOKEN'
        icon='https://via.placeholder.com/32x32/c22f1'
        onChange={handleChange}
        value={values.text}
      />
    </Box>
  )
}

export default {
  title: 'Widgets/Inputs/TokenInput',
}
