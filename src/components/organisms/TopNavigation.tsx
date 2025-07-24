import React from 'react';

type Props = {
  mode?: boolean;
};

const TopNavigation = ({ mode }: Props) => {
  return (
    <div className="fixed flex h-auto top-0 left-0 right-2 z-50">
      <div
        className={`flex-1 flex flex-row justify-between items-center px-8 md:px-12 pt-8 py-6 z-50 text-accent border-0 bg-white bg-opacity-80 backdrop-blur-sm ${
          mode ? 'border-b border-b-textBlack' : ''
        }`}
      >
        <div className="flex space-x-10 items-center">
          <a
            className="hover:text-accent-light flex flex-row gap-4 items-center [font-size: 18px] text-current font-tokyo transition-colors"
            href="/"
          >
            Projects
          </a>
          <a
            className="hover:text-accent-light flex flex-row gap-4 items-center [font-size: 18px] text-current font-tokyo transition-colors"
            href="/about"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
