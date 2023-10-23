import React, { useEffect } from 'react';
import tw from 'twin.macro';
import PlaygroundView from '../../views/Playground/Playground.view';
import WorkEducationView from '../../views/WorkEducation/WorkEducation.view';
import useAboutViewModel from './About.viewModel';
import texturedBg from './../../assets/images/texture.png';
import TopNavigation from '../../components/organisms/TopNavigation.organism';

const AboutPage = () => {
  const { aboutMeItems } = useAboutViewModel();

  return (
    <div
      css={tw`w-full h-full flex flex-col bg-repeat overflow-auto snap-y snap-mandatory `}
      style={{ backgroundImage: `url(${texturedBg})` }}
    >
      <TopNavigation />
      <WorkEducationView items={aboutMeItems} />
    </div>
  );
};

export default AboutPage;
