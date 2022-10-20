import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'
import { HeroIcon } from '../Icon/HeroIcon'
import { Grid, Typography } from '@mui/material'
import { Tabs } from '@web3chief/ui/Tabs/Tabs'

export default {
  title: '@web3chief/ui/Tabs',
  component: Tabs,
  parameters: {
    actions: {
      handles: ['onChangeTab'],
    },
  },
}

const Template: ComponentStory<typeof Tabs> = args => {
  const initialTab = args.tabs.find(el => !el.disabled)?.value

  const [currentTab, setCurrentTab] = useState<string>(initialTab)

  return (
    <>
      <Typography mb={5} variant='h4' color='text.secondary'>
        {args.title}
      </Typography>
      <Tabs {...args} currentTab={currentTab} onChangeTab={setCurrentTab}>
        <Grid container columns={5}>
          <Grid item xs={1}>
          </Grid>
        </Grid>
        <Grid container columns={5}>
          <Grid item xs={1}>
          </Grid>
        </Grid>
        <Grid container columns={5}>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </Tabs>
    </>
  )
}

export const TabsStartBigSize = Template.bind({})

TabsStartBigSize.args = {
  title: 'Icon start & Big size',
  size: 'lg',
  tabs: [
    { icon: '', iconPosition: 'start', label: 'All', value: 'all' },
    { icon: <HeroIcon />, iconPosition: 'start', label: 'Heroes', value: 'heroes' },
    {
      icon: <HeroIcon />,
      iconPosition: 'start',
      label: 'Spaceships',
      value: 'spaceships',
    },
  ],
}

export const TabsEndMediumSize = Template.bind({})

TabsEndMediumSize.args = {
  title: 'Icon end & Medium size',
  size: 'sm',
  tabs: [
    { icon: '', iconPosition: 'end', label: 'All', value: 'all' },
    { icon: <HeroIcon />, iconPosition: 'end', label: 'Heroes', value: 'heroes' },
    {
      icon: <HeroIcon />,
      iconPosition: 'end',
      label: 'Spaceships',
      value: 'spaceships',
    },
  ],
}

export const TabsDisabledSmallSize = Template.bind({})

TabsDisabledSmallSize.args = {
  title: 'Tab disabled & Small size',
  size: 'xs',
  tabs: [
    { icon: '', iconPosition: 'end', label: 'All', disabled: true, value: 'all' },
    { icon: <HeroIcon />, iconPosition: 'end', label: 'Heroes', disabled: true, value: 'heroes' },
    {
      icon: <HeroIcon />,
      iconPosition: 'end',
      label: 'Spaceships',
      value: 'spaceships',
    },
  ],
}
