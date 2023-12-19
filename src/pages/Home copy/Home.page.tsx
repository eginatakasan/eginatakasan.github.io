import React from 'react';
import tw from 'twin.macro';
import LandingView from '../../views/Landing/Landing.view';
import useHomeViewModel from './Home.viewModel';
import SectionIndicator from '../../components/atoms/SectionIndicator.atom';
import pixelBg from './../../assets/images/pixel-2.png';
import TopNavigation from '../../components/organisms/TopNavigation.organism';
import ProjectsView from '../../views/Projects/Projects.view';
import BottomInformation from '../../components/organisms/BottomInformation.organism';

const HomePage = () => {
  const { sectionIdx, onScroll, scrollY, projectItems } = useHomeViewModel();

  return (
    <div
      css={tw`w-full overflow-auto snap-y snap-mandatory`}
      onScroll={onScroll}
    >
      <div
        css={tw`w-full flex flex-col bg-cover bg-bottom `}
        style={{ backgroundImage: `url(${pixelBg})` }}
      >
        <LandingView />
        <ProjectsView items={projectItems} />
        <BottomInformation />
        <TopNavigation scrollYPos={scrollY} />
        <SectionIndicator pageCount={2} activeIdx={sectionIdx} />
      </div>
    </div>
  );
};

export default HomePage;
