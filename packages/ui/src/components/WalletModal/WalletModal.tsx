import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Button } from '../Button'
import { Box } from '../Box'
import { ModalProps } from '../../hooks/useModal'
import { ConnectorConfig } from '../../../../sdk'
import { Dialog } from '../Dialog'
import { DialogHeader } from '../Dialog/DialogHeader'
import { DialogContent } from '../Dialog/DialogContent'
import { useTranslation } from 'next-i18next'
import { WALLET_ICON_BY_CONNECTOR } from '../../config/wallet'

export type WalletModalProps = Pick<ModalProps, 'isOpen' | 'closeModal'> & {
  walletsData: ConnectorConfig[]
  onClickWallet: (walletData: ConnectorConfig) => void
  title?: string
}

export const WalletModal: FC<WalletModalProps> = ({
  closeModal,
  isOpen,
  walletsData,
  onClickWallet,
  title
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader onClose={closeModal} title={title || t('Connect wallet')} />
      <DialogContent>
        <Stack spacing={1}>
          {walletsData.map(data => {
            const Icon = WALLET_ICON_BY_CONNECTOR[data.type]

            return (
              <Box borderRadius='8px' bgcolor='alpha.5' key={data.title}>
                <Button variant='base' size='large' onClick={() => onClickWallet(data)}>
                  <Box
                    sx={{ '& svg': { width: '24px', height: '24px' } }}
                    width='100%'
                    alignItems='center'
                    flexDirection='row'
                  >
                    <Icon />
                    <Box textAlign='center' width='100%'>
                      <Typography variant='buttonBig' color='text.primary'>
                        {data.title}
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Box>
            )
          })}
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
