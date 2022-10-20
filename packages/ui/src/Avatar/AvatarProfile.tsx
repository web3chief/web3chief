import React, { FC } from 'react'
import { Box } from '@web3chief/ui/Box'

export type AvatarsProps = {
  avatarUrl: string
}

const AvatarProfile: FC<AvatarsProps> = ({ avatarUrl }) => (
  <Box position='relative' width={{ xs: '48px' }} height={{ xs: '48px' }}>
    <Box
      width={{ xs: '48px' }}
      height={{ xs: '48px' }}
      background={`url(${avatarUrl}) no-repeat center center/auto 100%`}
      alignItems='center'
    />
  </Box>
)

export default AvatarProfile
