import { useSelector } from 'react-redux';
import { getNotificationList } from './selectors/general';
import { Notification } from './types/general';

export const useNotifications = () => {
  const notification: Notification[] = useSelector(getNotificationList);

  return notification;
}