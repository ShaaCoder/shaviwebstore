"use client";

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === '/temeplates/ai' || pathname === '/temeplates/services' || pathname === '/temeplates/BlogTemplate';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="min-h-screen">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default ClientLayout;