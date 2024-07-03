import classNames from 'classnames';

import { NotificationCount } from '../../../features/notifications/types';

interface UnreadQuantityBadgeProps {
  count: NotificationCount;
  className?: string;
}

export default function UnreadQuantityBadge(props: UnreadQuantityBadgeProps) {
  const { count, className } = props;
  const hasDoubleDigits = count > 9;

  return (
    <div
      className={classNames(
        'flex-center h-4 w-4 rounded-full bg-danger-500 text-[0.625rem] tracking-tighter text-white',
        { '!w-5': hasDoubleDigits },
        className
      )}
    >
      {hasDoubleDigits ? '9+' : count}
    </div>
  );
}
