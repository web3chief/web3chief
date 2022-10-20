import React from 'react'
import { ComponentStory } from '@storybook/react'
import { TextRow } from '@web3chief/ui/TextRow/TextRow'
import { Stack } from '@mui/material'
import { ExampleIcon } from '@web3chief/ui/Icon/ExampleIcon'

export default {
  title: '@web3chief/ui/TextRow',
  component: TextRow,
}

const Template: ComponentStory<typeof TextRow> = () => (
  <Stack spacing={2}>
    <TextRow label='example label' tooltip='example tooltip' value='example value' />
    <TextRow
      valueColor='error.main'
      labelVariant='subtitle4'
      label='example label'
      tooltip='example tooltip'
      value='example value'
      subValue='example subValue'
    />
    <TextRow
      labelVariant='subtitle4alt'
      label='example label'
      tooltip='example tooltip'
      value='example value'
      subValue='example subValue'
    />
    <TextRow
      icon={<ExampleIcon />}
      subValueVariant='h6'
      labelVariant='subtitle4alt'
      label='example label'
      value='example value'
      subValue='example subValue'
    />
    <TextRow
      valueVariant='h4'
      labelVariant='subtitle4alt'
      label='example label'
      tooltip='example tooltip'
      value='example value'
      subValue='example subValue'
    />
  </Stack>
)

export const TextRowExample = Template.bind({})
