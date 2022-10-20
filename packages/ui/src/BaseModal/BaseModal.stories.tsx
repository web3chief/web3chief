import React from 'react'
import { ComponentStory } from '@storybook/react'
import { BaseModal } from './index'
import Box from '@mui/material/Box'
import { useModal } from '@web3chief/ui/hooks/useModal'

export default {
  title: '@web3chief/ui/BaseModal',
  component: BaseModal,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof BaseModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <Box sx={{ display: 'flex', padding: '25px' }}>
        <BaseModal
          title='Approvement'
          closeModal={closeModal}
          isOpen={isOpen}
          text='Please give a confirmation of the purchase of items on our Marketplace.'
          textButton='Approve'
          onClick={() => null}
        />
      </Box>
    </>
  )
}

export const BaseModalExample = Template.bind({})
