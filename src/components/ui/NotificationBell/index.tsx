import { Bell } from 'lucide-react';

import Button from '../Button';
import NotificationBadge from '../Notifications/components/UnreadQuantityBadge';
import { NotificationCount } from '../Notifications/types';

interface NotificationBellProps extends React.HTMLAttributes<HTMLButtonElement> {
  count?: NotificationCount;
}

const NotificationBell = (props: NotificationBellProps) => {
  const { count, ...rest } = props;

  return (
    <Button
      variant={'icon'}
      className={'relative'}
      {...rest}
    >
      <Bell className={'text-gray-500'} />
      {count && <NotificationBadge count={count} />}
    </Button>
  );
};

export default NotificationBell;