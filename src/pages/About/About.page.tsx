import React from 'react';
import tw from 'twin.macro';
import BottomContacts from '../../components/organisms/BottomContacts.organism';
import IntroductionView from '../../views/Introduction/Introduction.view';
import AllAbout from '../../components/organisms/AllAbout.organism';

const AboutPage = () => {
  return (
    <div css={tw`w-full h-full min-h-screen flex flex-col bg-white`}>
      <div tw="flex-1 flex-col">
        <IntroductionView />
        <AllAbout />
      </div>
      <BottomContacts />
    </div>
  );
};

export default AboutPage;
