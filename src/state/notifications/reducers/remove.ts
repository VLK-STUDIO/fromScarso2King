import { RemoveNotification, NotificationState } from "../types";

export const removeNotificationCase = (
  state: NotificationState,
  action: RemoveNotification
): NotificationState => ({
  ...state,
  notifications: {
    ...state.notifications,
    [action.payload.id]: {
      ...(state.notifications?.[action.payload.id] || {}),
      visible: false,
    },
  },
});
