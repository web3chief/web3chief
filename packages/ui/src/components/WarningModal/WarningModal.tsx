import { Stack, Typography } from '@mui/material'
import { Dialog } from '../Dialog'
import { ModalProps } from '../../hooks'
import { FC, ReactNode } from 'react'
import { Box } from '../Box'
import { DialogHeader } from '../Dialog/DialogHeader'
import { DialogContent } from '../Dialog/DialogContent'
import { useTranslation } from 'next-i18next'

interface WarningModalProps {
  text?: string
  buttons?: ReactNode[]
  title?: string
  contentVariant?: any
}

export const WarningModal: FC<Pick<ModalProps, 'isOpen' | 'closeModal'> & WarningModalProps> = ({
  closeModal,
  isOpen,
  text,
  buttons,
  title,
  contentVariant = 'subtitle1',
}) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader onClose={closeModal} title='' styles={{ position: 'absolute', right: 0 }} />
      <DialogContent sx={{ overflow: 'visible', mt: 10 }}>
        <Box position='relative' textAlign='center'>
          <Box
            top='-100px'
            width='180px'
            height='180px'
            position='absolute'
            left='50%'
            alignItems='center'
            justifyContent='center'
            sx={{
              background: 'url(/icons/WarningGradientIcon.svg)',
              backgroundSize: 'cover',
              transform: 'translateX(-50%)',
            }}
          ></Box>
          <Typography variant='modalTitle'>{title || 'Wrong Network'}</Typography>
          <Typography color='text.secondary' mt={2} variant={contentVariant}>
            {text || t('Please change Metamasks network to the Main network to continue!')}
          </Typography>
          <Stack mt={4} gap={1}>
            {buttons?.map((button, i) => (
              <Box key={i}>{button}</Box>
            ))}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
