import React, { FC, ReactNode } from 'react'
import { Box } from '@web3chief/ui/Box'
import { Tooltip } from '@web3chief/ui/Tooltip'
import { Skeleton, Typography } from '@mui/material'
import { TypographyProps } from '@mui/material/Typography'

interface TextRowProps {
  label: string
  tooltip?: string
  labelVariant?: TypographyProps['variant']
  value: string
  valueVariant?: TypographyProps['variant']
  valueColor?: TypographyProps['color']
  subValue?: string
  subValueVariant?: TypographyProps['variant']
  icon?: ReactNode
  liner?: boolean
  isLoading?: boolean
}

export const TextRow: FC<TextRowProps> = ({
  label,
  tooltip,
  labelVariant = 'subtitle3',
  value,
  valueColor = 'text.primary',
  valueVariant = 'subtitle1alt',
  subValue,
  subValueVariant = 'subtitle3',
  icon,
  liner,
  isLoading,
}) => (
  <Box>
    <Box flexDirection='row' alignItems='center'>
      {/*@TODO add variant*/}
      <Typography variant={labelVariant} color='text.secondary'>
        {label}
      </Typography>
      <Box ml='7px'>{tooltip && <Tooltip>{tooltip}</Tooltip>}</Box>
    </Box>
    <Box
      mt={0.25}
      sx={{
        flexDirection: {
          xs: 'column',
          sm: liner ? 'row' : 'column',
        },
      }}
    >
      <Box flexDirection='row' alignItems='center'>
        {icon && <Box mr='6px'>{icon}</Box>}
        <Typography width='100%' variant={valueVariant} color={valueColor}>
          {isLoading ? <Skeleton width={liner ? '64px' : '140px'} variant='text' /> : value}
        </Typography>
      </Box>
      {/*@TODO add variant*/}
      {subValue && (
        <Typography
          sx={{
            ml: {
              sm: liner ? 1 : 0,
            },
          }}
          variant={subValueVariant}
          color='text.secondary'
        >
          {isLoading ? <Skeleton width='64px' variant='text' /> : subValue}
        </Typography>
      )}
    </Box>
  </Box>
)
