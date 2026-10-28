import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BIFMUN III | Academic Proposal',
  description: 'Preliminary academic and logistics proposal for BIFMUN III, Barranquilla, Colombia.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
