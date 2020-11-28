import { NotificationState } from '../types/general';
import { SendNotificationSync } from '../types/send';

export const sendNotificationSyncCase = (
  state: NotificationState,
  action: SendNotificationSync,
): NotificationState => ({
  ...state,
  notifications: {
    ...state.notifications,
    [action.payload.id]: {
      ...(state?.notifications?.[action.payload.id] || {}),
      ...action.payload,
      visible: true,
    },
  }
});
