import React from 'react'
import { ArrowTabsIcon } from '../Icon'
import { TabScrollButtonProps } from '@mui/material'
import { Box } from '../Box'

const ScrollButtonTabs = (props: TabScrollButtonProps) => {
  if (!props.disabled)
    return (
      <Box
        onClick={props.onClick}
        role='button'
        width={40}
        height={40}
        p={1}
        position='relative'
        bgcolor='background.default'
        alignItems='center'
        justifyContent='center'
        cursor='pointer'
        flex='none'
        color='text.primary'
      >
        <ArrowTabsIcon />
      </Box>
    )

  return null
}

export default ScrollButtonTabs
