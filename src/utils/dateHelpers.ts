import { NotificationTimeForSelect } from '../features/notifications/types';

export const getTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else if (date.toDateString() === twoDaysAgo.toDateString()) {
    return '2 days ago';
  } else {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  }
};

export const calculatePastTimestamp = (timePeriod: NotificationTimeForSelect, timestamp: Date): Date => {
  switch (timePeriod) {
    case 'now':
      break;
    case 'day':
      timestamp.setDate(timestamp.getDate() - 1);
      break;
    case '2days':
      timestamp.setDate(timestamp.getDate() - 2);
      break;
    case 'week':
      timestamp.setDate(timestamp.getDate() - 7);
      break;
    case 'month':
      timestamp.setMonth(timestamp.getMonth() - 1);
      break;
    default:
      throw new Error(`Unsupported time period: ${timePeriod}`);
  }
  return timestamp;
};
