import AllReadButton from './components/AllReadButton';
import Message from './components/Message';
import MessagesContainer from './components/MessagesContainer';
import TabButton from './components/TabButton';

const Notifications = () => {
  return (
    <div className={'flex flex-col gap-6'}>
      <div className={'flex flex-wrap gap-2'}>
        <TabButton
          isActive={true}
          onClick={() => ''}
        >
          All Notifications
        </TabButton>
        <TabButton
          isActive={false}
          onClick={() => ''}
        >
          Unread Notifications
        </TabButton>
        <AllReadButton
          hasUnread={true}
          onClick={() => ''}
        />
      </div>
      <MessagesContainer>
        <Message
          content={'Something that is <b> bold </b>. It is not.'}
          date={'yesterday'}
          notificationType={'newFeature'}
          isUnread
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread={false}
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread={false}
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread={false}
        />
        <Message
          content={
            'Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not. Something that is <b> bold </b>. It is not.'
          }
          date={'3 days ago'}
          notificationType={'deleted'}
          isUnread={false}
        />
      </MessagesContainer>
    </div>
  );
};

export default Notifications;
