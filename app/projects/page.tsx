import React from 'react';
import TopNavigation from '../../src/components/organisms/TopNavigation';
import BottomContacts from '../../src/components/organisms/BottomContacts';
import ProjectSearch from '../../src/components/organisms/ProjectSearch';
import { getFormattedBuildDate } from '../../src/constants/buildInfo.constant';

const ProjectsPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <TopNavigation />
      <div className="flex flex-col mt-32 px-8 mr-8 mb-24 md:mt-32 md:px-16 md:mx-auto xl:max-w-[1280px]">
        <section className="max-w-6xl mx-auto w-full mb-24 md:mb-20">
          <h1 className="text-7xl sm:text-[5rem] mt-2 font-cardo font-bold text-textBlack pr-1 border-solid">
            My Projects
          </h1>
          <div className="block mt-4 p-1 max-w-[600px] text-justify font-medium text-textBlack font-raleway">
            Here are some of the projects I've worked on. I might have more
            since I'm always working on something new! Feel free to contact me
            if you're interested in any of my projects.
          </div>
          <p className="text-sm mt-2 italic font-raleway text-textBlack">
            (last updated: {getFormattedBuildDate()})
          </p>
        </section>

        <ProjectSearch />
      </div>

      <BottomContacts />
    </div>
  );
};

export default ProjectsPage;
