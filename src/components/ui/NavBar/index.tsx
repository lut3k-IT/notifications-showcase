import { useMemo, useState } from 'react';

import { RouteName, RoutePath } from '../../../router/enums';
import useAppSelector from '../../hooks/useAppSelector';
import Button from '../Button';
import Modal from '../Modal';
import Notifications from '../Notifications';
import NotificationBell from '../Notifications/components/NotificationBell';
import UnreadQuantityBadge from '../Notifications/components/UnreadQuantityBadge';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const notifications = useAppSelector((state) => state.notifications);
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const unreadQuantity = unreadNotifications.length;

  return (
    <div className={'h-navbar fixed z-10 flex w-full items-center justify-between border-b bg-white pr-page'}>
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
        <Button
          buttonType={'navLink'}
          variant={'text'}
          to={RoutePath.ALL_NOTIFICATIONS}
        >
          {RouteName.ALL_NOTIFICATIONS}
        </Button>
      </nav>
      <NotificationBell
        onClick={() => setIsNotificationModalOpen(true)}
        count={unreadQuantity}
      />
      <Modal
        title={
          <h2 className={'relative w-max'}>
            Notifications
            {unreadQuantity > 0 && (
              <UnreadQuantityBadge
                count={unreadQuantity}
                className={'absolute -right-5 top-0'}
              />
            )}
          </h2>
        }
        isOpen={isNotificationModalOpen}
        closeModal={() => setIsNotificationModalOpen(false)}
      >
        <Notifications />
      </Modal>
    </div>
  );
};

export default NavBar;
