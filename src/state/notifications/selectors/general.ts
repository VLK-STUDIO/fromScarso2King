import { AppState } from "../../types";
import { createSelector } from "@reduxjs/toolkit";
import { NotificationState, Notification } from "../types";

const getNotificationState = (state: AppState) => state.notification;

export const getMessages = createSelector(
  getNotificationState,
  (notificationState) => notificationState.messages
);

export const getNotifications = createSelector(
  getNotificationState,
  (notificationState): NotificationState["notifications"] =>
    notificationState.notifications
);

export const getNotificationList = createSelector(
  getNotifications,
  (notifications): Notification[] => Object.values(notifications)
);

export const getNotificationById = createSelector(
  getNotifications,
  (_: AppState, id: string) => id,
  (notifications, id) => notifications[id]
);
