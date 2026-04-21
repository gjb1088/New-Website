import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import ModalProvider from '@/components/ModalProvider';
import BootScreen from '@/components/BootScreen';
import GrainOverlay from '@/components/GrainOverlay';
import KonamiEgg from '@/components/KonamiEgg';

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

const siteUrl = 'https://burnthe.network';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Burn.IT – Enterprise IT Consulting & Managed Services',
    template: '%s | Burn.IT',
  },
  description:
    'Enterprise-grade network engineering, cybersecurity, cloud, and AI-driven infrastructure management. 99.99% uptime SLA. Built for businesses that refuse to accept downtime.',
  keywords: [
    'IT consulting',
    'managed services',
    'cybersecurity',
    'network engineering',
    'cloud migration',
    'MSP',
    'enterprise IT',
    'AI operations',
    'infrastructure management',
    'zero trust',
    'SharePoint',
    'Microsoft Intune',
    'Autopilot',
  ],
  authors: [{ name: 'Burn.IT', url: siteUrl }],
  creator: 'Burn.IT',
  publisher: 'Burn.IT',
  category: 'technology',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Burn.IT',
    title: 'Burn.IT – Enterprise IT Consulting & Managed Services',
    description:
      'Enterprise-grade network engineering, cybersecurity, cloud, and AI-driven infrastructure management. 99.99% uptime SLA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burn.IT – Enterprise IT Consulting & Managed Services',
    description:
      'Enterprise-grade network engineering, cybersecurity, cloud, and AI-driven infrastructure management. 99.99% uptime SLA.',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Burn.IT',
  url: siteUrl,
  description:
    'Enterprise IT Consulting & Managed Services — network engineering, cybersecurity, cloud migration, and AI-driven infrastructure management.',
  email: 'questions@burnthe.network',
  areaServed: 'US',
  serviceType: [
    'IT Consulting',
    'Managed Services',
    'Network Engineering',
    'Cybersecurity',
    'Cloud Migration',
    'AI Operations',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans">
        <BootScreen />
        <GrainOverlay />
        <KonamiEgg />
        <div className="scanlines-global" aria-hidden="true" />
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
