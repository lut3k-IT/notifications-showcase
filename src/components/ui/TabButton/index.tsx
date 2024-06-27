import classNames from 'classnames';

import Button from '../Button';

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = (props: TabButtonProps) => {
  const { isActive, onClick, children, ...rest } = props;

  return (
    <Button
      variant={'outline'}
      size={'sm'}
      className={classNames('!rounded-full', {
        'border-primary-500 text-primary-500 hover:bg-primary-100': isActive,
        'border-gray-200 text-gray-500': !isActive
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TabButton;
