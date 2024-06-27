import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { getNotificationName, handleMarkAsRead } from '../../../features/notifications/helpers';
import { INotification } from '../../../features/notifications/types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { RoutePath } from '../../../router/enums';
import { getTimestamp } from '../../../utils/dateHelpers';
import NotificationAvatar from '../NotificationAvatar';
import UnreadBadge from '../UnreadBadge';

interface NotificationMessageProps {
  notification: INotification;
  onRead?: () => void;
}

const NotificationMessage = (props: NotificationMessageProps) => {
  const { notification, onRead } = props;
  const { id, type, message, timestamp, status } = notification;

  const isUnread = status === 'unread';
  const dispatch = useAppDispatch();

  return (
    <Link
      className={classNames('relative flex w-full gap-4 rounded-lg p-4 transition-colors hover:bg-primary-100', {
        'bg-gray-100': isUnread,
        'bg-white': !isUnread
      })}
      to={RoutePath.NOTIFICATION + `/${id}`}
      onClick={() => handleMarkAsRead(dispatch, id)}
    >
      <NotificationAvatar notificationType={type} />
      <div className={'flex w-full flex-col gap-0.5 pr-10'}>
        <div className={'line-clamp-2'}>{message || getNotificationName(notification.type)}</div>
        <div className={'text-sm font-semibold text-gray-500'}>{getTimestamp(timestamp)}</div>
      </div>
      {isUnread && (
        <UnreadBadge
          className={'absolute right-2 top-2'}
          onClick={onRead}
        />
      )}
    </Link>
  );
};

export default NotificationMessage;
