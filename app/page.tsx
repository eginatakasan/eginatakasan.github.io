import React from 'react';
import About from '../src/components/organisms/About';
import BottomContacts from '../src/components/organisms/BottomContacts';
import IntroductionView from '../src/components/organisms/Introduction';

const AboutPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex-col">
        <IntroductionView />
        <About />
      </div>
      <BottomContacts />
    </div>
  );
};

export default AboutPage;
