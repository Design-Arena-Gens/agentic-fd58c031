import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'agentic-fd58c031',
  description: 'Deployed on Vercel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
