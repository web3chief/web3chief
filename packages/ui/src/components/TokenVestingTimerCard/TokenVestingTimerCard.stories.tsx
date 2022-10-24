import React from 'react'
import { ComponentStory } from '@storybook/react'
import { TokenVestingTimerCard } from './TokenVestingTimerCard'

export default {
  title: 'TokenVestingTimerCard',
  component: TokenVestingTimerCard,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof TokenVestingTimerCard> = args => (
  <TokenVestingTimerCard {...args} />
)

export const TokenVestingCardExample = Template.bind({})

TokenVestingCardExample.args = { time: '30d 22h 18m 31s', value: '2000000 $', progress: 30 }
