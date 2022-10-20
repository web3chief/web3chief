import { Link, Typography } from '@mui/material'
import { Box } from '@web3chief/ui/Box'
import { Dialog } from '@web3chief/ui/Dialog'
import { ModalProps } from '@web3chief/ui/hooks/useModal'
import { FC } from 'react'
import { Button } from '@web3chief/ui/Button'
import { MetamaskIcon } from '@web3chief/ui/Icon/MetamaskIcon'
import { DialogContent } from '@web3chief/ui/Dialog/DialogContent'
import { DialogHeader } from '@web3chief/ui/Dialog/DialogHeader'
import { useTranslation } from 'next-i18next'

const dataLinks = [
  { name: 'Chrome', link: '/' },
  { name: 'Firefox', link: '/' },
  { name: 'Opera', link: '/' },
]

export const NonConnectorModal: FC<Pick<ModalProps, 'isOpen' | 'closeModal'>> = ({
  closeModal,
  isOpen,
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader title='' onClose={closeModal} />
      <DialogContent>
        <Box textAlign='center' alignItems='center'>
          <MetamaskIcon fontSize='xxlarge' />
          <Typography variant='modalTitle' mt={2}>
            {t('Metamask is not installed')}
          </Typography>
          <Typography mt={2} variant='subtitle1' color='text.secondary'>
            {t('To continue please install Metamask extension in your browser:')}
          </Typography>
          <Box width='100%' flexDirection='row' gap={1} mt={4}>
            {dataLinks.map(button => (
              <Link
                href={button.link}
                width='100%'
                key={button.name}
                underline='none'
                variant='buttonSmall'
              >
                <Button fullWidth>{button.name}</Button>
              </Link>
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
