import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack, IconButton } from '@mui/material'
import { DiscordIcon } from '../Icon/DiscordIcon'

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = args => (
  <>
    <Stack direction='row' spacing={2}>
      <IconButton size='large' {...args}>
        <DiscordIcon />
      </IconButton>
      <IconButton size='large' disabled {...args}>
        <DiscordIcon />
      </IconButton>
    </Stack>
    <Stack direction='row' spacing={2}>
      <IconButton size='medium' {...args}>
        <DiscordIcon />
      </IconButton>
      <IconButton size='medium' disabled {...args}>
        <DiscordIcon />
      </IconButton>
    </Stack>
    <Stack direction='row' spacing={2}>
      <IconButton size='small' {...args}>
        <DiscordIcon />
      </IconButton>
      <IconButton size='small' disabled {...args}>
        <DiscordIcon />
      </IconButton>
    </Stack>
  </>
)

export const IconButtonAll = Template.bind({})
