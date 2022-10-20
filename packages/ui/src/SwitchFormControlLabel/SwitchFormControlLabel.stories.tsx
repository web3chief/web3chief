import { ComponentStory } from '@storybook/react'
import { Box } from '@mui/material'
import { SwitchFormControlLabel } from '@web3chief/ui/SwitchFormControlLabel/SwitchFormControlLabel'

export default {
  title: '@web3chief/ui/Switch',
  component: SwitchFormControlLabel,
  parameters: {
    actions: {},
  },
}

const Template: ComponentStory<typeof SwitchFormControlLabel> = args => (
  <Box p={6}>
    <SwitchFormControlLabel {...args} />
  </Box>
)

export const SwitchButton = Template.bind({})

SwitchButton.args = {
  label: 'value 1',
}

export const SwitchButtonCheckedDisable = Template.bind({})

SwitchButtonCheckedDisable.args = {
  label: 'value 1',
  disabled: true,
  checked: true,
}

export const SwitchButtonDisable = Template.bind({})

SwitchButtonDisable.args = {
  label: 'value 1',
  disabled: true,
}
