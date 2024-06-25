import classNames from 'classnames';

import { ButtonVariant } from '../../../constants/types';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonClassNames?: string;
  variant?: ButtonVariant;
}

const Button = (props: ButtonProps) => {
  const { children, variant = 'default', buttonClassNames, ...rest } = props;

  return (
    <button
      className={classNames(
        'h-min px-4 py-2 rounded-md font-semibold transition-colors',
        {
          'bg-primary-500 text-white hover:bg-primary-400':
            variant === 'primary',
          'bg-danger-500 text-white hover:bg-danger-400': variant === 'danger',
          'bg-success-500 text-white hover:bg-success-400':
            variant === 'success',
          'bg-secondary-500 text-white hover:bg-secondary-400':
            variant === 'secondary',

          'bg-white outline hover:bg-gray-400': variant === 'outline',
          'bg-transparent text-black': variant === 'ghost',
          'bg-transparent text-primary-500 hover:underline': variant === 'link',
          'bg-transparent text-black hover:text-primary-500':
            variant === 'text',
          '!w-12 !h-12 !p-0 text-gray-500 flex-center': variant === 'icon',
          '!w-8 !h-8 !p-0 text-gray-500 flex-center': variant === 'icon-sm',
        },
        buttonClassNames
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
