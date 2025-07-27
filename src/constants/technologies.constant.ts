import tags, { TechnologyTag } from './tags.constant';

export type Technology = {
  name: string;
  color: string;
  tags: TechnologyTag[];
};

const technologies: Record<string, Technology> = {
  'AWS CDK': {
    color: '#D05C17',
    name: 'AWS CDK',
    tags: [tags['Backend']],
  },
  'AWS Connect': {
    color: '#D05C17',
    name: 'AWS Connect',
    tags: [tags['Web']],
  },
  'C#': {
    color: '#9b4f96',
    name: 'C#',
    tags: [tags['Mobile']],
  },
  EmotionCSS: {
    color: '#0891B2',
    name: 'EmotionCSS',
    tags: [tags['Frontend']],
  },
  'HTML/CSS': {
    color: '#C62828',
    name: 'HTML/CSS',
    tags: [tags['Frontend'], tags['Web']],
  },
  Java: {
    color: '#007396',
    name: 'Java',
    tags: [tags['Backend']],
  },
  JavaScript: {
    color: '#B8860B',
    name: 'JavaScript',
    tags: [tags['Frontend'], tags['Backend'], tags['Web']],
  },
  MongoDB: {
    color: '#00684A',
    name: 'MongoDB',
    tags: [tags['Backend']],
  },
  Nativewind: {
    color: '#0891B2',
    name: 'Nativewind',
    tags: [tags['Frontend'], tags['Mobile']],
  },
  'Next.js': {
    color: '#000000',
    name: 'Next.js',
    tags: [tags['Frontend'], tags['Web']],
  },
  PHP: {
    color: '#4A148C',
    name: 'PHP',
    tags: [tags['Backend'], tags['Web']],
  },
  React: {
    color: '#58c4dc',
    name: 'React',
    tags: [tags['Frontend'], tags['Web']],
  },
  'React Native': {
    color: '#06bcee',
    name: 'React Native',
    tags: [tags['Frontend'], tags['Mobile']],
  },
  Redux: {
    color: '#593D88',
    name: 'Redux',
    tags: [tags['Frontend']],
  },
  Sass: {
    color: '#A52714',
    name: 'Sass',
    tags: [tags['Frontend'], tags['Web']],
  },
  Storybook: {
    color: '#FF4785',
    name: 'Storybook',
    tags: [tags['Frontend']],
  },
  Supabase: {
    color: '#1F8F4E',
    name: 'Supabase',
    tags: [tags['Backend']],
  },
  Swift: {
    color: '#FFAC45',
    name: 'Swift',
    tags: [tags['Mobile'], tags['Frontend']],
  },
  Tailpress: {
    color: '#0891B2',
    name: 'Tailpress',
    tags: [tags['Frontend'], tags['Web']],
  },
  'Tailwind CSS': {
    color: '#0891B2',
    name: 'Tailwind CSS',
    tags: [tags['Frontend'], tags['Web']],
  },
  'Three.js': {
    color: '#000000',
    name: 'Three.js',
    tags: [tags['Frontend']],
  },
  Typescript: {
    color: '#3178c6',
    name: 'Typescript',
    tags: [tags['Frontend']],
  },
  Vite: {
    color: '#0891B2',
    name: 'Vite.js',
    tags: [tags['Frontend'], tags['Web']],
  },
  'Vue.js': {
    color: '#2E7D32',
    name: 'Vue.js',
    tags: [tags['Frontend'], tags['Web']],
  },
  Wordpress: {
    color: '#0675c4',
    name: 'Wordpress',
    tags: [tags['Web']],
  },
};

// Data for Technical Skills section
const technicalSkills = [
  {
    category: 'Web Development',
    skills: Object.values(technologies)
      .filter(tech => tech.tags.some(tag => tag.name === 'Web development'))
      .map(tech => tech.name),
  },
  {
    category: 'Mobile/App Development',
    skills: Object.values(technologies)
      .filter(tech => tech.tags.some(tag => tag.name === 'Mobile development'))
      .map(tech => tech.name),
  },
];

export default technologies;
export { technicalSkills };
