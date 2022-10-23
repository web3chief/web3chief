import React from 'react'
import { ComponentStory } from '@storybook/react'
import { NonConnectorModal } from './index'
import Box from '@mui/material/Box'
import { useModal } from '../../hooks/useModal'

export default {
  title: 'NonConnectorModal',
  component: NonConnectorModal,
  parameters: {
    actions: {},
  },
}
const dataLinks = [
  { name: 'Chrome', link: '/' },
  { name: 'Firefox', link: '/' },
  { name: 'Opera', link: '/' },
]


const Template: ComponentStory<typeof NonConnectorModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <Box sx={{ display: 'flex', padding: '25px' }}>
        <NonConnectorModal links={dataLinks} closeModal={closeModal} isOpen={isOpen} />
      </Box>
    </>
  )
}

export const NonConnectorModalExample = Template.bind({})
