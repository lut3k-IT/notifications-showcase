import classNames from 'classnames';
import { TriangleAlert } from 'lucide-react';

interface AlertProps {
  className?: string;
  children: React.ReactNode;
  withoutIcon?: boolean;
}

const Alert = (props: AlertProps) => {
  const { className, children, withoutIcon } = props;

  return (
    <div className={classNames('flex-center gap-2 p-4 text-lg text-gray-500', className)}>
      {!withoutIcon && <TriangleAlert />} {children}
    </div>
  );
};

export default Alert;
