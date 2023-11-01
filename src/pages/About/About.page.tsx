import React, { useEffect } from 'react';
import tw from 'twin.macro';
import PlaygroundView from '../../views/Playground/Playground.view';
import WorkEducationView from '../../views/WorkEducation/WorkEducation.view';
import useAboutViewModel from './About.viewModel';
import TopNavigation from '../../components/organisms/TopNavigation.organism';
import IntroductionView from '../../views/Introduction/Introduction.view';
import BottomInformation from '../../components/organisms/BottomInformation.organism';

const AboutPage = () => {
  const { aboutMeItems } = useAboutViewModel();

  return (
    <div css={tw`w-full h-full flex flex-col bg-cover overflow-auto`}>
      <TopNavigation withBackground />
      <IntroductionView />
      <WorkEducationView items={aboutMeItems} />
      <BottomInformation solid />
    </div>
  );
};

export default AboutPage;
