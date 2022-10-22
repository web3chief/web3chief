import React from 'react'
import { ComponentStory } from '@storybook/react'
import { TokenVestingBoard } from '.'

export default {
  title: 'TokenVestingBoard',
  component: TokenVestingBoard,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof TokenVestingBoard> = args => <TokenVestingBoard {...args} />

export const TokenVestingCardExample = Template.bind({})

TokenVestingCardExample.args = {
  token: 'TKN',
  totalValue: '1m',
  currentValue: '0.5m',
}
