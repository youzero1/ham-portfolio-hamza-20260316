import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Alex Morgan | MERN Stack Developer',
  description:
    'Professional portfolio of Alex Morgan, a Full Stack MERN Developer specializing in React, Node.js, MongoDB, and modern web technologies.',
  keywords: [
    'MERN Stack',
    'React Developer',
    'Node.js',
    'MongoDB',
    'Full Stack Developer',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan | MERN Stack Developer',
    description:
      'Professional portfolio showcasing full-stack web development projects and expertise.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Alex Morgan Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Morgan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan | MERN Stack Developer',
    description: 'Full Stack MERN Developer portfolio',
    creator: '@alexmorgan_dev',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
