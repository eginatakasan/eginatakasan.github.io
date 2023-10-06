import Vectors from '../../assets/vectors';
import React from 'react';
import tw from 'twin.macro';
import Text from '../../components/atoms/Text/Text.atom';
import Button from '../../components/atoms/Button/Button.atom';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import url from '../../constants/url.constant';

// #region STYLED
const Container = tw.div`flex flex-col h-screen min-h-[820px] box-border w-full relative overflow-hidden md:(min-h-screen)`;
const Header = tw.div`hidden md:(flex flex-row justify-between items-center px-12 pt-8 py-3 font-semibold mb-12)`;
const Navigation = tw.div`flex space-x-10`;
const Contacts = tw.div`inline-flex w-max flex-row items-center justify-end space-x-6 px-6 py-2 border border-solid border-accent rounded-full`;
const Greeting = tw.div`flex flex-[1 1] flex-col pt-12 pb-5 pl-12 md:(pt-14 pl-4 flex-col text-left max-w-[520px])`;
const About = tw.div`w-full flex flex-col relative mt-[0px]`;
const Portfolio = tw.div`w-full flex flex-col relative`;
const ContactLink = tw.a`text-accent w-8 h-8`;
const SmScreenView = tw.div`w-full flex flex-col md:(hidden)`;
const Row = tw.div`flex flex-row`;

const LgScreenView = tw.div`w-full flex-1 hidden flex-col md:(flex) relative`;
// #region TEXT
const LgNavLink = tw.a`hidden md:(inline [font-size: 18px] text-accent font-tokyo)`;
// #endregion

// #endregion

const LandingView = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <LgNavLink href="#about">About</LgNavLink>
          <LgNavLink href="#playground">Playground</LgNavLink>
        </Navigation>

        <Contacts>
          <ContactLink href={url.mail}>
            <EnvelopeIcon />
          </ContactLink>
          <ContactLink href={url.linkedin}>
            <Icon.LinkedIn css={tw`w-8 h-8`} />
          </ContactLink>
          <ContactLink href={url.github}>
            <Icon.Github css={tw`w-8 h-8`} />
          </ContactLink>
        </Contacts>
      </Header>

      <Row tw="flex-1 justify-center items-center">
        <div tw="hidden md:(flex flex-[0.5])" />
        <Greeting>
          <Text.Small tw="text-white font-light italic">(eggy)</Text.Small>
          <Text.HeadingOne tw="font-sofiaSans font-normal text-mustard">
            EGINATA KASAN
          </Text.HeadingOne>
          <div tw="mt-8 my-4 w-10 h-1 bg-white" />
          <Text.Title tw="text-white">
            Software Developer & UI/UX Specialist
          </Text.Title>
        </Greeting>
      </Row>

      <SmScreenView>
        <Portfolio>
          <div
            css={tw`absolute bg-primary-dark -top-2 -left-[10%] w-[120%] h-[140px] rounded-b-[50%]`}
          />

          <div css={tw`flex flex-col items-center mt-8 z-10 md:(mt-4 mb-10)`}>
            <Text.Small css={tw`text-white text-center whitespace-pre`}>
              Welcome to my Portfolio website!
              <br />
              Click below to see my resume
            </Text.Small>
            <div css={tw`mt-[32px]`}>
              <a href={url.resume} download="Eginata Kasan - resume">
                <Button css={tw`items-center justify-center`}>
                  <ArrowDownTrayIcon css={tw`inline-block w-4 h-4 mr-2`} />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </Portfolio>
      </SmScreenView>

      <LgScreenView>
        <Vectors.LandingRoundedBg
          css={tw`min-w-full h-[30vh] z-10 absolute bottom-0`}
        />
        <Vectors.LandingWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-[20vh] opacity-20 z-0`}
        />
      </LgScreenView>

      <a
        href="#about"
        className="group"
        css={tw`absolute inline-flex flex-col items-center bottom-1.5 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer z-10`}
      >
        <Text.Small
          css={tw`text-center text-inherit md:(font-semibold text-textWhite) mb-2`}
        >
          Check out my projects
          {/* <span css={tw`hidden md:inline`}> and playground</span> */}
        </Text.Small>
        <ChevronDoubleDownIcon
          width={40}
          tw="text-inherit stroke-1 group-hover:(text-inherit) md:(text-white stroke-2) animate-bounce [animation-duration: 4s]"
        />
      </a>
    </Container>
  );
};

export default LandingView;
