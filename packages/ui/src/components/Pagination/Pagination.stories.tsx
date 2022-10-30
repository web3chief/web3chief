import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Pagination } from './index'
import Box from '@mui/material/Box'

export default {
  title: 'Pagination',
  component: Pagination,
}

const Template: ComponentStory<typeof Pagination> = args => (
  <Box sx={{ display: 'flex', padding: '25px' }}>
    <Pagination {...args} />
  </Box>
)

export const PaginationComponent = Template.bind({})

PaginationComponent.args = {
  count: 11,
}
