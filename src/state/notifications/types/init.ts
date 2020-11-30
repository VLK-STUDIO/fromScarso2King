import { PayloadAction } from '@reduxjs/toolkit';
export enum InitNotificationsTypes {
  SYNC = 'notification/init/sync',
}

export type InitNotificationsPayload = {
  [key: string]: string;
};

export type InitMessages = PayloadAction<InitNotificationsPayload, InitNotificationsTypes.SYNC>;