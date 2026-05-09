import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppLayoutProviders from './layout-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Media Logger — Personal media tracker',
  applicationName: 'Media Logger',
  description:
    'Your personal media logger. Keep track of movies, TV shows, and games you have watched, played, or want to explore.',
  keywords: [
    'media logger',
    'movie tracker',
    'tv show tracker',
    'game tracker',
    'watchlist',
    'entertainment',
  ],
  verification: {
    google: 'BN-7vftkwf5OYUsNKaE6LhjT_PsdrKY3kqpnr679OUI',
  },
  openGraph: {
    siteName: 'Media Logger',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppLayoutProviders>{children}</AppLayoutProviders>
      </body>
    </html>
  );
}
