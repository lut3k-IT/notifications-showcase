import classNames from 'classnames';

interface NotificationsContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const NotificationsContainer = (props: NotificationsContainerProps) => {
  const { children, className } = props;

  return <div className={classNames('flex flex-col gap-2 overflow-y-auto', className)}>{children}</div>;
};

export default NotificationsContainer;
