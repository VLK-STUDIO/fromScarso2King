import { useSelector } from "react-redux";
import { getNotificationList } from "../selectors";
import { Notification } from "../types";

export const useNotifications = () => {
  const notifications: Notification[] = useSelector(getNotificationList);

  return notifications;
};
