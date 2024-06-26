import { useState } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import AllReadButton from './components/AllReadButton';
import Message from './components/Message';
import MessagesContainer from './components/MessagesContainer';
import TabButton from './components/TabButton';
import { markAllNotificationsAsRead, markNotificationAsRead } from './notificationsSlice';
import { Notification, NotificationTab } from './types';

const Notifications = () => {
  const [tab, setTab] = useState<NotificationTab>('all');

  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = notifications.filter((notification) => notification.status === 'unread');
  const notificationsToRender = tab === 'all' ? notifications : unreadNotifications;

  const handleMarkNotificationAsRead = (id: Notification['id']) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleMarkAllNotificationsAsRead = () => {
    dispatch(markAllNotificationsAsRead());
  };

  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex flex-wrap gap-2'}>
        <TabButton
          isActive={tab === 'all'}
          onClick={() => setTab('all')}
        >
          All Notifications
        </TabButton>
        <TabButton
          isActive={tab === 'unread'}
          onClick={() => setTab('unread')}
        >
          Unread Notifications
        </TabButton>
        <AllReadButton
          hasUnread={unreadNotifications.length > 0}
          onClick={() => handleMarkAllNotificationsAsRead()}
        />
      </div>
      <MessagesContainer>
        {notificationsToRender.map((notification) => (
          <Message
            key={notification.id}
            notification={notification}
            onRead={() => handleMarkNotificationAsRead(notification.id)}
          />
        ))}
      </MessagesContainer>
    </div>
  );
};

export default Notifications;
