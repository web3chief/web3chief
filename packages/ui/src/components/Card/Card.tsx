import { FC } from 'react'
import { CardProps } from '@mui/material'
import { Box, BoxProps } from '../Box'
import MUICard from '@mui/material/Card'

export const Cross: FC<BoxProps> = props => (
  <Box position='absolute' {...props}>
    <Box
      sx={{
        height: '1px',
        width: '5px',
        bgcolor: 'paper.cross',
        position: 'absolute',
        top: '0',
        left: '-2px',
      }}
    />
    <Box
      sx={{
        height: '5px',
        width: '1px',
        bgcolor: 'paper.cross',
        position: 'absolute',
        top: '-2px',
        left: '0',
      }}
    />
  </Box>
)

export const Card: FC<CardProps & Pick<BoxProps, 'bgcolor' | 'borderColor'>> = ({ children, ...props }) => (
  <Box sx={{ position: 'relative' }}>
    <MUICard {...props}>{children}</MUICard>
  </Box>
)

export const PopupCard: FC<CardProps> = props => (
  <Card bgcolor='background.secondary' borderColor='background.secondary' {...props} />
)

export const CornerBox: FC<BoxProps> = ({ children, ...rest }) => (
  <Box position='relative' bgcolor='paper.bg' borderColor='menu.bg' width='100%' {...rest}>
    {children}
    <Cross top='0' left='0' />
    <Cross sx={{ top: '0', right: '1px' }} />
    <Cross sx={{ bottom: '1px', left: '0' }} />
    <Cross sx={{ bottom: '1px', right: '1px' }} />
  </Box>
)

export const CrossBox: FC<BoxProps> = props => (
  <Box position='absolute' top={0} right={0} left={0} bottom={0} {...props}>
    <Cross sx={{ top: '0', left: '0' }} />
    <Cross sx={{ top: '0', right: '1px' }} />
    <Cross sx={{ bottom: '1px', left: '0' }} />
    <Cross sx={{ bottom: '1px', right: '1px' }} />
  </Box>
)
