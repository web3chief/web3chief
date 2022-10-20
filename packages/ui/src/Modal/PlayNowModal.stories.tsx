import { ComponentStory } from '@storybook/react'
import { PlayNowModal } from './PlayNowModal'
import React from 'react'
import { useModal } from '@web3chief/ui/hooks/useModal'
import { buttonsPlayNow } from '@web3chief/ui/config/playNowModal'

export default {
  title: '@web3chief/ui/PlayNowModal',
  component: PlayNowModal,
}

const Template: ComponentStory<typeof PlayNowModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <PlayNowModal buttons={buttonsPlayNow} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export const DefaultPlayNowModal = Template.bind({})
