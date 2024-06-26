import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import useSortedNotifications from '../../../hooks/useSortedNotifications';
import { RouteName, RoutePath } from '../../../router/enums';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import NotificationBell from '../../ui/NotificationBell';
import NotificationPanel from '../../ui/NotificationPanel';
import UnreadQuantityBadge from '../../ui/UnreadQuantityBadge';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const location = useLocation();

  const notifications = useSortedNotifications();
  const unreadNotifications = useMemo(
    () => notifications.filter((notification) => notification.status === 'unread'),
    [notifications]
  );
  const unreadQuantity = unreadNotifications.length;

  useEffect(() => {
    setIsNotificationModalOpen(false);
  }, [location]);

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
        <NotificationPanel />
      </Modal>
    </div>
  );
};

export default NavBar;
