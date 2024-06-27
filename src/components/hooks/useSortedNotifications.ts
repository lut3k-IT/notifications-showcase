import useAppSelector from './useAppSelector';

const useSortedNotifications = () => {
  const sortedNotifications = useAppSelector((state) =>
    [...state.notifications].sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
  );

  return sortedNotifications;
};

export default useSortedNotifications;
