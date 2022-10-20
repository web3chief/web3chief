import React from 'react'
import { ComponentStory } from '@storybook/react'
import { WalletItem } from './index'
import Box from '@mui/material/Box'
import { AvaxWalletIcon } from '@web3chief/ui/Icon/AvaxWalletIcon'

const defaultWalletItem = {
  id: 1,
  icon: AvaxWalletIcon,
  name: 'Avax',
  description: 'Avalanche',
  count: 1,
  usd: 15,
}

export default {
  title: '@web3chief/ui/WalletItem',
  component: WalletItem,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof WalletItem> = args => (
  <Box sx={{ display: 'flex', padding: '25px' }}>
    <WalletItem {...args} />
  </Box>
)

export const WalletItemAvax = Template.bind({})

WalletItemAvax.args = {
  ...defaultWalletItem,
}
