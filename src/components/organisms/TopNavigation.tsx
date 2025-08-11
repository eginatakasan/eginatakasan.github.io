import Link from 'next/link';
import React from 'react';

type Props = {
  mode?: boolean;
};

const TopNavigation = ({ mode }: Props) => {
  return (
    <nav className="w-full h-auto">
      <div
        className={`flex flex-row justify-between items-center px-8 md:px-16 w-full xl:mx-auto xl:max-w-[1280px] py-4 z-50 text-accent border-0 border-b border-b-white bg-white bg-opacity-20 rounded-bl-3xl backdrop-blur-md ${
          mode ? 'border-b border-b-textBlack' : ''
        }`}
      >
        <div className="flex-1 flex flex-row justify-end space-x-10 items-center self-end">
          <Link
            className="hover:text-accent-light hover:scale-105 flex flex-row gap-4 items-center text-lg text-current font-tokyo transition-all"
            href="/"
          >
            About
          </Link>
          <Link
            className="hover:text-accent-light hover:scale-105 flex flex-row gap-4 items-center text-lg text-current font-tokyo transition-all"
            href="/projects"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
