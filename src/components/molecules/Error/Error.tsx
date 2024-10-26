import { FC } from 'react';

interface IErrorProps {
  message: string;
}

export const Error: FC<IErrorProps> = ({ message }) => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <h2 className="font-semibold">Error: {message}</h2>
    </div>
  );
};
