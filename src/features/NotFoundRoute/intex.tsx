import { useRouteError } from 'react-router-dom';

const NotFoundRoute = () => {
  const error: unknown = useRouteError();

  return (
    <div className={'flex-center pt-body-pad-start flex-col gap-4'}>
      <h1 className={'text-2xl font-normal'}>Oops</h1>
      <span className={'text-muted2-foreground text-4xl font-bold'}>404</span>
      <pre>
        <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
      </pre>
    </div>
  );
};

export default NotFoundRoute;
