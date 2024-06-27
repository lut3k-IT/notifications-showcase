import classNames from 'classnames';

import { NotificationCount } from '../../types';

interface UnreadQuantityBadgeProps {
  count: NotificationCount;
  className?: string;
}

const UnreadQuantityBadge = (props: UnreadQuantityBadgeProps) => {
  const { count, className } = props;

  return (
    <div
      className={classNames(
        'flex-center h-4 w-min min-w-4 rounded-full bg-danger-500 text-[0.625rem] text-white',
        className
      )}
    >
      {count > 9 ? '+9' : count}
    </div>
  );
};

export default UnreadQuantityBadge;
