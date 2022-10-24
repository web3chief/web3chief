import { useTheme, keyframes, Typography } from '@mui/material'
import { Box } from '../Box'
import { Button } from '../Button'

const loaderAnim = keyframes`
     0%{transform:rotate(0deg);}
     100%{transform:rotate(360deg);}
`

export const PendingLoader = ({ text = 'Pending' }: { text?: string }) => {
  const theme = useTheme()

  return (
    <Button variant='text' size='large'>
      <Box flexDirection='row' alignItems='center'>
        <Box
          width={20}
          height={20}
          borderRadius='50%'
          border='2px solid transparent'
          background={`linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default}), conic-gradient(from 0.15turn, ${theme.palette.background.default}, white)`}
          sx={{
            animation: `${loaderAnim} 1.5s linear infinite`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
          }}
        />
        <Typography
          variant='subtitle2alt'
          textTransform='uppercase'
          color='text.secondary'
          ml='10px'
        >
          {text}
        </Typography>
      </Box>
    </Button>
  )
}
