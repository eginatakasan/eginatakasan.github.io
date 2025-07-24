import React from 'react';
import Icon from './Icon';

type Props = {
  activeIdx: number;
  pageCount: number;
};

const SectionIndicator = ({ pageCount, activeIdx }: Props) => {
  return (
    <div className="hidden md:fixed md:flex md:top-1/2 md:left-8 md:flex-col md:w-3 md:h-auto md:space-y-6 md:z-50">
      {[...Array(pageCount)].map((_, index) => (
        <Icon.Star
          key={index}
          className={`w-3 h-3 fill-gray-300 opacity-60 ${
            activeIdx === index
              ? 'fill-accent opacity-100 [transform: scale(1.8)] [transition-duration: 800ms] transition-transform'
              : ''
          }`}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
