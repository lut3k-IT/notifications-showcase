import { useState } from 'react';

import { RouteName, RoutePath } from '../../../router/enums';
import Button from '../Button';
import Modal from '../Modal';
import Notifications from '../Notifications';
import NotificationBell from '../Notifications/components/BellButton';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  return (
    <div
      className={
        'w-full h-14 flex bg-white justify-between pr-page border-b items-center'
      }
    >
      <nav className={'flex h-full [&>*]:h-full'}>
        <Button type={'navLink'} variant={'text'} to={RoutePath.HOME}>
          {RouteName.HOME}
        </Button>
        <Button type={'navLink'} variant={'text'} to={RoutePath.NOTIFICATION}>
          {RouteName.NOTIFICATION}
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
