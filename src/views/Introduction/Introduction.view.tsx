import Vectors from '../../assets/vectors';
import React from 'react';
import tw from 'twin.macro';
import Text from '../../components/atoms/Text.atom';
import Button from '../../components/atoms/Button.atom';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import url from '../../constants/url.constant';
import profile from '../../assets/images/profile.jpg';

// #region STYLED
const Container = tw.div`flex flex-row min-h-full`;
const ProfileImage = tw.img`w-auto max-w-[50vw] h-full`;
const Description = tw.div`flex py-40 px-20 `;
// #endregion

const IntroductionView = () => {
  return (
    <Container>
      <ProfileImage src={profile} />
      <Description>
        Hi! I'm Eginata "Eggy" Kasan, a Software Engineer from Indonesia. I make
        websites or mobile applications, and occasionally design UIs. I like
        stressful strategy games, but also cozy simulation video games.
      </Description>
    </Container>
  );
};

export default IntroductionView;
