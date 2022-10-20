import React from 'react'
import { ComponentStory } from '@storybook/react'
import { NonConnectorModal } from './index'
import Box from '@mui/material/Box'
import { useModal } from '@web3chief/ui/hooks/useModal'

export default {
  title: '@web3chief/ui/NonConnectorModal',
  component: NonConnectorModal,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof NonConnectorModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <Box sx={{ display: 'flex', padding: '25px' }}>
        <NonConnectorModal closeModal={closeModal} isOpen={isOpen} />
      </Box>
    </>
  )
}

export const NonConnectorModalExample = Template.bind({})
