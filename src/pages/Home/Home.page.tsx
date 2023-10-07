import React, { useEffect } from 'react';
import tw from 'twin.macro';
import PlaygroundView from '../../views/Playground/Playground.view';
import AboutView from '../../views/About/About.view';
import LandingView from '../../views/Landing/Landing.view';
import useHomeViewModel from './Home.viewModel';
import SectionIndicator from '../../components/atoms/SectionIndicator/SectionIndicator.atom';
import texturedBg from './../../assets/images/texture.png';

const HomePage = () => {
  const { aboutMeItems, playgroundItems, sectionIdx, onScroll } =
    useHomeViewModel();

  return (
    <div
      css={tw`w-full h-full flex flex-col bg-repeat overflow-auto`}
      style={{ backgroundImage: `url(${texturedBg})` }}
      onScroll={onScroll}
    >
      <SectionIndicator pageCount={2} activeIdx={sectionIdx} />
      <LandingView />
      <AboutView items={aboutMeItems} />
    </div>
  );
};

export default HomePage;
