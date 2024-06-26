import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { RoutePath } from '../../../../../router/enums';
import { getTimestamp } from '../../../../../utils/dateHelpers';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { markNotificationAsRead } from '../../notificationsSlice';
import { Notification } from '../../types';
import UnreadBadge from '../UnreadBadge';
import Avatar from './components/Avatar';

interface MessageProps {
  notification: Notification;
  onRead?: () => void;
}

const Message = (props: MessageProps) => {
  const { notification, onRead } = props;
  const { id, type, message, timestamp, status } = notification;
  const isUnread = status === 'unread';

  const dispatch = useAppDispatch();

  const handleMarkAsRead = (id: Notification['id']) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <Link
      className={classNames('relative flex w-full gap-4 rounded-lg p-4 transition-colors hover:bg-primary-100', {
        'bg-gray-100': isUnread,
        'bg-white': !isUnread
      })}
      to={RoutePath.NOTIFICATION + `/${id}`}
      onClick={() => handleMarkAsRead(id)}
    >
      <Avatar notificationType={type} />
      <div className={'flex w-full flex-col gap-1 pr-10'}>
        <div className={'line-clamp-2 text-sm'}>{message}</div>
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

export default Message;
