import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Eginata Kasan - Software Engineer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Eginata Kasan's Portfolio - Software Engineer specializing in React, React Native, Next.js, and TypeScript. View my projects, skills, and professional experience."
        />
        <meta
          name="keywords"
          content="Eginata Kasan, Portfolio, Software Engineer, React, React Native, Next.js, Tailwind, CSS, TypeScript, Frontend Developer, Web Developer"
        />
        <meta name="author" content="Eginata Kasan" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eginatakasan.github.io/" />
        <meta
          property="og:title"
          content="Eginata Kasan - Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Software Engineer specializing in React, React Native, Next.js, and TypeScript. View my projects, skills, and professional experience."
        />
        <meta
          property="og:image"
          content="https://eginatakasan.github.io/profile2.jpg"
        />
        <meta property="og:site_name" content="Eginata Kasan Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://eginatakasan.github.io/"
        />
        <meta
          property="twitter:title"
          content="Eginata Kasan - Software Engineer Portfolio"
        />
        <meta
          property="twitter:description"
          content="Software Engineer specializing in React, React Native, Next.js, and TypeScript. View my projects, skills, and professional experience."
        />
        <meta
          property="twitter:image"
          content="https://eginatakasan.github.io/profile2.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Eginata Kasan" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://eginatakasan.github.io/" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
