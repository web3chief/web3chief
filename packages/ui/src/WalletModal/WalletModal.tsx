import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Button } from '@web3chief/ui/Button'
import { Box } from '@web3chief/ui/Box'
import { ModalProps } from '@web3chief/ui/hooks/useModal'
import { ConnectorConfig } from '@web3chief/sdk'
import { Dialog } from '@web3chief/ui/Dialog'
import { DialogHeader } from '@web3chief/ui/Dialog/DialogHeader'
import { DialogContent } from '@web3chief/ui/Dialog/DialogContent'
import { useTranslation } from 'next-i18next'
import { WALLET_ICON_BY_CONNECTOR } from '@web3chief/ui/config/wallet'

export type WalletModalProps = Pick<ModalProps, 'isOpen' | 'closeModal'> & {
  walletsData: ConnectorConfig[]
  onClickWallet: (walletData: ConnectorConfig) => void
}

export const WalletModal: FC<WalletModalProps> = ({
  closeModal,
  isOpen,
  walletsData,
  onClickWallet,
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader onClose={closeModal} title={t('Connect wallet')} />
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
