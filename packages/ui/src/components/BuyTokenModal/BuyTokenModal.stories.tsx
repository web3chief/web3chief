
import { BuyTokenModal } from './BuyTokenModal'
import React from 'react'
import { useModal } from '../../hooks/useModal'
import { PancakeIcon, UniswapIcon } from '../Icon/'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'BuyTokenModal',
  component: BuyTokenModal,
} as ComponentMeta <typeof BuyTokenModal>

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
