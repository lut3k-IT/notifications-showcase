import classNames from 'classnames';

import { ButtonVariant, CommonSize } from '../../../constants/types';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: CommonSize;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'default',
    size = 'md',
    className,
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        'h-min rounded-md font-semibold transition-colors line-clamp-1',
        {
          'bg-primary-500 text-white hover:bg-primary-400':
            variant === 'primary',
          'bg-danger-500 text-white hover:bg-danger-400': variant === 'danger',
          'bg-success-500 text-white hover:bg-success-400':
            variant === 'success',
          'bg-secondary-500 text-white hover:bg-secondary-400':
            variant === 'secondary',
          'bg-white border hover:bg-gray-200': variant === 'outline',
          'bg-transparent text-black': variant === 'ghost',
          'bg-transparent text-primary-500 hover:underline': variant === 'link',
          'bg-transparent text-black hover:text-primary-500':
            variant === 'text',
          '!w-12 !h-12 !p-0 text-gray-500 flex-center': variant === 'icon',
          '!w-8 !h-8 !p-0 text-gray-500 flex-center': variant === 'icon-sm',
        },
        {
          'px-3 py-1': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3': size === 'lg',
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
