import { createAction } from "@reduxjs/toolkit";
import {
  SendNotificationTypes,
  SendNotificationPayload,
  SendNotificationSyncPayload,
} from "../types";

export const sendNotification = createAction<SendNotificationPayload>(
  SendNotificationTypes.TRIGGER
);
export const sendNotificationSync = createAction<SendNotificationSyncPayload>(
  SendNotificationTypes.SYNC
);
