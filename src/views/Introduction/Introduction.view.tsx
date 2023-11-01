import React from 'react';
import tw from 'twin.macro';

import profile from '../../assets/images/profile2.jpg';
import backgroundImg from '../../assets/images/about-bg.png';

// #region STYLED
const Container = tw.div`flex min-h-full bg-cover bg-left-bottom bg-primary-dark`;
const Content = tw.div`flex flex-col items-start md:(flex-row justify-center items-center) w-full mt-14 mb-10 mr-4 ml-8 md:(mt-32 mb-20 mx-20 space-x-8)`;
const Column = tw.div`flex flex-col items-start ml-4 my-8 md:(my-0)`;
const ProfileImage = tw.img`w-[180px] h-[180px] md:(w-auto h-full) rounded-[120px] object-cover`;
const Heading = tw.h1`text-5xl text-primary-light`;
const Description = tw.div`flex mt-8 p-2 md:(p-6 max-w-[480px]) items-center justify-center border-primary bg-frosted bg-opacity-60 rounded-2xl
text-justify font-light text-textWhite font-nunitoSans `;
// #endregion

const IntroductionView = () => {
  return (
    <Container style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Content>
        <ProfileImage src={profile} />
        <Column>
          <Heading>Hi There!</Heading>
          <Description>
            <p>
              My name Eginata <span tw="text-accent">"Eggy"</span> Kasan, a
              Software Engineer from Indonesia.
            </p>
          </Description>
          <Description>
            I have over two years of experience making web / mobile
            applications, and occasionally some UI designs.
            <br />
            <br /> I like reading, drawing, cats, and video games (especially
            complicated strategy and cozy simulation games).
          </Description>
        </Column>
      </Content>
    </Container>
  );
};

export default IntroductionView;
