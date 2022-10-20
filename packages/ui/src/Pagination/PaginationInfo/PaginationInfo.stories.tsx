import React from 'react'
import { ComponentStory } from '@storybook/react'
import Box from '@mui/material/Box'
import { PaginationInfo } from '@web3chief/ui/Pagination/PaginationInfo/PaginationInfo'
import { Pagination } from '@web3chief/ui/Pagination'

export default {
  title: '@web3chief/ui/Pagination',
  component: PaginationInfo,
}

const Template: ComponentStory<typeof PaginationInfo> = args => (
  <Box>
    <Pagination count={2} />
    <Box pt={2}>
      <PaginationInfo {...args} />
    </Box>
  </Box>
)

export const PaginationInfoComponent = Template.bind({})

PaginationInfoComponent.args = {
  page: 1,
  perPage: 24,
  itemsCount: 31,
  itemsName: 'heroes',
}
