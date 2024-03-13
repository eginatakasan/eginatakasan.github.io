import React from 'react';
import tw from 'twin.macro';
import useHomeViewModel from './Projects.viewModel';
import TopNavigation from '../../components/organisms/TopNavigation.organism';

const ProjectsPage = () => {
  const { sectionIdx, onScroll, scrollY, projectItems } = useHomeViewModel();

  return (
    <div css={tw`w-full overflow-auto snap-y snap-mandatory`}>
      <TopNavigation />
    </div>
  );
};

export default ProjectsPage;
