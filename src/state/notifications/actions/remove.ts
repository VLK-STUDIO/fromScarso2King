import { createAction } from "@reduxjs/toolkit";
import { RemoveNotificationTypes, RemoveNotificationPayload } from "../types";

export const removeNotification = createAction<RemoveNotificationPayload>(
  RemoveNotificationTypes.SYNC
);
