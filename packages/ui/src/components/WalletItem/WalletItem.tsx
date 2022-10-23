import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { Box } from '../Box'

type WalletItemProps = {
  id?: number
  icon?: FC<SvgIconProps>
  name?: string
  description?: string
  count?: number | string
  usd?: number | string
}

export const WalletItem: FC<WalletItemProps> = props => (
  <Box
    flexDirection='row'
    alignItems='center'
    justifyContent='space-between'
    bgcolor='paper.bg'
    p='17px 20px'
    width='280px'
    minHeight='106px'
    boxSizing='border-box'
  >
    <Box flexDirection='row' alignItems='center'>
      {props.icon && <props.icon sx={{ width: '24px', height: '24px', marginRight: '12px' }} />}
      <Box>
        <Typography variant='menu' color='textPrimary'>
          {props.name}
        </Typography>
        <Typography variant='subtitle3' color='text.secondary'>
          {props.description}
        </Typography>
      </Box>
    </Box>
    <Box textAlign='right'>
      <Typography variant='menu'>{props.count + ' ' + props.name}</Typography>
      <Typography variant='subtitle3' color='text.secondary' sx={{ textAlign: 'end' }}>
        {'$' + props.usd}
      </Typography>
    </Box>
  </Box>
)
