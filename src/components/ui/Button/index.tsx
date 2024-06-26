import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { CommonSize } from '../../../constants/types';
import { ButtonType, ButtonVariant } from './types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  size?: CommonSize;
  to?: string;
}

const Button = (props: ButtonProps) => {
  const { children, buttonType = 'button', variant = 'primary', size = 'md', to, className, ...rest } = props;

  const buttonClassName = classNames(
    'h-min rounded-md font-semibold transition-colors line-clamp-1 flex-center w-max',
    {
      'bg-primary-500 text-white hover:bg-primary-400': variant === 'primary',
      'bg-secondary-500 text-white hover:bg-secondary-400': variant === 'secondary',
      'bg-danger-500 text-white hover:bg-danger-400 focus-visible-styles-danger': variant === 'danger',
      'bg-success-500 text-white hover:bg-success-400': variant === 'success',
      'bg-white border hover:bg-gray-200': variant === 'outline',
      'bg-transparent text-black': variant === 'ghost',
      'bg-transparent text-primary-500 hover:underline': variant === 'link',
      'bg-transparent text-black hover:text-primary-500': variant === 'text',
      '!w-12 !h-12 !p-0 text-gray-500': variant === 'icon',
      '!w-8 !h-8 !p-0 text-gray-500': variant === 'icon-sm'
    },
    {
      'px-3 py-1': size === 'sm',
      'px-4 py-2': size === 'md',
      'px-6 py-3': size === 'lg'
    },
    className
  );

  if (buttonType === 'link') {
    return (
      <Link
        to={to || '/'}
        className={buttonClassName}
      >
        {children}
      </Link>
    );
  }

  if (buttonType === 'navLink') {
    return (
      <NavLink
        to={to || '/'}
        className={buttonClassName}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
