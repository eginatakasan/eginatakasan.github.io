import React from 'react';
import url from '../../constants/url.constant';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Button } from '../atoms';

const IntroductionView = () => {
  return (
    <section
      className="flex flex-col mt-32 mb-24 px-8 mr-8 md:mt-32 md:px-16 md:mx-auto md:mb-20 xl:px-24 xl:max-w-[1280px]"
      aria-label="Introduction"
    >
      <div className="flex flex-col items-start w-full">
        <h2 className="text-xl font-tokyo text-accent">Software Engineer</h2>
        <h1 className="text-[5rem] font-cardo font-bold text-textBlack pr-1 border-solid">
          Eginata Kasan
        </h1>
        <div className="block mt-4 p-1 max-w-[560px] text-justify font-medium text-textBlack font-raleway">
          A Software Engineer currently pursuing Master's Degree in Information
          Technology at University of Technology Sydney (Expected Graduation in
          December 2025).
          <br />
          <br />
          Adept in Web & Mobile App development. I'm always working varying
          projects as a part-time Full-stack developer at QSStudio, Sydney. My
          past experience as a UX Engineer means I specialize in building
          precise UI with detailed micro-interactions to better user experience
          across products.
        </div>
        <p className="text-sm mt-2 italic font-raleway text-textBlack">
          I also go by "Eggy"
        </p>
        <a
          href={url.resume}
          target="_blank"
          rel="noopener noreferrer"
          download="Eginata Kasan's Resume.pdf"
          aria-label="Download Eginata Kasan's Resume"
        >
          <Button className="mt-16 font-light">
            <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
            Check out my Resume
          </Button>
        </a>
      </div>
    </section>
  );
};

export default IntroductionView;
