import React from 'react';

const About = () => {
  // Data for Work Experience section
  const workExperience = [
    {
      title: 'FullStack Engineer',
      company: 'QSStudio, Sydney',
      period: 'since May 2024',
    },
    {
      title: 'UX Engineer',
      company: 'Nomura Research Institute Indonesia, Jakarta',
      period: 'October 2021 - January 2024 (>2 years)',
    },
    {
      title: 'Game Programmer Intern',
      company: 'Agate Games Studio',
      period: '2018',
    },
  ];

  // Data for Education section
  const education = [
    {
      institution: 'University of Technology Sydney',
      degree: 'Master of Information Technology',
      period: 'Since February 2024\n(Expected Graduation: December 2025)',
    },
    {
      institution: 'Bandung Institue of Technology',
      degree: 'Bachelor of Science in Information Technology',
      period: 'July 2021',
    },
  ];

  // Data for Projects section
  const projects = [
    {
      title: 'AI Powered Beauty Assistant Mobile App',
      technologies: 'React Native, AWS CDK, Typescript, Supabase',
    },
    {
      title: 'Petrol Finder & Price Tracker Mobile App',
      technologies: 'React Native, Typescript, Supabase, MongoDB',
    },
    {
      title: 'Food Stock Management App',
      technologies: 'React Native, Typescript, Nativewind, Redux',
    },
    {
      title: 'Softphone Feature for VR App',
      technologies: 'React, Typescript, AWS Connect',
    },
    {
      title: 'Finance & Investment Website',
      technologies: 'Vue.js, CSS',
    },
    {
      title: 'Producer-Consumer-Reseller Livestream Website',
      technologies: 'React, Typescript, Tailwind CSS',
    },
    {
      title: 'Qash Point-of-Sales System',
      technologies: 'React, Typescript, Redux, Sass',
    },
    {
      title: 'Lawassier. Website',
      technologies: 'Wordpress development (Local, PHP, JS, HTML/CSS)',
    },
    {
      title: 'The Dentists Website',
      technologies:
        'Wordpress development (Local, PHP, JS, HTML/CSS, Tailpress)',
    },
  ];

  // Data for Technical Skills section
  const technicalSkills = [
    {
      category: 'Web Development',
      skills: [
        'React',
        'Vue.js',
        'Wordpress',
        '(PHP)',
        'Redux',
        'Tailwind',
        'CSS',
        'Sass',
      ],
    },
    {
      category: 'Mobile/App Development',
      skills: ['React Native', 'Android Studio', 'Unity', 'Nativewind'],
    },
  ];

  return (
    <section
      className="flex flex-col px-10 pt-10 pb-5 justify-around md:flex-row md:py-5 md:px-16 xl:mx-auto xl:px-24 xl:max-w-[1280px] w-full relative"
      aria-label="Eginata Kasan's Work Experience, Education, and Projects"
    >
      <div className="absolute inset-x-16 xl:inset-x-24 top-0 border-t border-solid border-t-lightGray opacity-60"></div>

      <div className="flex-[0.3 1 30%] flex flex-col">
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

      <div className="flex-[0.3 1 30%] flex flex-col">
        <section
          className="flex flex-col mb-10"
          aria-labelledby="projects-heading"
        >
          <h2
            id="projects-heading"
            className="text-xl font-tokyo text-textBlack mb-2"
          >
            Projects
          </h2>
          <div className="flex flex-col gap-3 mb-3">
            {projects.map((project, index) => (
              <article key={index} className="flex flex-col">
                <h3 className="text-base font-medium font-raleway">
                  {project.title}
                </h3>
                <div className="text-base font-light font-raleway">
                  {project.technologies}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="flex-[0.3 1 30%] flex flex-col">
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
