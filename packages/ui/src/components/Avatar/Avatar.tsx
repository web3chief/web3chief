import React, { FC } from 'react'
import { Box } from '../Box'
import { Typography } from '@mui/material'

export type AvatarsProps = {
  avatarUrl: string
  level?: string | number
}

const Avatar: FC<AvatarsProps> = ({ avatarUrl, level }) => (
  <Box
    position='relative'
    sx={{ width: { xs: '40px' }, height: { xs: '40px' } }}
    borderRadius='4px'
    overflow='hidden'
  >
    <Box
      sx={{ width: { xs: '40px' }, height: { xs: '40px' } }}
      background={`url(${avatarUrl}) no-repeat center center/auto 100%`}
      alignItems='center'
    />
    {level && (
      <Box
        position='absolute'
        bottom='-8px'
        right='0'
        left='0'
        alignItems='center'
        sx={{
          width: '16px',
          height: '16px',
          backdropFilter: 'blur(64px)',
        }}
        marginLeft='auto'
        marginRight='auto'
        background='rgba(0, 0, 0, 0.3)'
        border='1px solid'
        borderColor='warning.main'
        borderRadius='72px'
        paddingTop='0.5px'
      >
        <Typography variant='h8' color='warning.main'>
          {level}
        </Typography>
      </Box>
    )}
  </Box>
)

export default Avatar
