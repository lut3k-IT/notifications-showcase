import { useParams } from 'react-router-dom';

const Notification = () => {
  const { id } = useParams();

  return <div>Notification id: {id}</div>;
};

export default Notification;
