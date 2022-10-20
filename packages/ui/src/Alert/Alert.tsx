import { Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { FC } from 'react'
import { useTheme } from '@mui/material'
import { alpha } from '@mui/system/colorManipulator'

const useBgcolor = (type: string) => {
  const theme = useTheme()

  switch (type) {
    case 'success': {
      return alpha(theme.palette.itemRarity.elite, 0.2)
    }
    case 'error': {
      return alpha(theme.palette.error.main, 0.2)
    }
    case 'warning': {
      return alpha(theme.palette.warning.main, 0.2)
    }
  }
}

const useTxColor = (type: string) => {
  const theme = useTheme()

  switch (type) {
    case 'success': {
      return theme.palette.info.main
    }
    case 'error': {
      return theme.palette.error.main
    }
    case 'warning': {
      return theme.palette.warning.main
    }
  }
}

type AlertProps = {
  variant: string
}

export const Alert: FC<AlertProps> = ({ variant, children }) => {
  const borderColor = useBgcolor(variant)
  const background = useBgcolor(variant)
  const txColor = useTxColor(variant)

  return (
    <Box
      position='relative'
      p={2}
      border='1px solid'
      borderColor={borderColor}
      background={background}
      borderRadius='8px'
    >
      <Typography variant='body2' color={txColor}>
        {children}
      </Typography>
    </Box>
  )
}
