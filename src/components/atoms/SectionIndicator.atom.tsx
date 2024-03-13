import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Icon from './Icon';

type Props = {
  activeIdx: number;
  pageCount: number;
};

const Container = tw.div`hidden md:(fixed flex top-1/2 left-8 flex-col w-3 h-auto space-y-6 z-50)`;
const Bullet = styled(Icon.Star)(
  ({ activeIdx, index }: { activeIdx: number; index: number }) => [
    tw`w-3 h-3 fill-gray-300 opacity-60`,
    activeIdx === index &&
      tw`fill-accent opacity-100 [transform: scale(1.8)] [transition-duration: 800ms] transition-transform`,
  ],
);

const SectionIndicator = ({ pageCount, activeIdx }: Props) => {
  return (
    <Container>
      {[...Array(pageCount)].map((_, index) => (
        <Bullet activeIdx={activeIdx} index={index} key={index} />
      ))}
    </Container>
  );
};

export default SectionIndicator;
