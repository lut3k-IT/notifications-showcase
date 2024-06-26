import { NotificationCount } from '../../types';

interface NotificationBadgeProps {
  count: NotificationCount;
}

const NotificationBadge = (props: NotificationBadgeProps) => {
  const { count } = props;

  return (
    <div
      className={'flex-center absolute right-1 top-1 h-4 w-min min-w-4 rounded-full bg-danger-500 text-xs text-white'}
    >
      {count}
    </div>
  );
};

export default NotificationBadge;
