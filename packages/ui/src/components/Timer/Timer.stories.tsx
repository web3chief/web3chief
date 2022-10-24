import { FC } from 'react'
import { ComponentStory } from '@storybook/react'
import Timer from './index'
import { Box } from '../Box'

const TimerNft: FC = () => <></>

export default {
  title: 'Timer',
  component: Timer,
}

const startTimestamp = 1_652_597_838
const endTimestamp = 1_651_597_838

const Template: ComponentStory<typeof TimerNft> = () => (
  <Box maxWidth={284}>
    <Timer startTimestamp={startTimestamp} endTimestamp={endTimestamp} />
  </Box>
)

export const TimerNftBlock = Template.bind({})
