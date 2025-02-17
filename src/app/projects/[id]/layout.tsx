import { auth } from '@/lib/auth';
import type { Metadata } from 'next';
import '../../globals.css';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang='en' className='font-inter' suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
