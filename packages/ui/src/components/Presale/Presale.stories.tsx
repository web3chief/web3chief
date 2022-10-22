import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Presale } from './Presale'
import React from 'react'
import { Box } from '../Box'

export default {
  title: 'Presale',
  component: Presale,
} as ComponentMeta<typeof Presale>

const Template: ComponentStory<typeof Presale> = () => (
  <Box mt={20}>
    <Presale
      title='White list presale'
      description='You will be able to buy Private NFTs after the end of the White List sale.'
      timer={{
        startTimestamp: 1_652_597_838,
        endTimestamp: 1_651_597_838,
      }}
    />
  </Box>
)

export const PresaleBlock = Template.bind({})
