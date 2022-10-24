import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../Box'
import React from 'react'
import { News } from './News'
import newsList from '../News/newsList.json'

export default {
  title: 'News',
  component: News,
} as ComponentMeta<typeof News>

const Template: ComponentStory<typeof News> = () => (
  <Box mb={10}>
    <News newsArray={newsList} />
  </Box>
)

export const NewsExample = Template.bind({})
