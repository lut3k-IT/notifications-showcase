import { useState } from 'react';
import v4 from 'react-uuid';

import useAppDispatch from '../../components/hooks/useAppDispatch';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { NotificationName } from '../../components/ui/Notifications/enums';
import { addNotification, removeAllNotifications } from '../../components/ui/Notifications/notificationsSlice';
import { Notification, NotificationTimeForSelect, NotificationType } from '../../components/ui/Notifications/types';
import { calculatePastTimestamp } from '../../utils/dateHelpers';

const Creator = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<NotificationType>('request');
  const [time, setTime] = useState<NotificationTimeForSelect>('now');
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setMessage('');
    setType('request');
    setTime('now');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const timestamp = calculatePastTimestamp(time, new Date());
    const notification: Notification = {
      id: v4(),
      message,
      type,
      timestamp: new Date(timestamp).toISOString(),
      status: 'unread'
    };

    dispatch(addNotification(notification));
    resetForm();
  };

  const handleDeleteAll = () => {
    dispatch(removeAllNotifications());
  };

  return (
    <div className={'flex flex-col gap-4'}>
      <form
        className={'flex w-80 flex-col gap-2 rounded-lg border p-4'}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2>Create notification</h2>
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
            className={'w-full rounded-md border p-1'}
          >
            <option value='request'>{NotificationName.REQUEST}</option>
            <option value='statusChange'>{NotificationName.STATUS_CHANGE}</option>
            <option value='newFeature'>{NotificationName.NEW_FEATURE}</option>
            <option value='deleted'>{NotificationName.DELETED}</option>
          </select>
        </label>
        <label>
          Time:
          <select
            value={time}
            onChange={(e) => setTime(e.target.value as NotificationTimeForSelect)}
            className={'w-full rounded-md border p-1'}
          >
            <option value='now'>Now</option>
            <option value='day'>Day ago</option>
            <option value='2days'>Two days ago</option>
            <option value='week'>Week ago</option>
            <option value='month'>Month ago</option>
          </select>
        </label>
        <Button className={'mt-4 !w-full'}>Create</Button>
      </form>
      <Button
        onClick={() => handleDeleteAll()}
        variant={'danger'}
      >
        Delete all notifications
      </Button>
    </div>
  );
};

export default Creator;
