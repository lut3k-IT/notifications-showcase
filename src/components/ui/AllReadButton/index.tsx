import { CheckCheck } from 'lucide-react';

import Button from '../Button';

interface AllReadButtonProps {
  onClick: () => void;
}

const AllReadButton = (props: AllReadButtonProps) => {
  const { onClick } = props;

  return (
    <Button
      onClick={onClick}
      size={'sm'}
      className={'flex gap-2 font-semibold text-primary-500 hover:!text-primary-400'}
      variant={'text'}
    >
      <CheckCheck />
      <span>Mark all as read</span>
    </Button>
  );
};

export default AllReadButton;
