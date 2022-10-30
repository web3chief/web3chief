import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../Box'
import BigNftBox from './BigNftBox'
import SkeletonBigNftBox from './SkeletonBigNftBox'

export default {
  title: 'BoxNftPage',
  component: BigNftBox,
} as ComponentMeta<typeof BigNftBox>

const Template: ComponentStory<typeof BigNftBox> = () => (
  <Box flexDirection='row'>
    <Box maxWidth={480} mr={10}>
      <BigNftBox image='/img/big-pack.png' />
    </Box>
    <Box maxWidth={480} width='100%'>
      <SkeletonBigNftBox />
    </Box>
  </Box>
)

export const BigNft = Template.bind({})
