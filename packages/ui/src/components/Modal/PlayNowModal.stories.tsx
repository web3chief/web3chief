import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PlayNowModal } from './PlayNowModal'
import React from 'react'
import { useModal } from '../../hooks/useModal'
import { buttonsPlayNow } from '../../config/playNowModal'

export default {
  title: 'PlayNowModal',
  component: PlayNowModal,
} as ComponentMeta<typeof PlayNowModal>

const Template: ComponentStory<typeof PlayNowModal> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <PlayNowModal buttons={buttonsPlayNow} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export const PlayNowModalExample = Template.bind({})
