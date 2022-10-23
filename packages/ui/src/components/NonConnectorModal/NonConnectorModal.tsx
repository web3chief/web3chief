import { Link, Typography } from '@mui/material'
import { Box } from '../Box'
import { Dialog } from '../Dialog'
import { ModalProps } from '../../hooks/useModal'
import { FC } from 'react'
import { Button } from '../Button'
import { MetamaskIcon } from '../Icon/MetamaskIcon'
import { DialogContent } from '../Dialog/DialogContent'
import { DialogHeader } from '../Dialog/DialogHeader'

export type NonConnectorModalProps = Pick<ModalProps, 'isOpen' | 'closeModal'> &
{
  texts?: {
    walletNotInstalled?: string, actionToInstall?: string
  },
  links: { name: string, link: string }[]
}

export const NonConnectorModal: FC<NonConnectorModalProps> = ({
  closeModal,
  isOpen,
  texts,
  links
}) => {
  const { walletNotInstalled, actionToInstall } = texts || {}

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader title='' onClose={closeModal} />
      <DialogContent>
        <Box textAlign='center' alignItems='center'>
          <MetamaskIcon fontSize='xxlarge' />
          <Typography variant='modalTitle' mt={2}>
            {walletNotInstalled || 'Metamask is not installed'}
          </Typography>
          <Typography mt={2} variant='subtitle1' color='text.secondary'>
            {actionToInstall || 'To continue please install Metamask extension in your browser:'}
          </Typography>
          <Box width='100%' flexDirection='row' gap={1} mt={4}>
            {links.map(button => (
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
