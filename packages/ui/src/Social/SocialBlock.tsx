import { FC } from 'react'
import { IconButton } from '@web3chief/ui/Button'
import NextLink from 'next/link'
import { DiscordIcon } from '@web3chief/ui/Icon/DiscordIcon'
import { TwitterIcon } from '@web3chief/ui/Icon/TwitterIcon'
import { TelegramIcon } from '@web3chief/ui/Icon/TelegramIcon'
import { Badge } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { DISCORD_URL, TELEGRAM_CHANEL_URL, TELEGRAM_GROUP_URL, TWITTER_URL } from '@web3chief/ui/config/urls'

export const SocialBlock: FC = () => (
  <Box flexDirection='row'>
    <NextLink href={DISCORD_URL} passHref>
      <a target='_blank'>
        <IconButton variant='square'>
          <DiscordIcon fontSize='large' />
        </IconButton>
      </a>
    </NextLink>
    <NextLink href={TWITTER_URL} passHref>
      <a target='_blank'>
        <IconButton variant='square'>
          <TwitterIcon fontSize='large' />
        </IconButton>
      </a>
    </NextLink>
    <NextLink href={TELEGRAM_CHANEL_URL} passHref>
      <a target='_blank'>
        <IconButton variant='square'>
          <Badge badgeContent={1} color='secondary'>
            <TelegramIcon fontSize='large' />
          </Badge>
        </IconButton>
      </a>
    </NextLink>
    <NextLink href={TELEGRAM_GROUP_URL} passHref>
      <a target='_blank'>
        <IconButton variant='square'>
          <Badge badgeContent={2} color='secondary'>
            <TelegramIcon fontSize='large' />
          </Badge>
        </IconButton>
      </a>
    </NextLink>
  </Box>
)
