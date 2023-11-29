import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import '../styles/globals.css';

const title = 'Niter - Fix Grammar Mistakes Efficiently';
const description = 'Fix grammar with gpt-3.5 for free.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
