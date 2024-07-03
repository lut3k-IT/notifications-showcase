import Alert from '../../components/ui/Alert';
import NotificationMessage from '../../components/ui/NotificationMessage';
import NotificationsContainer from '../../components/ui/NotificationsContainer';
import { setNotificationAsRead } from '../../features/notifications/helpers';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import useSortedNotifications from '../../hooks/useSortedNotifications';

export default function AllNotificationsPage() {
  const dispatch = useAppDispatch();
  const notifications = useSortedNotifications();
  const hasNotifications = notifications.length > 0;

  return (
    <NotificationsContainer>
      {notifications.map((notification) => (
        <NotificationMessage
          key={notification.id}
          notification={notification}
          onRead={() => setNotificationAsRead(dispatch, notification.id)}
        />
      ))}
      {!hasNotifications && <Alert withoutIcon>You don&apos;t have any notifications</Alert>}
    </NotificationsContainer>
  );
}
