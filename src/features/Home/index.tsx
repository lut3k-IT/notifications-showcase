import { useMemo } from 'react';

import useAppSelector from '../../components/hooks/useAppSelector';

const Home = () => {
  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );

  return (
    <div>
      <div>You have {notifications.length} notifications</div>
      <b>{unreadNotifications.length} unread</b>
    </div>
  );
};

export default Home;
