import { useMemo } from 'react';

import { useAppSelector } from './useAppSelector';

const useSortedNotifications = () => {
  const notifications = useAppSelector((state) => state.notifications);

  const sortedNotifications = useMemo(() => {
    return [...notifications].sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  }, [notifications]);

  return sortedNotifications;
};

export default useSortedNotifications;
