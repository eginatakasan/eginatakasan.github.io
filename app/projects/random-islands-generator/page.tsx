import { Metadata } from 'next';
import RandomIslandsGeneratorClient from './clientPage';

export const metadata: Metadata = {
  title:
    'Random Islands Generator - Procedural Terrain Generation | Eginata Kasan',
  description:
    'Interactive procedural island generator using Perlin noise and p5.js. Create unique terrain maps with customizable pixel size and zoom levels. Built with React, Next.js, and TypeScript.',
  keywords: [
    'procedural generation',
    'island generator',
    'perlin noise',
    'terrain generation',
    'p5.js',
    'interactive map',
    'procedural terrain',
    'random islands',
    'web development',
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
    url: 'https://eginatakasan.github.io/projects/random-islands-generator',
    title: 'Random Islands Generator - Procedural Terrain Generation',
    description:
      'Interactive procedural island generator using Perlin noise and p5.js. Create unique terrain maps with customizable pixel size and zoom levels.',
    siteName: 'Eginata Kasan Portfolio',
    images: [
      {
        url: 'https://eginatakasan.github.io/og-islands-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Random Islands Generator - Procedural Terrain Generation Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Islands Generator - Procedural Terrain Generation',
    description:
      'Interactive procedural island generator using Perlin noise and p5.js. Create unique terrain maps with customizable pixel size and zoom levels.',
    images: ['https://eginatakasan.github.io/og-islands-generator.jpg'],
    creator: '@eginatakasan',
  },
  alternates: {
    canonical:
      'https://eginatakasan.github.io/projects/random-islands-generator',
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
            name: 'Random Islands Generator',
            description:
              'Interactive procedural island generator using Perlin noise and p5.js. Create unique terrain maps with customizable pixel size and zoom levels.',
            url: 'https://eginatakasan.github.io/projects/random-islands-generator',
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
              'Procedural terrain generation',
              'Perlin noise algorithm',
              'Customizable pixel size',
              'Adjustable zoom levels',
              'Interactive mouse tracking',
              'Image export functionality',
              'Real-time regeneration',
            ],
            screenshot:
              'https://eginatakasan.github.io/og-islands-generator.jpg',
            softwareHelp:
              'https://eginatakasan.github.io/projects/random-islands-generator',
            datePublished: '2024-01-01',
            dateModified: new Date().toISOString().split('T')[0],
          }),
        }}
      />

      {/* Additional SEO-friendly content for crawlers */}
      <div className="sr-only">
        <h1>Random Islands Generator - Procedural Terrain Generation Tool</h1>
        <p>
          Interactive procedural island generator built with React, Next.js, and
          p5.js. This tool uses Ken Perlin's noise algorithm to create
          natural-looking terrain maps. Features include customizable pixel
          sizes, zoom levels, and real-time island regeneration. Perfect for
          game developers, digital artists, and anyone interested in procedural
          generation.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Procedural terrain generation using Perlin noise</li>
          <li>Customizable pixel size (1-10 pixels)</li>
          <li>Adjustable zoom levels (0-100%)</li>
          <li>Interactive mouse tracking</li>
          <li>Image export functionality</li>
          <li>Real-time island regeneration</li>
          <li>Responsive design for all devices</li>
        </ul>
        <h2>Technology Stack</h2>
        <ul>
          <li>React 19 with TypeScript</li>
          <li>Next.js 15 for server-side rendering</li>
          <li>p5.js for graphics and animation</li>
          <li>Tailwind CSS for styling</li>
          <li>Perlin noise algorithm for natural randomness</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          The Random Islands Generator uses a 2-dimensional Perlin noise
          function to create randomness that appears natural. Perlin noise,
          invented by Ken Perlin in 1983, is widely used in computer graphics
          for terrain generation, texture creation, and procedural content
          generation. The algorithm generates smooth, continuous noise values
          that create realistic-looking terrain patterns.
        </p>
        <h2>Use Cases</h2>
        <ul>
          <li>Game development and level design</li>
          <li>Digital art and creative projects</li>
          <li>Educational demonstrations of procedural generation</li>
          <li>Prototyping terrain systems</li>
          <li>Learning about Perlin noise algorithms</li>
        </ul>
      </div>

      <div className="w-full h-screen relative">
        <RandomIslandsGeneratorClient />
      </div>
    </>
  );
};

export default Page;
