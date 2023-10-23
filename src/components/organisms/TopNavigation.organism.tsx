import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

type Props = {
  scrollYPos?: number;
};

// #region STYLED
const Container = styled.div(() => [
  tw`hidden md:(fixed flex h-auto w-full top-0 inset-x-0 z-50)`,
]);
const Content = tw.div`flex-1 flex flex-row justify-between items-center px-12 pt-8 py-3 font-semibold z-50`;
const FrostedBg = styled.div(({ scrollYPos }: Props) => [
  tw`absolute inset-0 border-b border-b-frosted bg-[#30303030] backdrop-blur-lg z-0 transition-opacity opacity-100 [transition-duration: 250ms]`,
  typeof scrollYPos === 'number' &&
    scrollYPos < window.innerHeight &&
    tw`opacity-0`,
]);
const Navigation = tw.div`flex space-x-10 items-center`;
const Contacts = tw.div`inline-flex w-max flex-row items-center justify-end space-x-6 px-6 py-2 border border-solid border-accent rounded-full`;
const ContactLink = tw.a`text-accent w-8 h-8`;
const LgNavLink = tw.a`hidden md:(flex flex-row gap-4 items-center [font-size: 18px] text-accent font-tokyo)`;
// #endregion

const TopNavigation = ({ scrollYPos = 0 }: Props) => {
  return (
    <Container>
      <Content>
        <Navigation>
          <LgNavLink href="/">Home</LgNavLink>
          <LgNavLink href="about">About</LgNavLink>
          <LgNavLink href="playground">Playground</LgNavLink>
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
      </Content>

      <FrostedBg scrollYPos={scrollYPos} />
    </Container>
  );
};

export default TopNavigation;
