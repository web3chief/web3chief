import { FC, forwardRef } from 'react'
import { default as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Box } from '@web3chief/ui/Box'

const StyledMuiButton = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  position: 'relative',
  background: 'transparent',
  '.crosses': {
    display: 'none',
  },
  '.crosses.active': {
    display: 'flex',
    boxShadow: '0px 0px 0px 1px rgba(255, 255, 255, 0.25) inset',
  },
  '&:hover': {
    background: 'transparent',
    '.crosses': {
      display: 'flex',
      boxShadow: '0px 0px 0px 1px rgba(255, 255, 255, 0.25) inset',
    },
  },
}))

export type MenuButtonProps = MuiButtonProps & {
  isActive?: boolean
}

export const MenuButton: FC<MenuButtonProps> = forwardRef(
  ({ isActive = false, children, ...rest }, ref) => (
    <Box position='relative'>
      <StyledMuiButton ref={ref} variant={isActive ? 'menuActive' : 'text'} {...rest}>
        {children}
      </StyledMuiButton>
    </Box>
  ),
)
