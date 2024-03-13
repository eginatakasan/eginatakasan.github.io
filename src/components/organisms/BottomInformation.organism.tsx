import React from 'react';
import tw, { styled } from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';
import TextAtom from '../atoms/Text.atom';

type Props = {
  solid?: boolean;
};

// #region STYLED
const Container = styled.div(({ solid }: { solid?: boolean }) => [
  tw`flex flex-col h-auto px-10 pt-6 pb-10 md:(px-40) w-full bg-frosted backdrop-blur snap-end`,
  solid && tw`bg-primary`,
]);
const Heading = tw(
  TextAtom.HeadingTwo,
)`font-sofiaSans text-secondary-dark mb-2 uppercase`;
const Contacts = tw.div`flex flex-col items-start justify-start space-y-2`;
const SmallText = tw.p`text-xs font-light text-current`;
const IconContainer = tw.div``;
const Contact = tw.a`flex-1 pl-4 flex flex-row space-x-4 items-center text-secondary-dark`;
// #endregion

const BottomInformation = ({ solid }: Props) => {
  return (
    <Container solid={solid}>
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
          <SmallText>linkedin.com/in/eginata-kasan</SmallText>
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
