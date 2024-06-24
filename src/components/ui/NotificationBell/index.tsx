import { Bell } from 'lucide-react';

import { NotificationCount } from '../../../constants/types';
import Button from '../Button';
import NotificationBadge from '../NotificationBadge';

interface NotificationBellProps {
  count?: NotificationCount;
}

const NotificationBell = (props: NotificationBellProps) => {
  const { count } = props;

  return (
    <Button variant={'icon'} buttonClassNames={'relative'}>
      <Bell className={'text-gray-400'} />
      {count && <NotificationBadge count={count} />}
    </Button>
  );
};

export default NotificationBell;
