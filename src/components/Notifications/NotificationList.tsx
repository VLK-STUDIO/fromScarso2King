import { Box, Text } from "rebass";
import React from "react";
import { useNotifications } from "../../state/notifications";
import { Notification } from "../../state/notifications/types/general";

type NotificationItemProps = {
  notification: Notification;
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const styles: React.CSSProperties = {
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const color = React.useMemo((): string => {
    return notification.type === "SUCCESS" ? "green" : "red";
  }, [notification.type]);

  return (
    <Box
      backgroundColor={color}
      width="100%"
      height="auto"
      padding="15px"
      style={styles}
    >
      <Text color="white">{notification.message}</Text>
    </Box>
  );
};

export const NotificationList: React.FC = () => {
  const notifications: Notification[] = useNotifications();

  const notificationList = React.useMemo(() => {
    return notifications
      .filter((notification) => notification.visible)
      .map((notification) => <NotificationItem notification={notification} />);
  }, [notifications]);

  const styles: React.CSSProperties = {
    position: "fixed",
    right: 20,
    top: 20,
    zIndex: 9999,
  };

  return (
    <Box style={styles} width="300px" height="auto">
      {notificationList}
    </Box>
  );
};
