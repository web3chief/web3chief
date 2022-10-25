import { Box } from '../../Box'
import { FC } from 'react'
import { Step } from './Step'

export type StepsProps = {
  steps: { title: string; description: string }[]
  currentStep: number
}

export const Steps: FC<StepsProps> = ({ steps, currentStep }) => (
  <Box justifyContent='space-between' flexDirection={{ xs: 'row', xxl: 'column' }}>
    {steps.map((step, i) => (
      <Step step={i + 1} currentStep={currentStep} lengthSteps={steps.length} key={i} {...step} />
    ))}
  </Box>
)
