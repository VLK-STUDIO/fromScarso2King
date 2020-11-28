import { createAction } from '@reduxjs/toolkit';
import { RemoveNotificationTypes } from '../types';
import { RemoveNotificationPayload } from '../types/remove';

export const removeNotification = createAction<RemoveNotificationPayload>(RemoveNotificationTypes.SYNC);