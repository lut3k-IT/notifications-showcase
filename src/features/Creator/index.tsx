import { useState } from 'react';
import v4 from 'react-uuid';

import useAppDispatch from '../../components/hooks/useAppDispatch';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { NotificationName } from '../../components/ui/Notifications/enums';
import { addNotification } from '../../components/ui/Notifications/notificationsSlice';
import {
  Notification,
  NotificationType,
} from '../../components/ui/Notifications/types';

const Creator = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<NotificationType>('request');
  const dispatch = useAppDispatch();

  const handleAddNotification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const notification: Notification = {
      id: v4(),
      message,
      type,
      timestamp: new Date(),
      status: 'unread',
    };

    dispatch(addNotification(notification));
  };

  return (
    <div className={'flex flex-col gap-4'}>
      <h2>Create notification</h2>
      <form
        className={'w-80 flex flex-col gap-2 p-4 rounded-lg border'}
        onSubmit={(e) => handleAddNotification(e)}
      >
        <label>
          Message:
          <Input
            type='text'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <label>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value as NotificationType)}
          >
            <option value='request'>{NotificationName.REQUEST}</option>
            <option value='statusChange'>
              {NotificationName.STATUS_CHANGE}
            </option>
            <option value='newFeature'>{NotificationName.NEW_FEATURE}</option>
            <option value='deleted'>{NotificationName.DELETED}</option>
          </select>
        </label>
        <Button className={'mt-4'}>Create</Button>
      </form>
    </div>
  );
};

export default Creator;
