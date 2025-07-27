// Data for Projects section
import tech, { Technology } from './technologies.constant';

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
      "Mobile app that gives personalized beauty recommendations based on user's skin type and preferences.",
    technologies: [tech['React Native'], tech['Typescript'], tech['Supabase']],
    title: 'AI Powered Beauty Assistant Mobile App',
  },
  {
    technologies: [
      tech['React Native'],
      tech['Typescript'],
      tech['Supabase'],
      tech['MongoDB'],
    ],
    title: 'Petrol Finder & Price Tracker Mobile App',
  },
  {
    technologies: [
      tech['React Native'],
      tech['Typescript'],
      tech['Nativewind'],
      tech['Redux'],
    ],
    title: 'Food Stock Management App',
  },
  {
    technologies: [tech['React'], tech['Typescript'], tech['AWS Connect']],
    title: 'Softphone Feature for VR App',
  },
  {
    technologies: [tech['Vue.js'], tech['HTML/CSS']],
    title: 'Finance & Investment Website',
  },
  {
    technologies: [tech['React'], tech['Typescript'], tech['Tailwind CSS']],
    title: 'Producer-Consumer-Reseller Livestream Website',
  },
  {
    technologies: [
      tech['React'],
      tech['Typescript'],
      tech['Redux'],
      tech['Sass'],
    ],
    title: 'Qash Point-of-Sales System',
  },
  {
    technologies: [
      tech['Wordpress'],
      tech['PHP'],
      tech['JavaScript'],
      tech['HTML/CSS'],
    ],
    title: 'Lawassier. Website',
  },
  {
    technologies: [
      tech['Wordpress'],
      tech['PHP'],
      tech['JavaScript'],
      tech['HTML/CSS'],
      tech['Tailpress'],
    ],
    title: 'The Dentists Website',
  },
];

export default projects;
