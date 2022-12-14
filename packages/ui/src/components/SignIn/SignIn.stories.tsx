import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Box } from '@mui/material'
import { SignIn } from './SignIn'
import { useModal } from '../../hooks'

export default {
  title: 'SignIn',
  component: SignIn,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof SignIn> = () => {
  const { isOpen, closeModal } = useModal(true)

  return (
    <Box sx={{ display: 'flex', background: 'background.default', padding: '25px' }}>
      <SignIn isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export const SignInDefault = Template.bind({})

SignInDefault.args = {}
