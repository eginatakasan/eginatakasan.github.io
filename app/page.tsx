import React from 'react';
import About from '../src/components/organisms/About';
import BottomContacts from '../src/components/organisms/BottomContacts';
import IntroductionView from '../src/components/organisms/Introduction';
import clsx from 'clsx';
import LavaLamp from '../src/components/organisms/LavaLamp';

const HomePage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-accent/5 flex flex-col relative">
      <LavaLamp />
      <div className="max-w-[1600px] mx-auto z-10">
        {/* <TopNavigation /> */}
        <div
          className={clsx(
            'relative bg-white mx-auto pt-8 mt-20 shadow-lg mb-20 rounded-3xl overflow-hidden',
            'bg-white/15 backdrop-blur-[20px]',
            'border border-white/30',
            'shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_20px_10px_rgba(255,255,255,0.1)]',
            'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-px',
            'before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent',
            'after:content-[""] after:absolute after:top-0 after:left-0 after:w-px after:h-full',
            'after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30',
          )}
        >
          <div className="flex-1 flex-col">
            <IntroductionView />
            <About />
          </div>
        </div>
        <BottomContacts />
      </div>
    </div>
  );
};

export default HomePage;
