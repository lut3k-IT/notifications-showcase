import { useMemo, useState } from 'react';

import { RouteName, RoutePath } from '../../../router/enums';
import useAppSelector from '../../hooks/useAppSelector';
import Button from '../Button';
import Modal from '../Modal';
import Notifications from '../Notifications';
import NotificationBell from '../Notifications/components/NotificationBell';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const unreadQuantity = unreadNotifications.length;

  return (
    <div className={'flex h-14 w-full items-center justify-between border-b bg-white pr-page'}>
      <nav className={'flex h-full [&>*]:h-full'}>
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.HOME}
        >
          {RouteName.HOME}
        </Button>
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.CREATOR}
        >
          {RouteName.CREATOR}
        </Button>
      </nav>
      <NotificationBell
        onClick={() => setIsNotificationModalOpen(true)}
        count={unreadQuantity}
      />
      <Modal
        title={'Modal Title'}
        isOpen={isNotificationModalOpen}
        closeModal={() => setIsNotificationModalOpen(false)}
      >
        <Notifications />
      </Modal>
    </div>
  );
};

export default NavBar;
