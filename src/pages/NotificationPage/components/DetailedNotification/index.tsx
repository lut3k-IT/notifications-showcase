import Card from '../../../../components/ui/Card';
import NotificationAvatar from '../../../../components/ui/NotificationAvatar';
import { getNotificationName } from '../../../../features/notifications/helpers';
import { INotification } from '../../../../features/notifications/types';

interface DetailedNotificationProps {
  notification: INotification;
}

const DetailedNotification = (props: DetailedNotificationProps) => {
  const { notification } = props;
  const { id, type, message, timestamp, status } = notification;

  const formattedTime = new Date(timestamp).toLocaleTimeString();
  const formattedDate = new Date(timestamp).toLocaleDateString();

  return (
    <Card className={'flex flex-col gap-3'}>
      <div className={'flex flex-col gap-3'}>
        <NotificationAvatar notificationType={type} />
        <div>
          <h2>Notification ID: {id}</h2>
          <h3>Type: {getNotificationName(type)}</h3>
        </div>
      </div>
      <div>
        <p>Message: {message}</p>
        <p>Date: {formattedDate}</p>
        <p>Time: {formattedTime}</p>
        <p>Status: {status}</p>
      </div>
    </Card>
  );
};

export default DetailedNotification;
