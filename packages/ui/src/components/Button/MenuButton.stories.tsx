import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stack from '@mui/material/Stack'
import { MenuButton } from './MenuButton'

export default {
  title: 'MenuButton',
  component: MenuButton,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof MenuButton>

const Template: ComponentStory<typeof MenuButton> = args => (
  <>
    <Stack direction='row' spacing={2}>
      <MenuButton {...args}>one</MenuButton>
      <MenuButton isActive {...args}>
        two
      </MenuButton>
    </Stack>
  </>
)

export const Default = Template.bind({})
