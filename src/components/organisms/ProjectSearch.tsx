'use client';

import { useState, useMemo } from 'react';
import projects from '../../constants/projects.constant';
import SearchBox from '../atoms/SearchBox';
import clsx from 'clsx';
import tags, { TechnologyTag } from '../../constants/tags.constant';

const allTags: readonly TechnologyTag[] = Object.freeze(Object.values(tags));

const ProjectSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Filter projects by search text and selected tags
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Text search filter
      const matchesText =
        project.title.toLowerCase().includes(searchText.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchText.toLowerCase());

      // Tag filter
      const projectTags = new Set<string>();
      project.technologies.forEach(tech => {
        tech.tags.forEach(tag => {
          projectTags.add(tag.name);
        });
      });

      const matchesTags =
        selectedTags.size === 0 ||
        Array.from(selectedTags).some(tag => projectTags.has(tag));

      return matchesText && matchesTags;
    });
  }, [searchText, selectedTags]);

  // Get unique tags for a specific project
  const getProjectTags = (project: (typeof projects)[0]) => {
    const tagSet = new Set<TechnologyTag>();
    project.technologies.forEach(tech => {
      tech.tags.forEach(tag => {
        tagSet.add(tag);
      });
    });
    return Array.from(tagSet);
  };

  const toggleTag = (tag: TechnologyTag) => {
    const newSelectedTags = new Set(selectedTags);
    if (newSelectedTags.has(tag.name)) {
      newSelectedTags.delete(tag.name);
    } else {
      newSelectedTags.add(tag.name);
    }
    setSelectedTags(newSelectedTags);
  };

  const clearAllTags = () => {
    setSelectedTags(new Set());
  };

  return (
    <section className="mt-10">
      <div className="mb-6">
        <SearchBox
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search projects by title or description..."
        />
      </div>

      {/* Tag Filter Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold text-textBlack">
            Filter by Tags
          </h3>
          {selectedTags.size > 0 && (
            <button
              onClick={clearAllTags}
              className="text-sm text-accent hover:text-accent-light font-medium transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag.name}
              onClick={() => toggleTag(tag)}
              className={clsx(
                'flex flex-row gap-2 items-center px-3 py-2 text-sm rounded-full font-medium font-raleway transition-all duration-200',
                'border-2',
                selectedTags.has(tag.name)
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent',
              )}
            >
              {tag.icon} {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-lightGray font-raleway">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects?.map(project => (
          <div
            key={project.title}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-textBlack mb-3">
              {project.title}
            </h3>
            <p className="font-raleway text-sm mb-4 line-clamp-3">
              {project?.description}
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {getProjectTags(project).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full font-medium font-raleway bg-gray-100 text-gray-700"
                >
                  {tag.icon}
                </span>
              ))}
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-textBlack mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={clsx(
                      'px-3 py-1 text-white text-xs rounded-full font-medium font-raleway',
                    )}
                    style={{ backgroundColor: tech?.color ?? '#ECC35A' }}
                  >
                    {tech?.name}
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

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lightGray font-raleway text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchText('');
              setSelectedTags(new Set());
            }}
            className="mt-4 text-accent hover:text-accent-light font-medium transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectSearch;
