import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = () => (
  <Avatar level='28' avatarUrl='/heroes/hero.png' />
)

export const AvatarBlock = Template.bind({})
