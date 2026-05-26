import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/chat-widget';

export const metadata: Metadata = {
  metadataBase: new URL('https://myaijourney.org'),
  title: {
    default: 'MyAIJourney — AI Tools Reviews & Insights',
    template: '%s | MyAIJourney',
  },
  description: 'Honest, in-depth reviews of AI tools, automation software, and productivity apps. Find the best AI tools for your workflow with expert analysis and affiliate-vetted picks.',
  keywords: ['AI tools', 'AI reviews', 'artificial intelligence', 'productivity', 'automation', 'ChatGPT', 'Claude', 'Gemini', 'AI software'],
  authors: [{ name: 'Jim Harrell' }],
  creator: 'Jim Harrell',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myaijourney.org',
    siteName: 'MyAIJourney',
    title: 'MyAIJourney — AI Tools Reviews & Insights',
    description: 'Honest, in-depth reviews of AI tools, automation software, and productivity apps.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'MyAIJourney — AI Tools Reviews',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyAIJourney — AI Tools Reviews & Insights',
    description: 'Honest, in-depth reviews of AI tools, automation software, and productivity apps.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="google-site-verification" content="LNLexSDLDpsnG7W9KfpzTsa7NlX_UdPLqYF0a1D9TZk" />
        <meta name="p:domain_verify" content="d2d8bd9deb7556fdb712ba345531afdb" />
        <link rel="alternate" hrefLang="en" href="https://myaijourney.org" />
        <link rel="alternate" hrefLang="es" href="https://myaijourney.org/es" />
        <link rel="alternate" hrefLang="x-default" href="https://myaijourney.org" />
        <meta name="fo-verify" content="ee54e25f-a2e2-42ca-813e-a2c3fbcae73b" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}






