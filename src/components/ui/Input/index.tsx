import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = (props: InputProps) => {
  const { className, ...rest } = props;

  return (
    <input
      className={classNames(
        'flex h-8 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...rest}
    />
  );
};

export default Input;
