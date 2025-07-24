import React from 'react';
import BottomContacts from '../../components/organisms/BottomContacts';
import IntroductionView from '../../views/Introduction/Introduction.view';
import AllAbout from '../../components/organisms/AllAbout';

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
