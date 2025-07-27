import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

const BottomContacts = () => {
  return (
    <footer className="flex flex-row justify-between px-10 py-6 space-x-4 md:space-x-6 md:px-24 xl:px-40 w-full border-t border-solid border-t-textBlack">
      <div className="flex flex-row space-x-4"></div>
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
    </footer>
  );
};

export default BottomContacts;
