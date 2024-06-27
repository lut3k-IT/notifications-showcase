import useAppDispatch from '../../components/hooks/useAppDispatch';
import useAppSelector from '../../components/hooks/useAppSelector';
import Message from '../../components/ui/Notifications/components/Message';
import MessagesContainer from '../../components/ui/Notifications/components/MessagesContainer';
import { handleMarkAsRead } from '../../components/ui/Notifications/helpers';

const AllNotificationsPage = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notifications);

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
