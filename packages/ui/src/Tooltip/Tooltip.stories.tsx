import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Tooltip } from './index'
import { Box } from '@web3chief/ui/Box'
import { InventoryTooltipBody } from '@web3chief/ui/Tooltip/Bodyes/InventoryTooltipBody'
import { mockInventoryItem } from '@web3chief/ui/InventoryItem/Mocks'
import { Typography } from '@mui/material'

export default {
  title: '@web3chief/ui/Tooltip',
  component: Tooltip,
}

const Template: ComponentStory<typeof Tooltip> = args => (
  <Box width='100%' alignItems='center'>
    <Typography>Placement base</Typography>
    <Box flexDirection='row' p='25px'>
      <Tooltip {...args} />
    </Box>
    <Box flexDirection='row'>
      <Typography>Placement right</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='right' />
      </Box>
      <Typography>Placement right-start</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='right-start' />
      </Box>
      <Typography>Placement right-end</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='right-end' />
      </Box>
    </Box>

    <Box flexDirection='row'>
      <Typography>Placement top</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='top' />
      </Box>
      <Typography>Placement top-start</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='top-start' />
      </Box>
      <Typography>Placement top-end</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='top-end' />
      </Box>
    </Box>

    <Box flexDirection='row'>
      <Typography>Placement bottom</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='bottom' />
      </Box>
      <Typography>Placement bottom-start</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='bottom-start' />
      </Box>
      <Typography>Placement bottom-end</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='bottom-end' />
      </Box>
    </Box>

    <Box flexDirection='row'>
      <Typography>Placement left</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='left' />
      </Box>
      <Typography>Placement left-start</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='left-start' />
      </Box>
      <Typography>Placement left-end</Typography>
      <Box flexDirection='row' p='25px'>
        <Tooltip {...args} placement='left-end' />
      </Box>
    </Box>
  </Box>
)

export const TooltipWithBody = Template.bind({})

TooltipWithBody.args = {
  //TODO: выпилить потом все это
  children: <InventoryTooltipBody {...(mockInventoryItem as any)} />,
}

export const TooltipDefaultBody = Template.bind({})

TooltipDefaultBody.args = {
  children:
    'Game inventory — inventory of an active Profile that you can use in the game and transfer it to the Wallet Inventory.',
}
