import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';

const LandingView = () => {
  return (
    <div className="flex flex-col h-screen min-h-[820px] box-border w-full relative overflow-hidden md:min-h-screen snap-start">
      <div className="flex flex-row flex-1 justify-center items-center md:items-end">
        <div className="hidden md:flex md:flex-[0.5]" />
        <div className="flex flex-[1 1] flex-col pt-12 pb-5 pl-0 pr-10 text-right md:pl-4 md:pr-0 md:flex-col md:text-left md:max-w-[520px] animate-slideInRight">
          <h1 className="[font-size: 32px] md:text-[40px] md:[line-height: 1.2] text-accent m-0 font-extrabold font-sofiaSans font-normal text-accent">
            EGINATA KASAN
          </h1>
          <span className="[font-size: 14px] md:text-[16px] text-textBlack m-0 font-light text-white font-light italic">
            (eggy)
          </span>
          <h1 className="[font-size: 42px] md:text-[52px] md:[line-height: 1.4] text-accent m-0 font-extrabold text-white">
            Software Developer & UI/UX Specialist
          </h1>
        </div>
      </div>

      <div className="w-full flex-[0.5] flex-col md:hidden"></div>

      <div className="w-full flex-[0.5] hidden flex-col md:flex relative"></div>

      <a
        href="#about"
        className="group absolute inline-flex flex-col items-center bottom-1.5 left-1/2 -translate-x-1/2 text-primary-light hover:text-accent cursor-pointer z-10"
      >
        <ChevronDoubleDownIcon
          width={40}
          className="text-inherit stroke-1 group-hover:text-inherit md:text-white md:stroke-2 animate-bounce [animation-duration: 4s]"
        />
      </a>

      <div className="absolute w-1 h-1 bg-accent animate-blink top-1/3 left-1/3" />
      <div className="absolute w-1.5 h-1.5 bg-accent animate-blink top-1/2 left-1/3 [animation-delay: 500ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink top-[20%] left-[10%] [animation-delay: 1700ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink top-1/2 left-1/2 [animation-delay: 200ms]" />
      <div className="absolute w-1.5 h-1.5 bg-accent animate-blink top-[30%] right-[10%] [animation-delay: 1700ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink top-2/3 left-1/4 [animation-delay: 800ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink top-1/3 right-1/4 [animation-delay: 1000ms]" />
      <div className="absolute w-1.5 h-1.5 bg-accent animate-blink bottom-1/4 left-[15%] [animation-delay: 200ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink bottom-1/2 left-1/4 [animation-delay: 600ms]" />
      <div className="absolute w-1 h-1 bg-accent animate-blink bottom-[20%] right-[20%] [animation-delay: 500ms]" />

      {/* <img className="absolute bottom-4 left-10" src={Missy} /> */}
    </div>
  );
};

export default LandingView;
