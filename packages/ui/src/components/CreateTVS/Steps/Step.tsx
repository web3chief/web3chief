import { Typography } from '@mui/material'
import { Box } from '../../Box'
import { FC } from 'react'
import { useBreakpoint } from '../../../hooks'

export type StepProps = {
  title: string
  description: string
  step: number
  currentStep: number
  lengthSteps: number
}

const STYLE_LINE_SMALL = {
  height: '1px',
  width: 'calc(100% - 48px)',
  top: '50%',
  left: '40px',
}
const STYLE_LINE_LARGE = {
  height: 'calc(100% - 48px)',
  width: '1px',
  top: '40px',
  left: '16px',
}

const STYLE_LINES = {
  xs: STYLE_LINE_SMALL,
  sm: STYLE_LINE_SMALL,
  md: STYLE_LINE_SMALL,
  lg: STYLE_LINE_SMALL,
  xl: STYLE_LINE_SMALL,
  xxl: STYLE_LINE_LARGE,
  xxxl: STYLE_LINE_LARGE,
  container: STYLE_LINE_LARGE,
}

export const Step: FC<StepProps> = ({ title, description, step, currentStep, lengthSteps }) => {
  const breakpoint = useBreakpoint()
  const bgColorStep = (position: StepProps['step']) => {
    if (position < currentStep) return 'text.action'

    if (position === currentStep) return 'text.primary'

    return 'background.secondary'
  }

  const bgColorLine = (position: StepProps['step']) => {
    if (position < currentStep) return 'text.action'

    if (position === currentStep) return 'text.primary'

    return 'alpha.10'
  }

  const styleLines = STYLE_LINES[breakpoint]

  return (
    <Box
      pb={{ xs: 0, xxl: 4 }}
      width={{ xs: step === lengthSteps ? 'fit-content' : '100%', xxl: '100%' }}
      flexDirection='row'
      position='relative'
      sx={{
        '&:after': {
          content: '""',
          position: 'absolute',
          display: step === lengthSteps ? 'none' : 'block',
          bgcolor: bgColorLine(step),
          ...styleLines,
        },
      }}
    >
      <Box
        alignItems='center'
        justifyContent='center'
        bgcolor={bgColorStep(step)}
        width='32px'
        height='32px'
        borderRadius='50%'
        flex='none'
      >
        <Typography
          color={currentStep === step ? 'bg.pimary' : 'text.primary'}
          variant='subtitle1alt'
        >
          {step}
        </Typography>
      </Box>
      <Box ml={2} display={{ xs: 'none', xxl: 'flex' }}>
        <Typography variant='subtitle1alt'>{title}</Typography>
        <Typography mt={0.5} variant='subtitle2'>
          {description}
        </Typography>
      </Box>
    </Box>
  )
}
