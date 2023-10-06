import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

type Props = {
  activeIdx: number;
  pageCount: number;
};

const Container = tw.div`fixed top-1/2 left-8 flex-col w-3 h-auto space-y-6 z-50`;
const Bullet = styled.div(
  ({ activeIdx, index }: { activeIdx: number; index: number }) => [
    tw`w-3 h-3 border border-solid bg-gray-300 opacity-60 rotate-45`,
    activeIdx === index && tw`border-accent bg-accent opacity-100`,
  ],
);

const SectionIndicator = ({ pageCount, activeIdx }: Props) => {
  return (
    <Container>
      {[...Array(pageCount)].map((_, index) => (
        <Bullet activeIdx={activeIdx} index={index} />
      ))}
    </Container>
  );
};

export default SectionIndicator;
