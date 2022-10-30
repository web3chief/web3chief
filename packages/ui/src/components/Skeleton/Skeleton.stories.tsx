import { Typography } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Skeleton } from './Skeleton'

export default {
  title: 'Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = () => (
  <>
    <Typography mb={1} variant='h4' color='text.secondary'>
      Variant radius
    </Typography>
    <Skeleton width={500} height={111} variant='radius' />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Variant rectangular
    </Typography>
    <Skeleton width={500} height={111} />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Variant text
    </Typography>
    <Skeleton width={500} height={111} variant='text' />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Variant circular
    </Typography>
    <Skeleton width={500} height={111} variant='circular' />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Animation wave
    </Typography>
    <Skeleton width={500} height={111} animation='wave' />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Animation pulse
    </Typography>
    <Skeleton width={500} height={111} animation='pulse' />
    <Typography mb={1} mt={5} variant='h4' color='text.secondary'>
      Animation none
    </Typography>
    <Skeleton width={500} height={111} animation={false} />
  </>
)

export const SkeletonExample = Template.bind({})
