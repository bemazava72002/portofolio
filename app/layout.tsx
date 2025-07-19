import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BEMAZAVA Julio - Développeur Web Full Stack',
  description: 'Portfolio professionnel de BEMAZAVA Julio, développeur web full stack spécialisé en Node.js, React.js, Django, Spring Boot, Spring MVC et Next.js',
  keywords: 'développeur web, full stack, Node.js, React.js, Django, Spring Boot, Next.js, portfolio',
  authors: [{ name: 'BEMAZAVA Julio' }],
  creator: 'BEMAZAVA Julio',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bemazava-julio.dev',
    title: 'BEMAZAVA Julio - Développeur Web Full Stack',
    description: 'Portfolio professionnel de BEMAZAVA Julio, développeur web full stack spécialisé en Node.js, React.js, Django, Spring Boot, Spring MVC et Next.js',
    siteName: 'BEMAZAVA Julio Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEMAZAVA Julio - Développeur Web Full Stack',
    description: 'Portfolio professionnel de BEMAZAVA Julio, développeur web full stack spécialisé en Node.js, React.js, Django, Spring Boot, Spring MVC et Next.js',
    creator: '@bemazava',
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
  verification: {
    google: 'votre-code-google-search-console',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}