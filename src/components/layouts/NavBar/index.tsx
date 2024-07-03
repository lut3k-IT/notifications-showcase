import { useMemo } from 'react';

import useSortedNotifications from '../../../hooks/useSortedNotifications';
import { RouteName, RoutePath } from '../../../router/enums';
import Button from '../../ui/Button';
import NotificationBell from '../../ui/NotificationBell';
import NotificationPanel from '../../ui/NotificationPanel';
import Popover from '../../ui/Popover/index';

export default function NavBar() {
  const notifications = useSortedNotifications();
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const unreadQuantity = unreadNotifications.length;

  return (
    <div className={'fixed z-10 flex h-navbar w-full items-center justify-between border-b bg-white pr-page'}>
      <nav className={'flex h-full [&>*]:h-full'}>
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.HOME}
        >
          {RouteName.HOME}
        </Button>
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.CREATOR}
        >
          {RouteName.CREATOR}
        </Button>
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.ALL_NOTIFICATIONS}
        >
          {RouteName.ALL_NOTIFICATIONS}
        </Button>
      </nav>
      <Popover
        trigger={<NotificationBell count={unreadQuantity} />}
        content={<NotificationPanel />}
        placement={'bottom-end'}
      />
    </div>
  );
}
