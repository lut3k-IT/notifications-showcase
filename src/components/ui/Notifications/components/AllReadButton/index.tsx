import { CheckCheck } from 'lucide-react';

import Button from '../../../Button';

interface AllReadButtonProps {
  hasUnread: boolean;
  onClick: () => void;
}

const AllReadButton = (props: AllReadButtonProps) => {
  const { hasUnread, onClick } = props;

  // @todo - If there are no unread notifications, don't show the button or make it disabled

  if (!hasUnread) return null;

  return (
    <Button
      onClick={onClick}
      size={'sm'}
      className={
        'flex gap-2 font-semibold text-primary-500 hover:text-primary-400 '
      }
    >
      <CheckCheck />
      <span>Mark all as read</span>
    </Button>
  );
};

export default AllReadButton;
