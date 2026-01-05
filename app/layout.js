import { Inter } from 'next/font/google';
import './globals.css';
import LayoutClient from './layout-client';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'शेतकरी कृषी सेवा केंद्र - भोसेपाटी पंढरपूर सोलापूर',
  description: 'कृषी उत्पादने, बियाणे, खते, संरक्षण साधने - भोसेपाटी ता. पंढरपूर जि. सोलापूर, महाराष्ट्र',

  // 👇 Favicon + Icons + Manifest
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
  
  // Performance optimizations
  themeColor: '#177B3B',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://customer-assets.emergentagent.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://customer-assets.emergentagent.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <meta name="google-site-verification" content="u-r9HkP998MQZv_is0kOAseLjYitBbQIETaoxPGVl64" />
      </head>
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
