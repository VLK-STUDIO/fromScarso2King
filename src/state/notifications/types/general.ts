export type Messages = {
  [key: string]: string;
};

export enum NotificationType {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export type Notification = {
  type: NotificationType;
  message: string;
  id: string;
  visible: boolean;
};

export type NotificationState = {
  messages: Messages;
  notifications: {
    [key: string]: Notification;
  };
};
