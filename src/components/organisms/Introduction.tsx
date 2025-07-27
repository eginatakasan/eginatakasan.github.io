import React from 'react';
import url from '../../constants/url.constant';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Button } from '../atoms';
import AnimatedName from './AnimatedName';
import Github from '../atoms/Icon/Github.icon';

const IntroductionView = () => {
  return (
    <section
      className="flex flex-col mt-32 mb-24 px-8 mr-8 md:mt-32 md:px-16 md:mx-auto md:mb-20 xl:px-24 xl:max-w-[1280px]"
      aria-label="Introduction"
    >
      <div className="flex flex-col items-start w-full">
        <h2 className="text-xl font-tokyo text-accent">Software Engineer</h2>
        <AnimatedName />
        <div className="block mt-4 p-1 max-w-[600px] text-justify font-medium text-textBlack font-raleway">
          A Software Engineer currently pursuing Master's Degree in Information
          Technology at University of Technology Sydney (Expected Graduation in
          December 2025).
          <br />
          <br />
          Adept in Web & Mobile App development. I'm always working varying
          projects as a part-time Full-stack developer at QSStudio, Sydney. My
          past experience as a UX Engineer means I specialize in building
          precise UI with detailed micro-interactions to improve user experience
          across products.
        </div>
        <p className="text-sm mt-2 italic font-raleway text-textBlack">
          I also go by "Eggy"
        </p>

        <div className="flex flex-col gap-6 md:gap-4 mt-10 md:flex-row md:mt-16 w-full md:w-auto max-w-[600px]">
          <Button
            href={url.resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Eginata Kasan's Resume.pdf"
            aria-label="Download Eginata Kasan's Resume"
            className="font-light w-full md:w-auto text-center justify-center"
          >
            <ArrowDownTrayIcon className="w-5 h-5" aria-hidden="true" />
            Check out my Resume
          </Button>

          <Button
            href={url.githubIoRepo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See How I Made this Website"
            variant="outlined"
            className="font-light w-full md:w-auto text-center justify-center"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            See This Site's Code
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntroductionView;
