import React from 'react';
import Button from '../atoms/Button';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { technicalSkills } from '../../constants/technologies.constant';
import projects from '../../constants/projects.constant';
import workExperience from '../../constants/workExperience.constant';
import education from '../../constants/education.constant';
import Link from 'next/link';
import clsx from 'clsx';

const About = () => {
  return (
    <section
      className="flex flex-col px-10 pt-10 pb-5 justify-start md:flex-wrap md:flex-row md:py-5 md:px-16 xl:mx-auto xl:max-w-[1280px] gap-6 w-full relative"
      aria-label="Eginata Kasan's Work Experience, Education, and Projects"
    >
      <div className="absolute inset-x-16 top-0 border-t border-solid border-t-lightGray opacity-60"></div>

      <div className="flex-[0.3 1 40%] lg:flex-[0.3 1 30%] flex flex-col">
        <section
          className="flex flex-col mb-10"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="text-xl font-tokyo text-textBlack mb-2"
          >
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <div key={index} className="flex flex-col mb-3">
              <h3 className="text-base font-medium font-raleway">
                {job.title}
              </h3>
              <div className="text-base font-light font-raleway">
                {job.company}
              </div>
              <div className="text-base font-light font-raleway italic">
                {job.period}
              </div>
            </div>
          ))}
        </section>

        <section
          className="flex flex-col mb-10"
          aria-labelledby="education-heading"
        >
          <h2
            id="education-heading"
            className="text-xl font-tokyo text-textBlack mb-2"
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col mb-3">
              <h3 className="text-base font-medium font-raleway">
                {edu.institution}
              </h3>
              <div className="text-base font-light font-raleway">
                {edu.degree}
              </div>
              <div className="text-base font-light font-raleway italic">
                {edu.period.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="flex-[0.5 1 40%] lg:flex-[0.3 1 30%] flex flex-col">
        <section
          className="flex flex-col mb-10"
          aria-labelledby="projects-heading"
        >
          <Link
            href="/projects"
            className="text-xl font-tokyo text-textBlack mb-2 hover:cursor-pointer hover:text-accent hover:underline"
          >
            Projects &gt;&gt;
          </Link>
          <div className="flex flex-col gap-3 mb-3">
            {projects.slice(0, 10).map(project => (
              <article key={project.title} className="flex flex-col">
                <div className="">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    className={clsx(
                      !project.githubUrl && !project.liveUrl
                        ? 'contents'
                        : 'flex flex-row gap-2 items-center text-accent hover:cursor-pointer hover:text-accent-light',
                    )}
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-base font-medium font-raleway">
                      {project.title}
                    </h3>
                    {project.liveUrl ||
                      (project.githubUrl && (
                        <>
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </>
                      ))}
                  </a>
                </div>
                <div className="text-base font-light font-raleway">
                  {project.technologies.map((tech, index) => (
                    <React.Fragment key={tech.name}>
                      {tech.name}
                      {index < project.technologies.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                </div>
              </article>
            ))}
            <p className="text-base font-light font-raleway italic">
              (And more...)
            </p>
          </div>
          <Button href="/projects" variant="text">
            See More Details &gt;&gt;
          </Button>
        </section>
      </div>

      <div className="flex-[0.3 1 40%] lg:flex-[0.3 1 30%] flex flex-col">
        <section
          className="flex flex-col mb-10"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="text-xl font-tokyo text-textBlack mb-2"
          >
            Technical Skills
          </h2>
          {technicalSkills.map((skillCategory, index) => (
            <div key={index} className="flex flex-col mb-3">
              <h3 className="text-base font-medium font-raleway">
                {skillCategory.category}
              </h3>
              <div className="flex flex-col text-base font-light font-raleway">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <React.Fragment key={skillIndex}>
                    {skill}
                    {skillIndex < skillCategory.skills.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default About;
