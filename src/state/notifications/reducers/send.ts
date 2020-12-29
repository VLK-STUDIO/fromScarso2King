import { NotificationState, SendNotificationSync } from "../types";

export const sendNotificationSyncCase = (
  state: NotificationState,
  action: SendNotificationSync
): NotificationState => ({
  ...state,
  notifications: {
    ...state.notifications,
    [action.payload.id]: {
      ...(state.notifications?.[action.payload.id] || {}),
      ...action.payload,
      visible: true,
    },
  },
});
