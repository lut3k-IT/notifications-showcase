import { useParams } from 'react-router-dom';

import useAppSelector from '../../components/hooks/useAppSelector';
import Alert from '../../components/ui/Alert';
import DetailedNotification from './components/DetailedNotification';

const Notification = () => {
  const { id } = useParams();
  const notification = useAppSelector((state) => state.notifications.find((notification) => notification.id === id));

  if (!notification) return <Alert>Notification not found</Alert>;

  return <DetailedNotification notification={notification} />;
};

export default Notification;
