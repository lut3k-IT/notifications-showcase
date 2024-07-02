import classNames from 'classnames';
import { X } from 'lucide-react';

import Button from '../Button';

interface CloseButtonProps {
  className?: string;
  onClick: () => void;
}

export default function CloseButton(props: CloseButtonProps) {
  const { className, onClick } = props;

  return (
    <Button
      variant={'icon-sm'}
      className={classNames('rounded [&:hover>svg]:rotate-90', className)}
      onClick={onClick}
    >
      <X className={'transition-transform'} />
    </Button>
  );
}
