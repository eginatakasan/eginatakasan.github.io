import React from 'react';
import tw from 'twin.macro';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { Text } from '../../components/atoms';

// #region STYLED
const Container = tw.div`flex flex-col h-screen min-h-[820px] box-border w-full relative overflow-hidden md:(min-h-screen) snap-start`;
const Greeting = tw.div`flex flex-[1 1] flex-col pt-12 pb-5 pl-0 pr-10 text-right md:(pl-4 pr-0 flex-col text-left max-w-[520px] animate-slideInRight)`;
const SmScreenView = tw.div`w-full flex-[0.5] flex-col md:(hidden)`;
const Row = tw.div`flex flex-row`;
const LgScreenView = tw.div`w-full flex-[0.5] hidden flex-col md:(flex) relative`;
const Star = tw.div`absolute w-1 h-1 bg-accent animate-blink`;
const StarLg = tw.div`absolute w-1.5 h-1.5 bg-accent animate-blink`;
const MissyImg = tw.img`absolute bottom-4 left-10`;
// #endregion

const LandingView = () => {
  return (
    <Container>
      <Row tw="flex-1 justify-center items-center md:(items-end)">
        <div tw="hidden md:(flex flex-[0.5])" />
        <Greeting>
          <Text.HeadingOne tw="font-sofiaSans font-normal text-accent">
            EGINATA KASAN
          </Text.HeadingOne>
          <Text.Small tw="text-white font-light italic">(eggy)</Text.Small>
          <Text.Title tw="text-white">
            Software Developer & UI/UX Specialist
          </Text.Title>
        </Greeting>
      </Row>

      <SmScreenView></SmScreenView>

      <LgScreenView></LgScreenView>

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

      <Star tw="top-1/3 left-1/3" />
      <StarLg tw="top-1/2 left-1/3 [animation-delay: 500ms]" />
      <Star tw="top-[20%] left-[10%] [animation-delay: 1700ms]" />
      <Star tw="top-1/2 left-1/2 [animation-delay: 200ms]" />
      <StarLg tw="top-[30%] right-[10%] [animation-delay: 1700ms]" />
      <Star tw="top-2/3 left-1/4 [animation-delay: 800ms]" />
      <Star tw="top-1/3 right-1/4 [animation-delay: 1000ms]" />
      <StarLg tw="bottom-1/4 left-[15%] [animation-delay: 200ms]" />
      <Star tw="bottom-1/2 left-1/4 [animation-delay: 600ms]" />
      <Star tw="bottom-[20%] right-[20%] [animation-delay: 500ms]" />

      {/* <MissyImg src={Missy} /> */}
    </Container>
  );
};

export default LandingView;
