import { NotificationType } from '../../types';
import UnreadBadge from '../UnreadBadge';
import Avatar from './components/Avatar';

interface MessageProps {
  content: string;
  date: string;
  notificationType: NotificationType;
  isUnread?: boolean;
  onRead?: () => void;
}

// @todo - clear base notification type

const Message = (props: MessageProps) => {
  const {
    content,
    date,
    notificationType = 'newFeature',
    isUnread = true,
    onRead,
  } = props;

  return (
    <div className={'p-4 w-full flex gap-4 rounded-lg bg-gray-100 relative'}>
      <Avatar notificationType={notificationType} />
      <div className={'flex flex-col gap-1 pr-10 w-full'}>
        <div className={'line-clamp-2 text-sm'}>{content}</div>
        <div className={'text-gray-500 text-sm font-semibold'}>{date}</div>
      </div>
      {isUnread && (
        <UnreadBadge className={'absolute top-2 right-2'} onClick={onRead} />
      )}
    </div>
  );
};

export default Message;
