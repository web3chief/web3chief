import { Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { FC } from 'react'

type SizeBadge = 'small' | 'medium'

const getStyles = (size?: SizeBadge) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (size) {
    case 'medium':
      return {
        padding: '2.5px 9px',
        border: '1.5px solid',
      }

    default:
      return {
        padding: '1.5px 7px',
        border: '1px solid',
      }
  }
}

export const BadgeCustom: FC<{ badge: string; color: string; size?: SizeBadge }> = ({
  badge,
  color,
  size,
}) => (
  <Box {...getStyles(size)} borderColor={color}>
    <Typography variant='subtitle4alt' color={color}>
      {badge}
    </Typography>
  </Box>
)
