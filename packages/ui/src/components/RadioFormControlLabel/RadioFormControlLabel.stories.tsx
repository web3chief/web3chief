import React from 'react'
import { ComponentStory } from '@storybook/react'
import { RadioFormControlLabel } from '../RadioFormControlLabel'
import { Box, RadioGroup } from '@mui/material'

export default {
  title: 'RadioButton',
  component: RadioFormControlLabel,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof RadioFormControlLabel> = args => (
  <Box sx={{ display: 'flex', background: 'background.default', padding: '25px' }}>
    <RadioGroup
      defaultValue={1}
      aria-labelledby='demo-radio-buttons-group-label'
      name='radio-buttons-group'
    >
      <RadioFormControlLabel {...args} />
    </RadioGroup>
  </Box>
)

export const RadioButton = Template.bind({})

RadioButton.args = {
  label: 'value 1',
  value: 1,
}

export const RadioButtonDisable = Template.bind({})

RadioButtonDisable.args = {
  label: 'value 1',
  value: 1,
  disabled: true,
}

const TemplateLabelPlacement: ComponentStory<typeof RadioFormControlLabel> = () => (
  <RadioGroup aria-labelledby='demo-radio' name='radio' defaultValue='top'>
    <Box flexDirection='row'>
      <RadioFormControlLabel labelPlacement='top' value='top' label='top' />
      <RadioFormControlLabel labelPlacement='bottom' value='bottom' label='bottom' />
      <RadioFormControlLabel labelPlacement='end' value='end' label='end' />
      <RadioFormControlLabel labelPlacement='start' value='start' label='start' />
    </Box>
  </RadioGroup>
)

export const RadioPlacement = TemplateLabelPlacement.bind({})

RadioPlacement.args = {}
