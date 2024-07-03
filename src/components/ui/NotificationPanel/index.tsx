import { useMemo, useState } from 'react';

import { setAllNotificationsAsRead, setNotificationAsRead } from '../../../features/notifications/helpers';
import { NotificationTab } from '../../../features/notifications/types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import useSortedNotifications from '../../../hooks/useSortedNotifications';
import Alert from '../Alert';
import AllReadButton from '../AllReadButton';
import NotificationMessage from '../NotificationMessage';
import NotificationsContainer from '../NotificationsContainer';
import TabButton from '../TabButton';
import UnreadQuantityBadge from '../UnreadQuantityBadge';

export default function NotificationPanel() {
  const [tab, setTab] = useState<NotificationTab>('all');
  const dispatch = useAppDispatch();

  const notifications = useSortedNotifications();
  const hasNotifications = notifications.length > 0;

  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const hasUnreadNotifications = unreadNotifications.length > 0;

  const notificationsToRender = tab === 'all' ? notifications : unreadNotifications;

  return (
    <div className={'flex w-96 max-w-full flex-col gap-4 p-2'}>
      <h2 className={'relative w-max'}>
        Notifications
        {hasUnreadNotifications && (
          <UnreadQuantityBadge
            count={unreadNotifications.length}
            className={'absolute -right-5 top-0'}
          />
        )}
      </h2>
      <div className={'flex flex-wrap gap-2'}>
        <TabButton
          isActive={tab === 'all'}
          onClick={() => setTab('all')}
          role={'tab'}
          aria-selected={tab === 'all'}
        >
          All Notifications
        </TabButton>
        <TabButton
          isActive={tab === 'unread'}
          onClick={() => setTab('unread')}
          role={'tab'}
          aria-selected={tab === 'unread'}
        >
          Unread Notifications
        </TabButton>
        {hasUnreadNotifications && <AllReadButton onClick={() => setAllNotificationsAsRead(dispatch)} />}
      </div>
      <NotificationsContainer className={'max-h-96'}>
        {notificationsToRender.map((notification) => (
          <NotificationMessage
            key={notification.id}
            notification={notification}
            onRead={() => setNotificationAsRead(dispatch, notification.id)}
          />
        ))}
        {!hasNotifications && tab === 'all' && <Alert withoutIcon>You don&apos;t have any notifications</Alert>}
        {!hasUnreadNotifications && tab === 'unread' && (
          <Alert withoutIcon>You don&apos;t have any unread notifications</Alert>
        )}
      </NotificationsContainer>
    </div>
  );
}
