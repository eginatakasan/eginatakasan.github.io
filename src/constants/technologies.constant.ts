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
    tags: [tags['Mobile'], tags['Language']],
  },
  'HTML/CSS': {
    color: '#C62828',
    name: 'HTML/CSS',
    tags: [tags['Frontend'], tags['Web']],
  },
  Java: {
    color: '#007396',
    name: 'Java',
    tags: [tags['Backend'], tags['Language']],
  },
  JavaScript: {
    color: '#B8860B',
    name: 'JavaScript',
    tags: [tags['Frontend'], tags['Backend'], tags['Web'], tags['Language']],
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
  PHP: {
    color: '#4A148C',
    name: 'PHP',
    tags: [tags['Backend'], tags['Web'], tags['Language']],
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
  Supabase: {
    color: '#1F8F4E',
    name: 'Supabase',
    tags: [tags['Backend']],
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
  Typescript: {
    color: '#3178c6',
    name: 'Typescript',
    tags: [tags['Frontend']],
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
