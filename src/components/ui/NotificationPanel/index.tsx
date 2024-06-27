import { useMemo, useState } from 'react';

import { handleMarkAllAsRead, handleMarkAsRead } from '../../../features/notifications/helpers';
import { NotificationTab } from '../../../features/notifications/types';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import useSortedNotifications from '../../../hooks/useSortedNotifications';
import Alert from '../Alert';
import AllReadButton from '../AllReadButton';
import NotificationMessage from '../NotificationMessage';
import NotificationsContainer from '../NotificationsContainer';
import TabButton from '../TabButton';

const NotificationPanel = () => {
  const [tab, setTab] = useState<NotificationTab>('all');
  const dispatch = useAppDispatch();

  const notifications = useSortedNotifications();
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const notificationsToRender = tab === 'all' ? notifications : unreadNotifications;
  const hasNotifications = notifications.length > 0;

  return (
    <div className={'flex flex-col gap-6'}>
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
        {hasNotifications && <AllReadButton onClick={() => handleMarkAllAsRead(dispatch)} />}
      </div>
      <NotificationsContainer className={'max-h-96'}>
        {notificationsToRender.map((notification) => (
          <NotificationMessage
            key={notification.id}
            notification={notification}
            onRead={() => handleMarkAsRead(dispatch, notification.id)}
          />
        ))}
        {!hasNotifications && <Alert withoutIcon>You don&apos;t have any notifications</Alert>}
      </NotificationsContainer>
    </div>
  );
};

export default NotificationPanel;
