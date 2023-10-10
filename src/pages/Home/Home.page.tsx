import React, { useEffect } from 'react';
import tw from 'twin.macro';
import PlaygroundView from '../../views/Playground/Playground.view';
import WorkEducationView from '../../views/WorkEducation/WorkEducation.view';
import LandingView from '../../views/Landing/Landing.view';
import useHomeViewModel from './Home.viewModel';
import SectionIndicator from '../../components/atoms/SectionIndicator/SectionIndicator.atom';
import texturedBg from './../../assets/images/texture.png';
import TopNavigation from '../../components/organisms/TopNavigation.organism';
import WorkEducation from '../../views/WorkEducation/WorkEducation.view';
import ProjectsView from '../../views/Projects/Projects.view';
import BottomInformation from '../../components/organisms/BottomInformation.organism';

const HomePage = () => {
  const {
    aboutMeItems,
    playgroundItems,
    sectionIdx,
    onScroll,
    scrollY,
    projectItems,
  } = useHomeViewModel();

  return (
    <div
      css={tw`w-full flex flex-col bg-repeat overflow-auto snap-y snap-mandatory`}
      style={{ backgroundImage: `url(${texturedBg})` }}
      onScroll={onScroll}
    >
      <LandingView />
      <WorkEducationView items={aboutMeItems} />
      <ProjectsView items={projectItems} />
      <BottomInformation />
      <TopNavigation scrollYPos={scrollY} />
      <SectionIndicator pageCount={3} activeIdx={sectionIdx} />
    </div>
  );
};

export default HomePage;
