import Image from 'next/image';
import { FC } from 'react';

interface HeaderProps {
  title: string;
  imageUrl: string;
}

export const Header: FC<HeaderProps> = ({ title, imageUrl }) => {
  return (
    <header className="relative w-full h-40 overflow-clip">
      <Image
        src={imageUrl}
        alt="Header Background"
        className="z-0"
        width="1820"
        height="720"
      />
      <div className="absolute inset-0 flex flex-col p-5 text-white z-10 bg-black bg-opacity-40">
        <h1 className="text-4xl font-bold text-ash50">{title}</h1>
      </div>
    </header>
  );
};
