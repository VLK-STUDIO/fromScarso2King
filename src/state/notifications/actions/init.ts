import { createAction } from "@reduxjs/toolkit";
import { InitNotificationsPayload, InitNotificationsTypes } from "../types";

export const initNotifications = createAction<InitNotificationsPayload>(
  InitNotificationsTypes.SYNC
);
