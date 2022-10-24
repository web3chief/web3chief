import React from 'react'
import { ComponentStory } from '@storybook/react'
import { TokenVestingCard } from './TokenVestingCard'

export default {
  title: 'TokenVestingCard',
  component: TokenVestingCard,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof TokenVestingCard> = args => <TokenVestingCard {...args} />

export const TokenVestingCardExample = Template.bind({})

TokenVestingCardExample.args = { title: 'You can claim', value: '2000000 $' }
