import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Community } from './Community'
import { DiscordIcon, TwitterIcon, TelegramIcon } from '../Icon'
import React from 'react'

export default {
  title: 'Community',
  component: Community,
} as ComponentMeta<typeof Community>

const Template: ComponentStory<typeof Community> = () => {
  const buttons = [
    {
      icon: <DiscordIcon />,
      name: 'Discord',
      link: '/',
      color: '#5865F2',
    },
    {
      icon: <TwitterIcon />,
      name: 'Twitter',
      link: '/',
      color: '#1DA1F2',
    },
    {
      icon: <TelegramIcon />,
      name: 'Telegram',
      link: '/',
      color: '#1DA1F2',
    },
  ]

  return (
    <Community
      title='Be a part of our community'
      buttons={buttons}
      images={{
        xs: 'url(posters/image_community_440.png) no-repeat center center/auto 100%',
        sm: 'url(posters/image_community_440.png) no-repeat center center/auto 100%',
        md: 'url(posters/image_community_1280.png) no-repeat center center/auto 100%',
        lg: 'url(posters/image_community_1280.png) no-repeat center center/auto 100%',
        xl: 'url(posters/image_community_1440.png) no-repeat center center/auto 100%',
      }}
    />
  )
}

export const CommunityBlock = Template.bind({})
