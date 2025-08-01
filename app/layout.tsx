import '../global.css';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ScrollToTopButton from './components/scroll-to-top-button';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Piotr Pabich Software Engineer',
    template: '%s | piotrpabich.com',
  },
  description: '%s | Piotr Pabich Software Engineer',
  keywords: [
    'Piotr Pabich',
    'Software Engineer',
    'Fullstack Developer',
    'Frontend',
    'Backend',
    'Web Developer',
    'Java Developer',
    'JavaScript Developer',
    'React',
    'React.js',
    'React Native',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Java',
    'Spring',
    'Spring Boot',
    'Spring Security',
    'Poland',
    'Developer',
    'Programista',
    'Polska',
    'Lodz',
    'Łódź',
    'Olsztyn',
    'Remote',
    'Zdalnie',
  ],
  openGraph: {
    type: 'website',
    url: 'https://piotrpabich.com',
    title: 'Piotr Pabich',
    description: 'Piotr Pabich Software Engineer',
    siteName: 'Piotr Pabich',
    images: [
      {
        url: 'https://piotrpabich.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'pl-PL',
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
  twitter: {
    title: 'Piotr Pabich',
    description: 'Software Engineer',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${calSans.variable} scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-400`}
    >
      <head></head>
      <body className={'bg-black'}>
        <div className='relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900'>
          {children}
          <Analytics />
          <SpeedInsights />
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
