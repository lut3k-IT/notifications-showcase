import { useParams } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react';

import useAppSelector from '../../components/hooks/useAppSelector';
import Message from '../../components/ui/Notifications/components/Message';

const Notification = () => {
  const { id } = useParams();
  const notification = useAppSelector((state) => state.notifications.find((notification) => notification.id === id));

  if (!notification)
    return (
      <div className={'flex-center gap-2 text-lg'}>
        <TriangleAlert /> Notification not found
      </div>
    );

  return <Message notification={notification} />;
};

export default Notification;
