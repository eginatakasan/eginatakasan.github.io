import React from 'react';
import tw, { styled } from 'twin.macro';

// #region STYLED
const Container = styled.div(() => [
  tw`flex flex-col px-10 py-5 justify-around md:(flex-row px-16) xl:(mx-auto px-24 max-w-[1280px]) w-full relative`,
]);
const Line = tw.div`absolute md:(inset-x-16) xl:(inset-x-24) top-0 border-t border-solid border-t-lightGray opacity-60`;
const Column = tw.div`flex-[0.3 1 30%] flex flex-col`;
const Section = tw.div`flex flex-col mb-10`;
const SectionContent = tw.div`flex flex-col mb-3`;
const Title = tw.h2`text-xl font-tokyo text-textBlack mb-2`;
const Heading = tw.h3`text-base font-medium font-raleway`;
const Description = tw.div`text-base font-light font-raleway`;
const List = tw.div`flex flex-col text-base font-light font-raleway`;
const Italics = tw(Description)`italic`;
// #endregion

const AllAbout = () => {
  return (
    <Container>
      <Line />
      <Column>
        <Section>
          <Title>Work Experience</Title>
          <SectionContent>
            <Heading>UX Engineer</Heading>
            <Description>Nomura Research Institute Indonesia</Description>
            <Italics>since October 2021</Italics>
          </SectionContent>
          <SectionContent>
            <Heading>Game Programmer Intern</Heading>
            <Description>Agate Games Studio</Description>
            <Italics>2018</Italics>
          </SectionContent>
        </Section>
        <Section>
          <Title>Education</Title>
          <SectionContent>
            <Heading>University of Technology Sydney</Heading>
            <Description>Master of Information Technology</Description>
            <Italics>Commencing February 2024</Italics>
          </SectionContent>
          <SectionContent>
            <Heading>Bandung Institue of Technology</Heading>
            <Description>
              Bachelor of Science in Information Technology
            </Description>
            <Italics>July 2021</Italics>
          </SectionContent>
        </Section>
      </Column>

      <Column>
        <Section>
          <Title>Projects</Title>
          <SectionContent>
            <Heading>Fried Food Management App</Heading>
            <Description>
              React Native, Typescript, Nativewind, Redux
            </Description>
          </SectionContent>
          <SectionContent>
            <Heading>Softphone Feature for VR App</Heading>
            <Description>React, AWS Connect</Description>
          </SectionContent>
          <SectionContent>
            <Heading>Finance & Investment Website</Heading>
            <Description>Vue.js, CSS</Description>
          </SectionContent>
          <SectionContent>
            <Heading>Producer-Consumer-Reseller Livestream Website</Heading>
            <Description>React, Typescript, Tailwind CSS</Description>
          </SectionContent>
          <SectionContent>
            <Heading>Qash Point-of-Sales System</Heading>
            <Description>React, Typescript, Redux, Sass</Description>
          </SectionContent>
          <SectionContent>
            <Heading>Lawassier. Website</Heading>
            <Description>
              Wordpress development (Local, PHP, JS, HTML/CSS)
            </Description>
          </SectionContent>
          <SectionContent>
            <Heading>The Dentists Website</Heading>
            <Description>
              Wordpress development (Local, PHP, JS, HTML/CSS, Tailpress)
            </Description>
          </SectionContent>
        </Section>
      </Column>

      <Column>
        <Section>
          <Title>Technical Skills</Title>
          <SectionContent>
            <Heading>Web Development</Heading>
            <List>
              React
              <br />
              Vue.js
              <br />
              Wordpress
              <br />
              (PHP)
              <br />
              Redux
              <br />
              Tailwind
              <br />
              CSS
              <br />
              Sass
            </List>
          </SectionContent>
          <SectionContent>
            <Heading>Mobile/App Development</Heading>
            <List>
              React Native
              <br />
              Android Studio
              <br />
              Unity
              <br />
              Nativewind
            </List>
          </SectionContent>
        </Section>
      </Column>
    </Container>
  );
};

export default AllAbout;
