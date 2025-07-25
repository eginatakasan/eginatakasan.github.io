import React from 'react';
import AllAbout from '../src/components/organisms/AllAbout';
import BottomContacts from '../src/components/organisms/BottomContacts';
import IntroductionView from '../src/components/organisms/Introduction';

const AboutPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex-col">
        <IntroductionView />
        <AllAbout />
      </div>
      <BottomContacts />
    </div>
  );
};

export default AboutPage;
