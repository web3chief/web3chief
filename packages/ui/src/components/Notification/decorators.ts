import { createActionAndEffect } from '@nimel/directorr'
import { OptionsObject } from '@web3chief/ui/Snackbar'

export type NotificationPayload = OptionsObject

export const [actionNotification, effectNotification] =
  createActionAndEffect<NotificationPayload>('NOTIFICATION')
