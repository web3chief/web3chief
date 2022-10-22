import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../Box'
import { Loader } from './Loader'
import React from 'react'
import { PendingLoader } from './PendingLoader'

export default {
  title: 'Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = () => (
  <>
    <Box p={8} flexWrap='wrap' flexDirection='row'>
      <Loader />
    </Box>
    <Box p={8} flexWrap='wrap' flexDirection='row'>
      <PendingLoader text='pending' />
    </Box>
  </>
)

export const LoaderExample = Template.bind({})
