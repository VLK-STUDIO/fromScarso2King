import { PayloadAction } from "@reduxjs/toolkit";

export enum RemoveNotificationTypes {
  SYNC = "notification/remove/sync",
}

export type RemoveNotificationPayload = {
  id: string;
};

export type RemoveNotification = PayloadAction<
  RemoveNotificationPayload,
  RemoveNotificationTypes.SYNC
>;
