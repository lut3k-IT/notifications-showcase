import NoNotificationsMessage from '../NoNotificationsMessage';

interface MessagesContainerProps {
  children?: React.ReactNode;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  const { children } = props;

  return <div className={'flex max-h-96 flex-col gap-2 overflow-y-auto'}>{children || <NoNotificationsMessage />}</div>;
};

export default MessagesContainer;
