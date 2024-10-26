import { FC, PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Ffern" imageUrl="/images/fferb.png" />
      <main className="flex-grow p-3">{children}</main>
      <Footer />
    </div>
  );
};
