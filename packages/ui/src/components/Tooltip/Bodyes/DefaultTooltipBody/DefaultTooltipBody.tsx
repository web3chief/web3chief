import * as React from 'react'
import { FC } from 'react'
import { Typography } from '@mui/material'
import { TypographyProps } from '@mui/material/Typography/Typography'
import { Box, BoxProps } from '../../../Box'

type DefaultTooltipBodyProps = TypographyProps & {
  title: string
  boxProps?: BoxProps
}

export const DefaultTooltipBody: FC<DefaultTooltipBodyProps> = ({ title, boxProps, ...rest }) => (
  <Box
    position='relative'
    display='flex'
    flexDirection='column'
    bgcolor='menu.bgOpacity'
    borderColor='menu.bg'
    boxShadow='0px 16px 44px rgba(25, 17, 25, 0.2)'
    width='100%'
    borderRadius='8px'
    padding='12px'
    {...boxProps}
  >
    <Typography {...rest}>{title}</Typography>
  </Box>
)
