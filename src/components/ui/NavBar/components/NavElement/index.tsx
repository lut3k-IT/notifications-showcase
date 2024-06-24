import { ButtonVariant } from '../../../../../constants/types';
import Button from '../../../Button';

interface NavElementProps {
  children: React.ReactNode;
  variant?: 'none' | 'link' | 'button';
  href?: string;
  buttonVariant?: ButtonVariant;
}

// @remind - it is unused component, delete it

const NavElement = (props: NavElementProps) => {
  const { children, variant = 'none', href, buttonVariant = 'text' } = props;

  return (
    <>
      {variant === 'none' && <span>{children}</span>}
      {variant === 'link' && <a href={href}>{children}</a>}
      {variant === 'button' && (
        <Button
          variant={buttonVariant}
          buttonClassNames={'!h-full !rounded-none'}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default NavElement;
