import { useState } from 'react';

import Button from '../Button';
import Modal from '../Modal';
import Notifications from '../Notifications';
import NotificationBell from '../Notifications/components/BellButton';

const NavBar = () => {
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  return (
    <div
      className={
        'w-full h-14 flex bg-white justify-between px-page border-b items-center'
      }
    >
      <nav className={'flex h-full [&>*]:h-full'}>
        <Button variant={'text'}>Nav element</Button>
        <Button variant={'text'}>Nav element</Button>
        <Button variant={'text'}>Nav element</Button>
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
