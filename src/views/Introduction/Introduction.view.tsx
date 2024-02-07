import React from 'react';
import tw from 'twin.macro';
import { Button } from '../../components/atoms';
import url from '../../constants/url.constant';

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
        <Accent>Software Engineer</Accent>
        <Heading>Eginata Kasan</Heading>
        <Description>
          A <HighlightText>Software Engineer</HighlightText> currently pursuing
          Master's Degree in Information Technology at UTS.
          <br />
          <br />
          Adept in Web & Mobile App development. My past experience as a UX
          Engineer means I specialize in building precise UI with detailed
          micro-interactions to better user experience across products.
        </Description>
        <Button tw="mt-16">
          <a
            href={url.resume}
            target="_blank"
            download="Eginata Kasan's Resume.pdf"
          >
            Check out my Resume
          </a>
        </Button>
      </Content>
    </Container>
  );
};

export default IntroductionView;
