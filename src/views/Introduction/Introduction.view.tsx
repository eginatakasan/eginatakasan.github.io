import React from 'react';
import url from '../../constants/url.constant';

const IntroductionView = () => {
  return (
    <div className="flex flex-col mt-32 mb-24 mr-4 ml-8 md:mt-32 md:px-16 md:mb-20 lg:mx-auto lg:px-24 lg:max-w-[1280px]">
      <div className="flex flex-col items-start w-full">
        <h3 className="text-xl p-1 font-tokyo text-lightGray">
          Software Engineer
        </h3>
        <h1 className="text-[5rem] font-cardo font-bold text-textBlack pr-1 border-solid">
          Eginata Kasan
        </h1>
        <div className="block mt-16 p-1 max-w-[560px] text-justify font-medium text-textBlack font-raleway">
          A <span className="text-accent">Software Engineer</span> currently
          pursuing Master's Degree in Information Technology at UTS.
          <br />
          <br />
          Adept in Web & Mobile App development. My past experience as a UX
          Engineer means I specialize in building precise UI with detailed
          micro-interactions to better user experience across products.
        </div>
        <button className="py-3 px-11 bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite font-semibold rounded-full transition-all [transition-duration: 300ms] mt-16">
          <a
            href={url.resume}
            target="_blank"
            download="Eginata Kasan's Resume.pdf"
          >
            Check out my Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default IntroductionView;
