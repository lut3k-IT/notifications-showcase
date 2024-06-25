export type NotificationCount = number;

export type NotificationType =
  | 'request'
  | 'statusChange'
  | 'newFeature'
  | 'deleted';

export type NotificationStatus = 'read' | 'unread';

export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
  timestamp: Date;
  status: NotificationStatus;
}
