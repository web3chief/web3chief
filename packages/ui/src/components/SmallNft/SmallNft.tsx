import React from 'react'
import { Box } from '../Box'
import { Tooltip } from '../Tooltip'
import { Typography } from '@mui/material'
import { ImageFallback } from '../Image'
import { useTranslation } from 'next-i18next'

export interface SmallNftProps {
  standard: string
  image: string
  description?: string
}
const SmallNft: React.FC<SmallNftProps> = ({ standard, image, description }) => {
  const { t } = useTranslation('common')

  return (
    <Box
      position='relative'
      bgcolor='alpha.4'
      border='1px solid'
      borderColor='alpha.10'
      borderRadius='8px'
      width='100%'
    >
      <Box
        alignItems='center'
        flexDirection='row'
        position='absolute'
        left={16}
        top={12}
        zIndex={2}
      >
        <Tooltip fontSize='xxsmall'>
          {description || t(
            'ERC-1155 — а standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).',
          )}
        </Tooltip>
        <Typography ml={0.8} color='text.primary' variant='subtitle4alt'>
          {standard}
        </Typography>
      </Box>
      <Box
        position='relative'
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
        p='44px'
        width='100%'
        height='100%'
        sx={{
          '&::after': {
            content: '""',
            position: 'absolute',
            display: 'block',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
          },
        }}
      >
        <Box zIndex={1} position='relative' width='100%' alignItems='center'>
          <ImageFallback src={image} width={260} height={260} />
        </Box>
      </Box>
    </Box>
  )
}
export default SmallNft
