import { createActionAndEffect } from '@nimel/directorr'
import { OptionsObject } from '../Snackbar'

export type NotificationPayload = OptionsObject

export const [actionNotification, effectNotification] =
  createActionAndEffect<NotificationPayload>('NOTIFICATION')
