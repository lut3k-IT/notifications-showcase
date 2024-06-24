import { NotificationCount } from '../../../constants/types';

interface NotificationBadgeProps {
  count: NotificationCount;
}

const NotificationBadge = (props: NotificationBadgeProps) => {
  const { count } = props;

  return (
    <div
      className={
        'absolute top-1 right-1 w-min h-4 min-w-4 bg-danger-500 rounded-full text-xs text-white flex-center'
      }
    >
      {count}
    </div>
  );
};

export default NotificationBadge;
