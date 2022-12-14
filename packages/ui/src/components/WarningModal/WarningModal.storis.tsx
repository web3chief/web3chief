import React from 'react'
import { ComponentStory } from '@storybook/react'
import { WarningModal } from './index'
import Box from '@mui/material/Box'
import { useModal } from '../../hooks'
import { Button } from '../Button'

export default {
  title: 'WarningModal',
  component: WarningModal,
  parameters: {
    actions: {},
  },
}

const buttons = [
  <Button size='large' key={1}>
    Yes, go back
  </Button>,
  <Button size='large' key={2} variant='contained'>
    Yes, go back
  </Button>,
]
const Template: ComponentStory<typeof WarningModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <Box sx={{ display: 'flex', padding: '25px' }}>
        <WarningModal
          contentVariant='text.secondary'
          title='example'
          buttons={buttons}
          closeModal={closeModal}
          isOpen={isOpen}
        />
      </Box>
    </>
  )
}

export const WarningModalExample = Template.bind({})
