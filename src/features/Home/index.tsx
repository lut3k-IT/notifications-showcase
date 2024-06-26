import useAppSelector from '../../components/hooks/useAppSelector';

const Home = () => {
  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = notifications.filter((notification) => notification.status === 'unread');

  return (
    <div>
      <div>You have {notifications.length} notifications</div>
      <b>{unreadNotifications.length} unread</b>
    </div>
  );
};

export default Home;
