import React from 'react';
import tw, { styled } from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

type Props = {
  solid?: boolean;
};

// #region STYLED
const Container = styled.div(() => [
  tw`flex flex-row justify-end px-10 py-6 space-x-4  md:(space-x-6 px-24) w-full border-t border-solid border-t-textBlack`,
]);
const ContactLink = tw.a`text-current w-8 h-8 p-4 box-content hover:(text-accent scale-110) transition-all`;
// #endregion

const BottomContacts = () => {
  return (
    <Container>
      <ContactLink href={url.mail}>
        <EnvelopeIcon />
      </ContactLink>
      <ContactLink href={url.linkedin}>
        <Icon.LinkedIn css={tw`w-8 h-8`} />
      </ContactLink>
      <ContactLink href={url.github}>
        <Icon.Github css={tw`w-8 h-8`} />
      </ContactLink>
    </Container>
  );
};

export default BottomContacts;
