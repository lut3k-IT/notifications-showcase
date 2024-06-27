import { useMemo, useState } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useSortedNotifications from '../../hooks/useSortedNotifications';
import Alert from '../Alert';
import AllReadButton from './components/AllReadButton';
import Message from './components/Message';
import MessagesContainer from './components/MessagesContainer';
import TabButton from './components/TabButton';
import { handleMarkAllAsRead, handleMarkAsRead } from './helpers';
import { NotificationTab } from './types';

const Notifications = () => {
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
        <AllReadButton
          hasUnread={unreadNotifications.length > 0}
          onClick={() => handleMarkAllAsRead(dispatch)}
        />
      </div>
      <MessagesContainer className={'max-h-96'}>
        {notificationsToRender.map((notification) => (
          <Message
            key={notification.id}
            notification={notification}
            onRead={() => handleMarkAsRead(dispatch, notification.id)}
          />
        ))}
        {!hasNotifications && <Alert withoutIcon>You don't have any notifications</Alert>}
      </MessagesContainer>
    </div>
  );
};

export default Notifications;
