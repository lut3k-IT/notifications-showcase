import { useMemo } from 'react';
import { Github } from 'lucide-react';

import Card from '../../components/ui/Card';
import { useAppSelector } from '../../hooks/useAppSelector';

const HomePage = () => {
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
        rel='noreferrer'
        className={'flex-center mb-4 cursor-pointer gap-2 rounded-lg bg-gray-100 p-2 hover:bg-gray-200'}
      >
        <Github />
        <span>Click to see the source code on GitHub</span>
      </a>
      <Card>
        <div>You have {notifications.length} notifications</div>
        <b>{unreadNotifications.length} unread</b>
      </Card>
    </div>
  );
};

export default HomePage;
