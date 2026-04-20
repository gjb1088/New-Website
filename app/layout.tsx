import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import ModalProvider from '@/components/ModalProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Burn.IT – Enterprise IT Consulting & Managed Services',
  description:
    'Enterprise-grade network engineering, cybersecurity, cloud, and AI-driven infrastructure management. 99.99% uptime SLA. Built for businesses that refuse to accept downtime.',
  keywords: ['IT consulting', 'managed services', 'cybersecurity', 'network engineering', 'cloud migration', 'MSP'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <div className="scanlines-global" aria-hidden="true" />
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
