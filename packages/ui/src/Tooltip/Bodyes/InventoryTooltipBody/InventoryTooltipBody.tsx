import * as React from 'react'
import { FC } from 'react'
import { Box, BoxProps, Typography } from '@mui/material'
import { Token } from 'types'
import PropertyInfo from 'containers/marketplace/@web3chief/ui/PropertyInfo'
import { useTranslation } from 'next-i18next'

type TooltipItemProps = BoxProps & {
  title: string
}

export const TooltipItem: FC<TooltipItemProps> = props => (
  <Box {...props}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb='4px'>
        <Typography variant='subtitle4alt' color='text.secondary'>
          {props.title}
        </Typography>
      </Box>
      {props.children}
    </Box>
  </Box>
)

export const InventoryTooltipBody: FC<Token> = ({
  name,
  metaPrepared,
  standard,
  description,
  properties,
}) => {
  const { t } = useTranslation('common')

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.secondary',
        borderColor: 'menu.bg',
        boxShadow:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
        width: '100%',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          padding: '12px',
          marginBottom: '16px',
          borderBottom: '1px solid rgba(255,255,255, 0.2)',
        }}
      >
        <Typography variant='counter' sx={{ textTransform: 'capitalize' }}>
          {metaPrepared.name || name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 12px 12px 12px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '16px',
          }}
        >
          <PropertyInfo isNeedSpacing={false} data={properties} isNeedCard={false} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography variant='subtitle4alt' color='text.secondary'>
            {description ||
              t('ERC-%standard% — Non-Fungible Token Standard', {
                returnObjects: true,
                standard,
              })}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
