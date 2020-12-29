import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Notification } from "./general";

export enum SendNotificationTypes {
  TRIGGER = "notification/send",
  SYNC = "notification/send/sync",
}

export type SendNotificationPayload = Action<any> | PayloadAction<any>;

export type SendNotificationSyncPayload = Omit<Notification, "visible">;

export type SendNotification = PayloadAction<
  SendNotificationPayload,
  SendNotificationTypes.TRIGGER
>;
export type SendNotificationSync = PayloadAction<
  SendNotificationSyncPayload,
  SendNotificationTypes.SYNC
>;
