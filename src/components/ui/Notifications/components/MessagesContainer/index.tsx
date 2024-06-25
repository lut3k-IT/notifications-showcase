import NoNotificationsMessage from '../NoNotificationsMessage';

interface MessagesContainerProps {
  children?: React.ReactNode;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  const { children } = props;

  return (
    <div className={'flex flex-col gap-2'}>
      {children || <NoNotificationsMessage />}
    </div>
  );
};

export default MessagesContainer;
