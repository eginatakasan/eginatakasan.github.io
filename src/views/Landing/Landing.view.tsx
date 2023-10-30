import Vectors from '../../assets/vectors';
import React from 'react';
import tw from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import url from '../../constants/url.constant';
import { Text } from '../../components/atoms';

// #region STYLED
const Container = tw.div`flex flex-col h-screen min-h-[820px] box-border w-full relative overflow-hidden md:(min-h-screen) snap-start`;
const Greeting = tw.div`flex flex-[1 1] flex-col pt-12 pb-5 pl-20 md:(pl-4 flex-col text-left max-w-[520px] animate-slideInRight)`;
const SmScreenView = tw.div`w-full flex-[0.5] flex-col md:(hidden)`;
const Row = tw.div`flex flex-row`;
const LgScreenView = tw.div`w-full flex-[0.5] hidden flex-col md:(flex) relative`;
// #endregion

const LandingView = () => {
  return (
    <Container>
      <Row tw="flex-1 justify-center items-center md:(items-end)">
        <div tw="hidden md:(flex flex-[0.5])" />
        <Greeting>
          <Text.Small tw="text-white font-light italic">(eggy)</Text.Small>
          <Text.HeadingOne tw="font-sofiaSans font-normal text-accent">
            EGINATA KASAN
          </Text.HeadingOne>
          <div tw="mt-8 my-4 w-10 h-1 bg-white" />
          <Text.Title tw="text-white">
            Software Developer & UI/UX Specialist
          </Text.Title>
        </Greeting>
      </Row>

      <SmScreenView>
        <Vectors.LandingWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-[20vh] z-0`}
        />
      </SmScreenView>

      <LgScreenView>
        <Vectors.LandingWave
          css={tw`absolute inset-x-0 w-full h-auto bottom-[10vh] opacity-50 z-0`}
        />
      </LgScreenView>

      <a
        href="#about"
        className="group"
        css={tw`absolute inline-flex flex-col items-center bottom-1.5 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer z-10`}
      >
        <ChevronDoubleDownIcon
          width={40}
          tw="text-inherit stroke-1 group-hover:(text-inherit) md:(text-white stroke-2) animate-bounce [animation-duration: 4s]"
        />
      </a>
    </Container>
  );
};

export default LandingView;
