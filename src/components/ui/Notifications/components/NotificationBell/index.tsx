import { Bell } from 'lucide-react';

import Button from '../../../Button';
import { NotificationCount } from '../../types';
import UnreadQuantityBadge from '../UnreadQuantityBadge';

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
      {count ? (
        <UnreadQuantityBadge
          count={count}
          className={'absolute right-1 top-1'}
        />
      ) : null}
    </Button>
  );
};

export default NotificationBell;
