import classNames from 'classnames';

import { NotificationType } from '../../types';
import UnreadBadge from '../UnreadBadge';
import Avatar from './components/Avatar';

interface MessageProps {
  content: string;
  date: string;
  notificationType: NotificationType;
  isUnread: boolean;
  onRead?: () => void;
}

const Message = (props: MessageProps) => {
  const { content, date, notificationType, isUnread, onRead } = props;

  return (
    <div
      className={classNames('relative flex w-full gap-4 rounded-lg p-4', {
        'bg-gray-100': isUnread,
        'bg-white': !isUnread
      })}
    >
      <Avatar notificationType={notificationType} />
      <div className={'flex w-full flex-col gap-1 pr-10'}>
        <div className={'line-clamp-2 text-sm'}>{content}</div>
        <div className={'text-sm font-semibold text-gray-500'}>{date}</div>
      </div>
      {isUnread && (
        <UnreadBadge
          className={'absolute right-2 top-2'}
          onClick={onRead}
        />
      )}
    </div>
  );
};

export default Message;
