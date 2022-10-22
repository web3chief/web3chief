import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CheckboxFormControlLabel } from '../CheckboxFormControlLabel'
import { Box } from '../Box'

export default {
  title: '../Checkbox',
  component: CheckboxFormControlLabel,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof CheckboxFormControlLabel> = args => (
  <Box p='25px'>
    <CheckboxFormControlLabel {...args} />
  </Box>
)

export const CheckboxButton = Template.bind({})

CheckboxButton.args = {
  label: 'value 1',
}

export const CheckboxButtonDisable = Template.bind({})

CheckboxButtonDisable.args = {
  label: 'value 1',
  disabled: true,
}

export const CheckboxButtonDisableChecked = Template.bind({})

CheckboxButtonDisableChecked.args = {
  label: 'value 1',
  disabled: true,
  checked: true,
}

const TemplateLabelPlacement: ComponentStory<typeof CheckboxFormControlLabel> = args => (
  <Box flexDirection='row'>
    <Box p='25px'>
      <CheckboxFormControlLabel labelPlacement='top' {...args} />
    </Box>
    <Box p='25px'>
      <CheckboxFormControlLabel labelPlacement='bottom' {...args} />
    </Box>
    <Box p='25px'>
      <CheckboxFormControlLabel labelPlacement='end' {...args} />
    </Box>
    <Box p='25px'>
      <CheckboxFormControlLabel labelPlacement='start' {...args} />
    </Box>
  </Box>
)

export const CheckboxPlacement = TemplateLabelPlacement.bind({})

CheckboxPlacement.args = { label: 'value 1' }
