import React from 'react';
import TopNavigation from '../../src/components/organisms/TopNavigation';
import BottomContacts from '../../src/components/organisms/BottomContacts';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and modern UI components.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/eginatakasan/eginatakasan.github.io',
    liveUrl: 'https://eginatakasan.github.io',
  },
  {
    id: 2,
    title: 'Project 2',
    description:
      'Description of your second project. Add details about what the project does and what problems it solves.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Project 3',
    description:
      'Description of your third project. Highlight the key features and your role in development.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    liveUrl: 'https://project3-demo.com',
  },
];

const ProjectsPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <TopNavigation />

      <div className="flex-1 flex flex-col pt-32 px-8 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-tokyo font-bold text-textBlack mb-8">
            Projects
          </h1>
          <p className="text-lg text-textBlack mb-12 max-w-3xl">
            Here are some of the projects I've worked on. Each project showcases
            different technologies and problem-solving approaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-tokyo font-semibold text-textBlack mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-textBlack mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent text-white text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomContacts />
    </div>
  );
};

export default ProjectsPage;
