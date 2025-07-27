// Data for Projects section
import tech, { Technology } from './technologies.constant';
import url from './url.constant';

export type Project = {
  title: string;
  description?: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    description:
      'It is made with Next.js, React, Tailwind CSS, and Typescript hosted on github pages',
    githubUrl: url.githubIoRepo,
    technologies: [
      tech['Next.js'],
      tech['React'],
      tech['Typescript'],
      tech['Tailwind CSS'],
    ],
    title: 'This Portfolio Website',
  },
  {
    description:
      "Mobile app that gives personalized beauty recommendations based on user's skin type and preferences",
    technologies: [tech['React Native'], tech['Typescript'], tech['Supabase']],
    title: 'AI Powered Beauty Assistant Mobile App',
  },
  {
    description: 'A website to connect dartboard venues and dart players',
    technologies: [
      tech['Next.js'],
      tech['Typescript'],
      tech['Tailwind CSS'],
      tech['Supabase'],
    ],
    title: 'Dartboard Venue Finder Website',
  },
  {
    description:
      'Finds nearest petrol stations, displays prices, and notifies on price changes',
    technologies: [
      tech['React Native'],
      tech['Typescript'],
      tech['Supabase'],
      tech['MongoDB'],
    ],
    title: 'Petrol Finder & Price Tracker Mobile App',
  },
  {
    description:
      'Helps convenience store managers reduce food waste through quantity and schedule management',
    technologies: [
      tech['React Native'],
      tech['Typescript'],
      tech['Nativewind'],
      tech['Redux'],
      tech['Jest'],
    ],
    title: 'Food Stock Management App',
  },
  {
    description:
      'A library of reusable and flexible UI components that is used in company framework to improve consistency and efficiency',
    technologies: [tech['React'], tech['Typescript']],
    title: 'Company UI Library via Storybook',
  },
  {
    description:
      'Document storage system (similar to Google Drive) made with React.js and HTML/CSS',
    technologies: [tech['React'], tech['HTML/CSS'], tech['Cypress']],
    title: 'Document Management System',
  },
  {
    description:
      'Softphone feature integrated into VR application for communication',
    technologies: [tech['React'], tech['Typescript']],
    title: 'Softphone Feature for VR App',
  },
  {
    description: 'Website for financial services and investment information',
    technologies: [tech['Vue.js'], tech['HTML/CSS']],
    title: 'Finance & Investment Website',
  },
  {
    description:
      'Livestream platform connecting producers, consumers, and resellers in a single platform',
    technologies: [tech['React'], tech['Typescript'], tech['Tailwind CSS']],
    title: 'Producer-Consumer-Reseller Livestream Website',
  },
  {
    description:
      'Point-of-sales system for restaurant order management and QR code generation',
    technologies: [
      tech['React'],
      tech['Typescript'],
      tech['Redux'],
      tech['Sass'],
    ],
    title: 'Qash Point-of-Sales System',
  },
  {
    description:
      'A simple house builder made with Three.js which is heavy on 3D graphics manipulation',
    githubUrl: 'https://github.com/eginatakasan/The-Housekeeper-3js',
    technologies: [tech['Three.js'], tech['React'], tech['Typescript']],
    title: 'Three.js House Builder',
  },
  {
    description: 'A mood-based place recommendation iOS app made with Swift',
    technologies: [tech['Swift']],
    title: 'Mood-based Place Recommendation App',
  },
  {
    description: 'A professional blog website using Wordpress',
    technologies: [
      tech['Wordpress'],
      tech['PHP'],
      tech['JavaScript'],
      tech['HTML/CSS'],
    ],
    title: 'Lawassier. Website',
  },
  {
    description:
      'Dental practice website with appointment booking and services information with Wordpress',
    liveUrl: 'https://thedentists.id/',
    technologies: [
      tech['Wordpress'],
      tech['PHP'],
      tech['JavaScript'],
      tech['HTML/CSS'],
    ],
    title: 'The Dentists Website',
  },
  {
    description: 'Technology Research company website using Next.js',
    technologies: [tech['Next.js'], tech['Typescript'], tech['Tailwind CSS']],
    title: 'Next.js Technology Research Company Website',
  },
  {
    description: 'A simple website for a local business',
    technologies: [tech['Vite'], tech['Typescript'], tech['EmotionCSS']],
    title: 'Vite.js Website for Insurance Company',
  },
];

export default projects;
