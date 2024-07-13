import { useRouteError } from 'react-router-dom';

type CustomError = {
  statusText?: string;
}
export const Error = () => {
  const error = useRouteError();

  return (
    <main className='w-screen h-screen flex flex-col items-center justify-center gap-2'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <b>{(error as Error)?.message || (error as CustomError)?.statusText || "Unknown error"}</b>
      </p>
    </main>
  );
};