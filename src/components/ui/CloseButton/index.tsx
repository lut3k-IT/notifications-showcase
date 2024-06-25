import classNames from 'classnames';
import { X } from 'lucide-react';

import Button from '../Button';

interface CloseButtonProps {
  className?: string;
  onClick: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
  const { className, onClick } = props;

  return (
    <Button
      variant={'icon'}
      className={classNames('[&:hover>svg]:rotate-90', className)}
      onClick={onClick}
    >
      <X className={'transition-transform'} />
    </Button>
  );
};

export default CloseButton;
