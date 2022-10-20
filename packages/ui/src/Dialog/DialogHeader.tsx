import { SxProps, Typography } from '@mui/material'
import { CloseIcon } from '@web3chief/ui/Icon/CloseIcon'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { FC } from 'react'
import { Box } from '@web3chief/ui/Box'
import { ChevronLeftIcon } from '@web3chief/ui/Icon/ChevronLeftIcon'
import { Skeleton } from '@web3chief/ui/Skeleton'

export type DialogHeaderProps = {
  title: string
  onClose?: IconButtonProps['onClick']
  onBack?: IconButtonProps['onClick']
  styles?: SxProps
  loading?: boolean
}

export const DialogHeader: FC<DialogHeaderProps> = ({
  title,
  onClose,
  onBack,
  children,
  styles,
  loading,
}) => (
  <Box
    top={0}
    position='sticky'
    px={{
      xs: 1.5,
      sm: 2,
      md: 5,
    }}
    pb={{
      xs: 1,
      md: 2,
    }}
    pt={{
      xs: 1,
      md: 4,
    }}
    sx={styles}
    bgcolor='background.secondary'
    zIndex={100}
    borderRadius='16px'
  >
    <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Box flexDirection='row' alignItems='center'>
        {onBack && (
          <IconButton
            aria-label='close'
            onClick={onBack}
            sx={{
              mr: 2,
              height: '32px',
              width: '32px',
              borderRadius: 0,
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'text.secondary',
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}
        {loading ? (
          <Skeleton width={208} height={40} />
        ) : (
          <Typography variant='modalTitle'>{title}</Typography>
        )}
      </Box>
      <IconButton
        aria-label='close'
        onClick={onClose}
        sx={{
          height: '32px',
          width: '32px',
          borderRadius: 0,
          background: 'rgba(255, 255, 255, 0.05)',
          color: 'text.secondary',
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
    {children}
  </Box>
)
