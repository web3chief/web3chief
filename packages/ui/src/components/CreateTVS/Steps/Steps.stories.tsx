import { Stack } from '@mui/material'
import { ComponentStory } from '@storybook/react'
import { Box } from '../../Box'
import React from 'react'
import { Steps } from './Steps'

export default {
  title: 'CreateTVS/components/Steps',
  component: Steps,
}

const steps = [
  {
    title: 'Blockhain & Token Info',
    description: 'Select Blockhain and insert the token contract address.',
  },
  {
    title: 'Rounds',
    description:
      'Add the necessary number of rounds and information about them. You can set the time periods for each round in the next step.',
  },
  {
    title: 'Vesting Scheme',
    description: 'Choose a method of dropping tokens for each vesting round.',
  },
  {
    title: 'Investors',
    description: 'Fill in manually or import CSV.',
  },
]

const Template: ComponentStory<typeof Steps> = () => (
  <Stack spacing={3}>
    <Box>
      <Steps currentStep={1} steps={steps} />
    </Box>
    <Box>
      <Steps currentStep={2} steps={steps} />
    </Box>
    <Box>
      <Steps currentStep={3} steps={steps} />
    </Box>
  </Stack>
)

export const Default = Template.bind({})
