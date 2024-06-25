import classNames from 'classnames';

import { NotificationType } from '../../../../types';

interface AvatarProps {
  notificationType: NotificationType;
}

const style = 'rounded-full w-12 h-12 flex-shrink-0 bg-gradient-to-bl';

const Avatar = (props: AvatarProps) => {
  const { notificationType } = props;

  return (
    <>
      {notificationType === 'request' && (
        <div
          className={classNames(style, 'from-violet-700 to-violet-500')}
        ></div>
      )}
      {notificationType === 'newFeature' && (
        <div className={classNames(style, 'from-pink-700 to-pink-500')}></div>
      )}
      {notificationType === 'deleted' && (
        <div className={classNames(style, 'from-red-700 to-red-500')}></div>
      )}
      {notificationType === 'statusChange' && (
        <div
          className={classNames(style, 'from-yellow-700 to-yellow-500')}
        ></div>
      )}
    </>
  );
};

export default Avatar;
