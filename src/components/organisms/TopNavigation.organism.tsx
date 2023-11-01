import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

type Props = {
  scrollYPos?: number;
  withBackground?: boolean;
};
type ThemeProps = {
  transparent?: boolean;
};

// #region STYLED
const Container = styled.div(() => [
  tw`hidden md:(fixed flex h-auto top-0 left-0 right-2 z-50)`,
]);
const Content = styled.div(({ transparent }: ThemeProps) => [
  tw`flex-1 flex flex-row justify-between items-center px-12 pt-8 py-3 font-semibold z-50 text-textWhite`,
  transparent && tw`text-secondary-light`,
]);
const FrostedBg = styled.div(({ transparent }: ThemeProps) => [
  tw`absolute inset-0 border-b border-b-frosted bg-frosted backdrop-blur-lg z-0 transition-opacity opacity-100 [transition-duration: 250ms]`,
  transparent && tw`opacity-0`,
]);
const Navigation = tw.div`flex space-x-10 items-center`;
const Contacts = tw.div`inline-flex w-max flex-row items-center justify-end space-x-6 px-6 py-2 border border-solid border-current rounded-full`;
const ContactLink = tw.a`text-current w-8 h-8 transition-colors`;
const LgNavLink = tw.a`hidden md:(flex flex-row gap-4 items-center [font-size: 18px] text-current font-tokyo) transition-colors`;
// #endregion

const TopNavigation = ({ scrollYPos = 0, withBackground }: Props) => {
  const transparent = useMemo(
    () => !withBackground && typeof scrollYPos === 'number' && scrollYPos === 0,
    [withBackground, scrollYPos],
  );

  return (
    <Container>
      <Content transparent={transparent}>
        <Navigation>
          <LgNavLink href="/">Home</LgNavLink>
          <LgNavLink href="/about">About</LgNavLink>
          {/* <LgNavLink href="/playground">Playground</LgNavLink> */}
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

      <FrostedBg transparent={transparent} />
    </Container>
  );
};

export default TopNavigation;
