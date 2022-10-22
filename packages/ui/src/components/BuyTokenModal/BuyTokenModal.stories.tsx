import { ComponentStory } from '@storybook/react'
import { BuyTokenModal } from './BuyTokenModal'
import React from 'react'
import { useModal } from '@web3chief/ui/hooks/useModal'
import { PancakeIcon } from '../Icon/'
import { UniswapIcon } from '../Icon/'

export default {
  title: 'BuyTokenModal',
  component: BuyTokenModal,
}

const Template: ComponentStory<typeof BuyTokenModal> = () => {
  const buttons = [
    {
      icon: <PancakeIcon fontSize='large' />,
      name: 'buy token on PancakeSwap',
      link: 'https://pancakeswap.finance/swap',
    },
    {
      icon: <UniswapIcon fontSize='large' />,
      name: 'buy token on uniswap',
      link: 'https://app.uniswap.org/#/swap',
    },
  ]

  const links = [
    {
      name: 'Binance',
      link: '/',
    },
    {
      name: 'Uniswap',
      link: '/',
    },
    {
      name: 'Wyre',
      link: '/',
    },
  ]

  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <BuyTokenModal links={links} buttons={buttons} closeModal={closeModal} isOpen={isOpen} />
    </>
  )
}

export const DefaultCompoundModal = Template.bind({})
