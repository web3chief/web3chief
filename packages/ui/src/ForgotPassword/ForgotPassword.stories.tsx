import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Box } from '@mui/material'
import { ForgotPassword } from './ForgotPassword'
import { useModal } from '@web3chief/ui/hooks/useModal'

export default {
  title: '@web3chief/ui/ForgotPassword',
  component: ForgotPassword,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof ForgotPassword> = () => {
  const { isOpen, closeModal } = useModal(true)

  return (
    <Box sx={{ display: 'flex', background: 'background.default', padding: '25px' }}>
      <ForgotPassword
        title='Forgot Password'
        descriptionAboutCode='Please check the security code in your email.'
        email='star.lord@example.com'
        securityCodeInput={true}
        ruleDescription='Password minimum lenth 12'
        timerMessage='Resend code in 00:32'
        securityButton={{
          title: 'Send me a new security code',
          onClick: () => {
            console.log('securityButton')
          },
        }}
        submitButton={{
          title: 'SUBMIT',
          onClick: () => {
            console.log('submitButton')
          },
        }}
        closeModal={closeModal}
        isOpen={isOpen}
        signUpControl={{
          description: 'I remember the password, ',
          title: ' Sign In',
          onClick: () => {
            console.log('signUpControl')
          },
        }}
      />
    </Box>
  )
}

export const ForgotPasswordDefault = Template.bind({})

ForgotPasswordDefault.args = {}
