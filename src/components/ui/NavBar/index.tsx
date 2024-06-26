import { useState } from 'react';

import { RouteName, RoutePath } from '../../../router/enums';
import Button from '../Button';
import Modal from '../Modal';
import Notifications from '../Notifications';
import NotificationBell from '../Notifications/components/BellButton';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  return (
    <div className={'flex h-14 w-full items-center justify-between border-b bg-white pr-page'}>
      <nav className={'flex h-full [&>*]:h-full'}>
        <Button
          type={'navLink'}
          variant={'text'}
          to={RoutePath.HOME}
        >
          {RouteName.HOME}
        </Button>
        <Button
          type={'navLink'}
          variant={'text'}
          to={RoutePath.CREATOR}
        >
          {RouteName.CREATOR}
        </Button>
      </nav>
      <NotificationBell onClick={() => setIsNotificationModalOpen(true)} />
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
