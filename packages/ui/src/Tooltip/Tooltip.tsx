import * as React from 'react'
import { FC } from 'react'
import { Box } from '@mui/material'
import { default as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip'
import { InfoFillIcon } from '@web3chief/ui/Icon/InfoFillIcon'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { DefaultTooltipBody } from '@web3chief/ui/Tooltip/Bodyes/DefaultTooltipBody'
import { TypographyProps } from '@mui/material/Typography/Typography'

export type TooltipProps = Omit<MuiTooltipProps, 'title' | 'children'> & {
  typographyProps?: TypographyProps
  icon?: FC<SvgIconProps>
  label?: React.ReactNode
} & Pick<SvgIconProps, 'fontSize'>

export const Tooltip: FC<TooltipProps> = ({
  children = '',
  fontSize = 'small',
  icon: Icon = InfoFillIcon,
  typographyProps = { variant: 'subtitle3' },
  label = null,
  ...rest
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false)

  const currentChildren =
    typeof children === 'string' ? (
      <DefaultTooltipBody
        variant='subtitle3'
        color='text.primary'
        title={children}
        {...typographyProps}
      />
    ) : (
      children || ''
    )

  return (
    <MuiTooltip
      title={currentChildren}
      sx={{ zIndex: 99 }}
      open={showTooltip}
      onOpen={() => setShowTooltip(true)}
      onClose={() => setShowTooltip(false)}
      {...rest}
    >
      <Box sx={{ display: 'flex', zIndex: 99 }} onClick={() => setShowTooltip(!showTooltip)}>
        {label || <Icon color='secondary' fontSize={fontSize} />}
      </Box>
    </MuiTooltip>
  )
}
