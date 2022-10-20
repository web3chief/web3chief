import { Alert } from './Alert'
import { ComponentStory } from '@storybook/react'
import React from 'react'
import { Stack } from '@mui/material'

export default {
  title: '@web3chief/ui/Alert',
  component: Alert,
}

const Template: ComponentStory<typeof Alert> = () => (
  <Stack direction='row' spacing={2}>
    <Alert variant='success'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam, officia ex,
      voluptatibus, quam magni eveniet ipsam aliquam consectetur adipisci quasi nihil! Error
      adipisci corporis recusandae aliquid aliquam, perspiciatis officia?
    </Alert>

    <Alert variant='error'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam, officia ex,
      voluptatibus, quam magni eveniet ipsam aliquam consectetur adipisci quasi nihil! Error
      adipisci corporis recusandae aliquid aliquam, perspiciatis officia?
    </Alert>

    <Alert variant='warning'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque laboriosam, officia ex,
      voluptatibus, quam magni eveniet ipsam aliquam consectetur adipisci quasi nihil! Error
      adipisci corporis recusandae aliquid aliquam, perspiciatis officia?
    </Alert>
  </Stack>
)

export const AlertVarinats = Template.bind({})

AlertVarinats.args = {
  variant: 'success',
}
