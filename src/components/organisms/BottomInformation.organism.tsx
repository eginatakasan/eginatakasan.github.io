import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';
import TextAtom from '../atoms/Text.atom';

// #region STYLED
const Container = styled.div(() => [
  tw`flex flex-col h-auto px-10 pt-10 py-16 md:(px-40) w-full bg-textBlack snap-end`,
]);
const Heading = tw(TextAtom.HeadingTwo)`text-primary-light mb-8`;
const Contacts = tw.div`flex flex-col items-start justify-start space-y-4`;
const SmallText = tw.p`text-sm font-light text-current`;
const IconContainer = tw.div``;
const Contact = tw.a`flex-1 pl-4 flex flex-row space-x-4 items-center text-textWhite`;
// #endregion

const BottomInformation = () => {
  return (
    <Container>
      <Heading>Contacts</Heading>
      <Contacts>
        <Contact href={url.mail}>
          <IconContainer>
            <EnvelopeIcon width={16} height={16} />
          </IconContainer>
          <SmallText>eginatakasan@gmail.com</SmallText>
        </Contact>
        <Contact href={url.linkedin}>
          <IconContainer>
            <Icon.LinkedIn css={tw`w-4 h-4`} />
          </IconContainer>
          <SmallText>linkedin.com/in/eginata-kasan/</SmallText>
        </Contact>
        <Contact href={url.github}>
          <IconContainer>
            <Icon.Github css={tw`w-4 h-4`} />
          </IconContainer>
          <SmallText>github.com/eginatakasan</SmallText>
        </Contact>
      </Contacts>
    </Container>
  );
};

export default BottomInformation;
