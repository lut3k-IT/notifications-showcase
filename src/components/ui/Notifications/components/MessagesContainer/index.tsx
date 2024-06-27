import classNames from 'classnames';

interface MessagesContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  const { children, className } = props;

  return <div className={classNames('flex flex-col gap-2 overflow-y-auto', className)}>{children}</div>;
};

export default MessagesContainer;
