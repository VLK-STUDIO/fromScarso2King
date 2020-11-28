import { PayloadAction } from '@reduxjs/toolkit';
export enum InitMessagesTypes {
  SYNC = 'notification/init/sync',
}

export type InitMessagesPayload = {
  [key: string]: string;
};

export type InitMessages = PayloadAction<InitMessagesPayload, InitMessagesTypes.SYNC>;