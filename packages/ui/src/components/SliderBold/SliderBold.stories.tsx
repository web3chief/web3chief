import React from 'react'
import { ComponentStory } from '@storybook/react'
import { SliderBold } from './SliderBold'

export default {
  title: 'SliderBold',
  component: SliderBold,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof SliderBold> = args => <SliderBold {...args} />

export const TokenVestingCardExample = Template.bind({})

TokenVestingCardExample.args = {
  value: 0,
  labelTitle: 'Total raised',
  labelValue: '1M TKN',
}
