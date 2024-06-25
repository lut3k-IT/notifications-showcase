import NoNotificationsMessage from '../NoNotificationsMessage';

interface MessagesContainerProps {
  children?: React.ReactNode;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  const { children } = props;

  return (
    <div className={'flex flex-col gap-2 overflow-y-auto max-h-96'}>
      {children || <NoNotificationsMessage />}
    </div>
  );
};

export default MessagesContainer;
