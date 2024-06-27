import { useParams } from 'react-router-dom';

import Alert from '../../components/ui/Alert';
import { INotification } from '../../features/notifications/types';
import { useAppSelector } from '../../hooks/useAppSelector';
import DetailedNotification from './components/DetailedNotification';

const NotificationPage = () => {
  const { id } = useParams();
  const notification = useAppSelector((state) =>
    state.notifications.find((notification: INotification) => notification.id === id)
  );

  if (!notification) return <Alert>Notification not found</Alert>;

  return <DetailedNotification notification={notification} />;
};

export default NotificationPage;
