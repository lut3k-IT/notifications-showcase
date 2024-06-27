import useAppDispatch from '../../hooks/useAppDispatch';
import { NotificationName } from './enums';
import { markAllNotificationsAsRead, markNotificationAsRead } from './notificationsSlice';
import { Notification } from './types';

export const getNotificationName = (type: Notification['type']) => {
  switch (type) {
    case 'request':
      return NotificationName.REQUEST;
    case 'statusChange':
      return NotificationName.STATUS_CHANGE;
    case 'newFeature':
      return NotificationName.NEW_FEATURE;
    case 'deleted':
      return NotificationName.DELETED;
    default:
      return 'Notification';
  }
};

export const handleMarkAsRead = (dispatch: ReturnType<typeof useAppDispatch>, id: Notification['id']) => {
  dispatch(markNotificationAsRead(id));
};

export const handleMarkAllAsRead = (dispatch: ReturnType<typeof useAppDispatch>) => {
  dispatch(markAllNotificationsAsRead());
};
