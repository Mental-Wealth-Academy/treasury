import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Treasury — Mental Wealth Academy',
  description: 'Community-owned USDC treasury with autonomous trading model, Black-Scholes pricing, and Polymarket signal integration.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
