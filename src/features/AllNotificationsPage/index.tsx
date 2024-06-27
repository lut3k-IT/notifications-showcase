import useAppDispatch from '../../components/hooks/useAppDispatch';
import useSortedNotifications from '../../components/hooks/useSortedNotifications';
import Alert from '../../components/ui/Alert';
import Message from '../../components/ui/Notifications/components/Message';
import MessagesContainer from '../../components/ui/Notifications/components/MessagesContainer';
import { handleMarkAsRead } from '../../components/ui/Notifications/helpers';

const AllNotificationsPage = () => {
  const dispatch = useAppDispatch();
  const notifications = useSortedNotifications();
  const hasNotifications = notifications.length > 0;

  return (
    <MessagesContainer>
      {notifications.map((notification) => (
        <Message
          key={notification.id}
          notification={notification}
          onRead={() => handleMarkAsRead(dispatch, notification.id)}
        />
      ))}
      {!hasNotifications && <Alert withoutIcon>You don't have any notifications</Alert>}
    </MessagesContainer>
  );
};

export default AllNotificationsPage;
