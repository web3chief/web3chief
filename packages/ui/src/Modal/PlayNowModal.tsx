import React, { FC, ReactNode } from 'react'
import { Box } from '@web3chief/ui/Box'
import { Stack, Typography } from '@mui/material'
import { Button } from '@web3chief/ui/Button'
import { Dialog } from '@web3chief/ui/Dialog'
import { DialogHeader } from '@web3chief/ui/Dialog/DialogHeader'
import { DialogContent } from '@web3chief/ui/Dialog/DialogContent'
import { Tooltip } from '@web3chief/ui/Tooltip'
import { DefaultTooltipBody } from '@web3chief/ui/Tooltip/Bodyes/DefaultTooltipBody'
import { useTranslation } from 'next-i18next'

interface ButtonPlayNowModalProps {
  icon: ReactNode
  link?: string
  name: string
  comingSoon?: boolean
}

interface PlayNowModalProps {
  isOpen: boolean
  closeModal: () => void
  buttons: ButtonPlayNowModalProps[]
}

const ButtonModal = (button: ButtonPlayNowModalProps) => (
  <Button
    fullWidth
    size='large'
    onClick={
      !button.comingSoon
        ? () => {
            window.open(button.link, '_blank')
          }
        : () => null
    }
  >
    <Box flexDirection='row' justifyContent='center' width='100%' alignItems='center'>
      {button.icon}
      <Typography ml={1.5} variant='buttonBig'>
        {button.name}
      </Typography>
    </Box>
  </Button>
)

export const PlayNowModal: FC<PlayNowModalProps> = ({ closeModal, isOpen, buttons }) => {
  const { t } = useTranslation('common')

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogHeader onClose={closeModal} title={`${t('Play now')}!`} />
      <DialogContent>
        <Box>
          <Typography variant='subtitle1' color='text.secondary'>
            {t('To play the game download the app.')}
          </Typography>
        </Box>
        <Box mt={4} paddingBottom={4}>
          <Stack spacing={1}>
            {buttons.map(button =>
              button.comingSoon ? (
                <Tooltip
                  key={button.name}
                  fontSize='medium'
                  label={<ButtonModal {...button} />}
                  followCursor
                >
                  <DefaultTooltipBody
                    title={`${t('Coming Soon')}!`}
                    variant='menu'
                    boxProps={{
                      padding: '18px 16px',
                      bgcolor: 'menu.bgOpacity',
                      boxShadow: 'none',
                    }}
                  />
                </Tooltip>
              ) : (
                <ButtonModal key={button.name} {...button} />
              ),
            )}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
