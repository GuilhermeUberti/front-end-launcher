import './globals.css';
import { ReactNode } from 'react';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '../context/AuthContext';

export const metadata = {
  title: 'GiftPlay',
  description: 'Jogos interativos para lives no estilo GameTik',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-darkBg text-white font-sans">
        <AuthProvider>
          <Navbar />
          {children}
          <ScrollToTopButton />
        </AuthProvider>
      </body>
    </html>
  );
}
