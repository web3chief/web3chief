import { Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { FC } from 'react'

export type TokenVestingCardProps = {
  title: string
  value: string
}

export const TokenVestingCard: FC<TokenVestingCardProps> = ({ title, value }) => (
  <Box
    px={3}
    py={{ xs: 2, xl: 4 }}
    border='1px solid'
    borderColor='alpha.10'
    height='100%'
    borderRadius='16px'
  >
    <Typography color='text.secondary' variant='subtitle2alt'>
      {title}
    </Typography>
    <Typography variant='h4'>{value}</Typography>
  </Box>
)
