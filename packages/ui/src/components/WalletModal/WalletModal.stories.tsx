import React from 'react'
import { ComponentStory } from '@storybook/react'
import { WalletModal } from './index'
import { useModal } from '../../hooks'
import { getConnectors, MAINNET_BSC_CHAIN_ID } from '@web3chief/sdk'

export default {
  title: 'WalletModal',
  component: WalletModal,
}

const Template: ComponentStory<typeof WalletModal> = args => {
  const { isOpen, closeModal, openModal } = useModal(true)
  // @TODO change hardcode
  const walletsData = getConnectors(MAINNET_BSC_CHAIN_ID)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <WalletModal {...args} walletsData={walletsData} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export const WalletModalExample = Template.bind({})
