import React, { FC, ReactNode } from 'react'
import { Box } from '../Box'
import { Stack, Typography } from '@mui/material'
import { Button } from '../Button'
import { Dialog } from '../Dialog'
import Link from '@mui/material/Link'
import { BinanceChainIcon } from '../Icon/'
import { DialogHeader } from '../Dialog/DialogHeader'
import { DialogContent } from '../DialogContent'
import { PancakeIcon } from '../Icon'
import { useTranslation } from 'next-i18next'

interface BuyTokenModalProps {
  isOpen: boolean
  closeModal: () => void
  buttons?: {
    icon: ReactNode
    link: string
    name: string
  }[]
  links?: {
    name: string
    link: string
  }[]
}

const linkList = [
  {
    name: 'Binance',
    link: 'https://www.binance.com/en/buy-BNB',
  },
]

const buttonList = [
  {
    icon: <PancakeIcon />,
    name: 'buy token on PancakeSwap',
    link: 'https://pancakeswap.finance/swap',
  },
]

export const BuyTokenModal: FC<BuyTokenModalProps> = ({
  closeModal,
  isOpen,
  buttons = buttonList,
  links = linkList,
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader title={t('BUY NOW!')} onClose={closeModal} />
      <DialogContent>
        <Box mt={2}>
          <Stack spacing={1} paddingBottom={4} borderBottom='1px solid rgba(255, 255, 255, 0.12)'>
            {buttons.map(button => (
              <Box bgcolor='alpha.5' key={button.name}>
                <Button
                  size='large'
                  variant='base'
                  startIcon={button.icon}
                  onClick={() => {
                    window.open(button.link, '_blank')
                  }}
                >
                  <Box width='100%' textAlign='center'>
                    {button.name}
                  </Box>
                </Button>
              </Box>
            ))}
            <Box pt={2} width='fit-content'>
              <Link href='' variant='subtitle2'>
                {t('How to buy TOKEN')}
              </Link>
            </Box>
          </Stack>
          <Box paddingBottom={2}>
            <Typography mt={2} variant='subtitle2' color='text.secondary'>
              {t(
                'All related gas fees are paid in BNB. The amount depends on the speed of the transaction.',
              )}
            </Typography>
          </Box>
        </Box>
        <Box alignItems='center' flexDirection='row'>
          <BinanceChainIcon fontSize='small' />{' '}
          <Typography variant='subtitle2' color='text.secondary' ml={1}>
            {t('Buy BNB on')}
          </Typography>
          {links.map(link => (
            <Link key={link.name} href={link.link} variant='subtitle2' ml={1}>
              {link.name}
            </Link>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}
