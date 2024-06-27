import classNames from 'classnames';

import NoNotificationsMessage from '../NoNotificationsMessage';

interface MessagesContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  const { children, className } = props;

  return (
    <div className={classNames('flex flex-col gap-2 overflow-y-auto', className)}>
      {children || <NoNotificationsMessage />}
    </div>
  );
};

export default MessagesContainer;
