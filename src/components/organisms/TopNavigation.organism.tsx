import React from 'react';
import tw, { styled } from 'twin.macro';

type Props = {
  mode?: boolean;
};

// #region STYLED
const Container = styled.div(() => [
  tw`fixed flex h-auto top-0 left-0 right-2 z-50`,
]);
const Content = styled.div(({ mode }: Props) => [
  tw`flex-1 flex flex-row justify-between items-center px-8 md:(px-12) pt-8 py-6 z-50 text-accent border-0 bg-white bg-opacity-80 backdrop-blur-sm`,
  mode && tw`border-b border-b-textBlack`,
]);
const Navigation = tw.div`flex space-x-10 items-center`;
const LgNavLink = tw.a`hover:(text-accent-light) flex flex-row gap-4 items-center [font-size: 18px] text-current font-tokyo transition-colors`;
// #endregion

const TopNavigation = ({ mode }: Props) => {
  return (
    <Container>
      <Content mode={mode}>
        <Navigation>
          <LgNavLink href="/">Projects</LgNavLink>
          <LgNavLink href="/about">About</LgNavLink>
        </Navigation>
      </Content>
    </Container>
  );
};

export default TopNavigation;
