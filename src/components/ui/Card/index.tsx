import classNames from 'classnames';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { className, children } = props;

  return <div className={classNames('rounded-lg border p-4 shadow', className)}>{children}</div>;
};

export default Card;
