import React from 'react'
import { ComponentStory } from '@storybook/react'
import { WalletModal } from './index'
import { useModal } from '@web3chief/ui/hooks/useModal'
import { getConnectors, MAINNET_BSC_CHAIN_ID } from '@web3chief/sdk'

export default {
  title: '@web3chief/ui/WalletModal',
  component: WalletModal,
}

const Template: ComponentStory<typeof WalletModal> = args => {
  const { isOpen, closeModal, openModal } = useModal(true)

  const walletsData = getConnectors(MAINNET_BSC_CHAIN_ID)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <WalletModal {...args} walletsData={walletsData} isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export const WalletModalExample = Template.bind({})
