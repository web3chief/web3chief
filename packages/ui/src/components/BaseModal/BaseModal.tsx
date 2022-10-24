import { Typography } from '@mui/material'
import { Dialog } from '../Dialog'
import { ModalProps } from '../../hooks/useModal'
import { FC } from 'react'
import { DialogHeader } from '../Dialog/DialogHeader'
import { DialogContent } from '../Dialog/DialogContent'
import { Button } from '../Button'

export interface BaseModalProps {
  text: string
  textButton: string
  title: string
  onClick: () => void
  loadingButton?: boolean
}

export const BaseModal: FC<Pick<ModalProps, 'isOpen' | 'closeModal'> & BaseModalProps> = ({
  closeModal,
  isOpen,
  text,
  textButton,
  title,
  onClick,
  loadingButton,
}) => (
  <Dialog onClose={closeModal} open={isOpen}>
    <DialogHeader onClose={closeModal} title={title} />
    <DialogContent>
      <Typography color='text.secondary' variant='subtitle1' mb={4}>
        {text}
      </Typography>
      <Button onClick={onClick} loading={loadingButton} variant='contained' fullWidth size='large'>
        {textButton}
      </Button>
    </DialogContent>
  </Dialog>
)

export default BaseModal;