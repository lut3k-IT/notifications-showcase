import { useMemo } from 'react';
import { Github } from 'lucide-react';

import useAppSelector from '../../components/hooks/useAppSelector';

const Home = () => {
  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );

  return (
    <div>
      <a
        href='https://github.com/lut3k-IT/notifications-showcase'
        target='_blank'
        className={'flex-center mb-4 cursor-pointer gap-2 rounded-lg bg-gray-100 p-2 hover:bg-gray-200'}
      >
        <Github />
        <span>Click to see the project</span>
      </a>
      <div>You have {notifications.length} notifications</div>
      <b>{unreadNotifications.length} unread</b>
    </div>
  );
};

export default Home;
