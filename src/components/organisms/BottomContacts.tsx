import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';
import { getFormattedBuildDate } from '../../constants/buildInfo.constant';

const BottomContacts = () => {
  return (
    <footer className="flex flex-col px-8 md:px-16 py-6 w-full xl:max-w-[1280px] mx-auto">
      <div className="flex-1 border-t border-t-black border-solid" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-4">
          <p className="text-sm mt-2 italic font-raleway text-textBlack">
            Last updated: {getFormattedBuildDate()}
          </p>
        </div>
        <div className="flex flex-row space-x-4">
          <a
            className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
            href={url.mail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to Eginata Kasan"
          >
            <EnvelopeIcon aria-hidden="true" />
          </a>
          <a
            className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
            href={url.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Eginata Kasan's LinkedIn profile"
          >
            <Icon.LinkedIn className="w-8 h-8" aria-hidden="true" />
          </a>
          <a
            className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
            href={url.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Eginata Kasan's GitHub profile"
          >
            <Icon.Github className="w-8 h-8" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BottomContacts;
