import React from 'react'
import { ComponentStory } from '@storybook/react'
import { SocialBlock } from '@web3chief/ui/Social'

export default {
  title: '@web3chief/ui/SocialBlock',
  component: SocialBlock,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof SocialBlock> = () => <SocialBlock />

export const FooterDefault = Template.bind({})
