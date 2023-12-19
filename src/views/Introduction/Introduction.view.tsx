import React from 'react';
import tw from 'twin.macro';
import { Button } from '../../components/atoms';

// #region STYLED
const Container = tw.div`flex flex-col mt-32 mb-24 mr-4 ml-8 md:(mt-32 px-16 mb-20) lg:(mx-auto px-24 max-w-[1280px])`;
const Content = tw.div`flex flex-col items-start w-full`;
const Accent = tw.h3`text-xl p-1 font-tokyo text-lightGray`;
const Heading = tw.h1`text-[5rem] font-cardo font-bold text-textBlack pr-1 border-solid`;
const Description = tw.div`block mt-16 p-1 max-w-[560px] text-justify font-medium text-textBlack font-raleway`;
const HighlightText = tw.span`text-accent`;
// #endregion

const IntroductionView = () => {
  return (
    <Container>
      <Content>
        <Accent>UX Engineer</Accent>
        <Heading>Eginata Kasan</Heading>
        <Description>
          A <HighlightText>UX Engineer</HighlightText> currently working for
          Nomura Research Institute Indonesia.
          <br />
          <br />
          Specializes in building precise UI with detailed micro-interactions to
          better user experience across products. Adept in Web & Mobile App
          development.
        </Description>
        <Button tw="mt-16">Check out my Resume</Button>
      </Content>
    </Container>
  );
};

export default IntroductionView;
