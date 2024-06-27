import classNames from 'classnames';
import { CirclePause, FileSearch2, Flame, Trash } from 'lucide-react';

import { NotificationType } from '../../../../types';

interface AvatarProps {
  notificationType: NotificationType;
}

const style = 'rounded-full w-12 h-12 flex-shrink-0 bg-gradient-to-bl';

const Avatar = (props: AvatarProps) => {
  const { notificationType } = props;

  return (
    <div className={'[&>div]:flex-center text-white'}>
      {notificationType === 'request' && (
        <div className={classNames(style, 'from-violet-700 to-violet-500')}>
          <FileSearch2 />
        </div>
      )}
      {notificationType === 'newFeature' && (
        <div className={classNames(style, 'from-pink-700 to-pink-500')}>
          <Flame />
        </div>
      )}
      {notificationType === 'deleted' && (
        <div className={classNames(style, 'from-red-700 to-red-500')}>
          <Trash />
        </div>
      )}
      {notificationType === 'statusChange' && (
        <div className={classNames(style, 'from-yellow-700 to-yellow-500')}>
          <CirclePause />
        </div>
      )}
    </div>
  );
};

export default Avatar;
