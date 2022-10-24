import { copyToClipboard } from '../utils/copyToClipboard'
import { useStore } from '@nimel/directorr-react'
import { NotificationStore } from '../components/Notification/NotificationStore'

export function useCopyClipboard({noticeText}:{noticeText?: string}) {
  const { open } = useStore(NotificationStore)

  return {
    handleCopy: (copyText = '') => {
      copyToClipboard(copyText)
      open('success', noticeText||'Text copied')
    },
  }
}
