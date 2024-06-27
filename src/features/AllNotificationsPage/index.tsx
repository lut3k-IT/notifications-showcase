import useAppDispatch from '../../components/hooks/useAppDispatch';
import useSortedNotifications from '../../components/hooks/useSortedNotifications';
import Message from '../../components/ui/Notifications/components/Message';
import MessagesContainer from '../../components/ui/Notifications/components/MessagesContainer';
import { handleMarkAsRead } from '../../components/ui/Notifications/helpers';

const AllNotificationsPage = () => {
  const dispatch = useAppDispatch();
  const notifications = useSortedNotifications();

  return (
    <MessagesContainer>
      {notifications.map((notification) => (
        <Message
          key={notification.id}
          notification={notification}
          onRead={() => handleMarkAsRead(dispatch, notification.id)}
        />
      ))}
    </MessagesContainer>
  );
};

export default AllNotificationsPage;
