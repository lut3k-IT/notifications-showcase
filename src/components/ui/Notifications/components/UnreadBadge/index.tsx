import Button from '../../../Button';

interface UnreadBadgeProps {
  className?: string;
  onClick?: () => void;
}

const UnreadBadge = (props: UnreadBadgeProps) => {
  const { className, onClick } = props;

  return (
    <Button
      variant={'icon-sm'}
      className={className}
      onClick={onClick}
    >
      <div className={'h-3 w-3 rounded-full bg-primary-500'} />
    </Button>
  );
};

export default UnreadBadge;
