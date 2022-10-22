import React, { FC, ReactNode } from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@web3chief/ui/Box'
import { BannerContainer as BannerBlock } from '@web3chief/ui/Banner'
import { Stack } from '@mui/material'
import { Button } from '@web3chief/ui/Button'
import { BoxProps as MuiBoxProps } from '@mui/material/Box/Box'

type ButtonProps = {
  icon: ReactNode
  name: string
  link: string
  color: string
}

export type CommunityProps = MuiBoxProps & {
  title: string
  images: MuiBoxProps['bgcolor']
  buttons: ButtonProps[]
}

export const Community: FC<CommunityProps> = ({ title, buttons, images }) => (
  <BannerBlock background={images}>
    <Box mb={{ xs: 1.5, sm: 2, md: 3 }}>
      <Typography variant='h2' align='center'>
        {title}
      </Typography>
    </Box>
    <Stack flexDirection='row'>
      {buttons.map((button, y, arr) => (
        <Box key={button.name} mr={arr.length - 1 === y ? 0 : 1}>
          <Button href={button.link} sx={{ background: button.color }} variant='contained'>
            {button.icon}
            <Box display={{ xs: 'none', sm: 'flex' }} width='100%' textAlign='center' ml={1.5}>
              <Typography variant='buttonSmall' color='text.primary'>
                {button.name}
              </Typography>
            </Box>
          </Button>
        </Box>
      ))}
    </Stack>
  </BannerBlock>
)
