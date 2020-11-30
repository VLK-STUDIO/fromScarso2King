import { createAction } from '@reduxjs/toolkit';
import { InitNotificationsPayload, InitNotificationsTypes } from '../types/init';

export const initNotifications = createAction<InitNotificationsPayload>(InitNotificationsTypes.SYNC);

