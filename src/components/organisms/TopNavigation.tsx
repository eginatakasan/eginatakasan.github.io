import Link from 'next/link';
import React from 'react';

type Props = {
  mode?: boolean;
};

const TopNavigation = ({ mode }: Props) => {
  return (
    <nav className="w-full h-auto right-0 top-0 z-50">
      <div
        className={`flex flex-row justify-between items-center px-10 md:px-24 py-4 z-50 text-accent border-0 border-b border-b-white bg-white bg-opacity-20 rounded-bl-3xl backdrop-blur-md ${
          mode ? 'border-b border-b-textBlack' : ''
        }`}
      >
        <div className="flex-1 flex flex-row justify-end space-x-10 items-center self-end">
          <Link
            className="hover:text-accent-light flex flex-row gap-4 items-center text-lg text-current font-tokyo transition-colors"
            href="/"
          >
            About
          </Link>
          <Link
            className="hover:text-accent-light flex flex-row gap-4 items-center text-lg text-current font-tokyo transition-colors"
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
