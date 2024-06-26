import { CheckCheck } from 'lucide-react';

import Button from '../../../Button';

interface AllReadButtonProps {
  hasUnread: boolean;
  onClick: () => void;
}

const AllReadButton = (props: AllReadButtonProps) => {
  const { hasUnread, onClick } = props;

  if (!hasUnread) return null;

  return (
    <Button
      onClick={onClick}
      size={'sm'}
      className={
        'flex gap-2 font-semibold text-primary-500 hover:!text-primary-400 '
      }
      variant={'text'}
    >
      <CheckCheck />
      <span>Mark all as read</span>
    </Button>
  );
};

export default AllReadButton;
