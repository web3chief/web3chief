import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stack from '@mui/material/Stack'
import SvgIcon from '@mui/material/SvgIcon'
import { DiscordIcon } from './DiscordIcon'

export default {
  title: '@web3chief/ui/Icon',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>

const Template: ComponentStory<typeof SvgIcon> = args => (
  <Stack direction='row' spacing={2} alignItems='flex-end'>
    <DiscordIcon fontSize='xsmall' {...args}></DiscordIcon>
    <DiscordIcon fontSize='small' {...args}></DiscordIcon>
    <DiscordIcon fontSize='medium' {...args}></DiscordIcon>
    <DiscordIcon fontSize='large' {...args}></DiscordIcon>
    <DiscordIcon fontSize='xlarge' {...args}></DiscordIcon>
  </Stack>
)

export const IconSize = Template.bind({})
