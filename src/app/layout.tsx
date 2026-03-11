import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://theracalm.vercel.app'),
  title: 'Theracalm | Anxiety & Trauma Therapy in Austin, TX',
  description: 'Dr. Aria Chen is a licensed clinical psychologist in Austin, TX specializing in anxiety, panic, trauma, and burnout therapy for high-achieving adults. In-person and telehealth sessions available throughout Texas.',
  keywords: 'psychologist Austin, anxiety therapy Texas, trauma therapist, EMDR therapy, burnout treatment, clinical psychologist, telehealth therapy Texas, Theracalm',
  authors: [{ name: 'Dr. Aria Chen, PsyD' }],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Theracalm | Anxiety & Trauma Therapy',
    description: 'Licensed Clinical Psychologist in Austin specializing in anxiety, trauma, and burnout. In-person and telehealth available.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Theracalm',
    images: ['/images/favicon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Theracalm | Anxiety & Trauma Therapy',
    description: 'Licensed Clinical Psychologist in Austin specializing in anxiety, trauma, and burnout.',
    images: ['/images/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V5VR94EEG2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V5VR94EEG2');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
