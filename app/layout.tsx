import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'Easybank ',
  description: 'Frontend Mentor Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('h-dvh w-full', inter.variable)}>{children}</body>
    </html>
  );
}
