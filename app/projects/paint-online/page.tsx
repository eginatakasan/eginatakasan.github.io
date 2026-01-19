import { Metadata } from 'next';
import PaintOnlineClient from './clientPage';

export const metadata: Metadata = {
  title: 'Paint Online - Digital Drawing Canvas | Eginata Kasan',
  description:
    'A full-screen digital canvas for drawing and painting. Draw with your mouse or touch screen using p5.js. Built with React, Next.js, and TypeScript.',
  keywords: [
    'paint online',
    'digital canvas',
    'drawing app',
    'p5.js',
    'interactive drawing',
    'web drawing',
    'paint software',
    'drawing tool',
    'React',
    'Next.js',
    'TypeScript',
    'Eginata Kasan',
  ],
  authors: [{ name: 'Eginata Kasan' }],
  creator: 'Eginata Kasan',
  publisher: 'Eginata Kasan',
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
    url: 'https://eginatakasan.github.io/projects/paint-online',
    title: 'Paint Online - Digital Drawing Canvas',
    description:
      'A full-screen digital canvas for drawing and painting. Draw with your mouse or touch screen using p5.js.',
    siteName: 'Eginata Kasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paint Online - Digital Drawing Canvas',
    description:
      'A full-screen digital canvas for drawing and painting. Draw with your mouse or touch screen.',
    creator: '@eginatakasan',
  },
  alternates: {
    canonical: 'https://eginatakasan.github.io/projects/paint-online',
  },
  category: 'technology',
  classification: 'Interactive Web Application',
};

const Page = () => {
  return (
    <>
      {/* Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Paint Online',
            description:
              'A full-screen digital canvas for drawing and painting. Draw with your mouse or touch screen using p5.js.',
            url: 'https://eginatakasan.github.io/projects/paint-online',
            applicationCategory: 'EntertainmentApplication',
            operatingSystem: 'Web Browser',
            browserRequirements: 'Requires JavaScript. Requires HTML5.',
            softwareVersion: '1.0.0',
            author: {
              '@type': 'Person',
              name: 'Eginata Kasan',
              url: 'https://eginatakasan.github.io',
            },
            creator: {
              '@type': 'Person',
              name: 'Eginata Kasan',
              url: 'https://eginatakasan.github.io',
            },
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            featureList: [
              'Full-screen drawing canvas',
              'Mouse and touch support',
              'Adjustable brush size',
              'Color picker',
              'Clear canvas',
              'Save drawings as PNG',
            ],
            datePublished: '2024-01-01',
            dateModified: new Date().toISOString().split('T')[0],
          }),
        }}
      />

      {/* Additional SEO-friendly content for crawlers */}
      <div className="sr-only">
        <h1>Paint Online - Digital Drawing Canvas</h1>
        <p>
          A full-screen digital canvas for drawing and painting. Draw with your
          mouse or touch screen. Built with React, Next.js, and p5.js.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Full-screen drawing canvas</li>
          <li>Mouse and touch screen support</li>
          <li>Adjustable brush size (1-50px)</li>
          <li>Color picker for custom colors</li>
          <li>Clear canvas functionality</li>
          <li>Save drawings as PNG images</li>
          <li>Responsive design for all devices</li>
        </ul>
        <h2>Technology Stack</h2>
        <ul>
          <li>React 19 with TypeScript</li>
          <li>Next.js 15 for server-side rendering</li>
          <li>p5.js for graphics and drawing</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </div>

      <div className="w-full h-screen relative">
        <PaintOnlineClient />
      </div>
    </>
  );
};

export default Page;
