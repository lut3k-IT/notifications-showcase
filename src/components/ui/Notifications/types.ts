export type NotificationCount = number;

export type NotificationType = 'request' | 'statusChange' | 'newFeature' | 'deleted';

export type NotificationStatus = 'read' | 'unread';

export type NotificationTab = 'all' | 'unread';

export type NotificationTimeForSelect = 'now' | 'day' | '2days' | 'week' | 'month';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: string;
  status: NotificationStatus;
}
