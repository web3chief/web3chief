import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface LevelLabelProps {
  size: 'small' | 'medium'
  level: number
}

const LevelLabel: FC<LevelLabelProps> = ({ size = 'medium', level }) => (
  <>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size === 'medium' ? '32px' : '16px',
        height: size === 'medium' ? '32px' : '16px',
        borderRadius: '50%',
        border: '1px solid',
        borderColor: 'warning.main',
        bgcolor: 'controls.bg',
      }}
    >
      <Typography variant='h7' color='warning.main' fontSize={`${size === 'medium' ? '22px' : '12px'}`}>
        {level}
      </Typography>
    </Box>
  </>
)

export default LevelLabel
