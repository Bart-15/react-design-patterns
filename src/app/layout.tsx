import Provider from '@/Provider/Provider';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'React Design Patterns',
  description: 'Senior React Dev Design Pattern',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <main className='container mx-auto h-full max-w-7xl pt-12'>
            {children}
          </main>
        </Provider>{' '}
      </body>
    </html>
  );
}
