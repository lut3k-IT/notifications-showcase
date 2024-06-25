import Button from '../../../Button';

interface UnreadBadgeProps {
  className?: string;
  onClick?: () => void;
}

const UnreadBadge = (props: UnreadBadgeProps) => {
  const { className, onClick } = props;

  return (
    <Button variant={'icon-sm'} className={className} onClick={onClick}>
      <div className={'w-3 h-3 bg-primary-500 rounded-full'} />
    </Button>
  );
};

export default UnreadBadge;
