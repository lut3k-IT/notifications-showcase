import Button from '../Button';

interface UnreadBadgeProps {
  className?: string;
  onClick?: () => void;
}

export default function UnreadBadge(props: UnreadBadgeProps) {
  const { className, onClick } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <Button
      variant={'icon-sm'}
      className={className}
      onClick={handleClick}
    >
      <div className={'h-3 w-3 rounded-full bg-primary-500'} />
    </Button>
  );
}
