import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

const TinyContacts = () => {
  return (
    <div className="flex flex-row justify-between items-center space-x-4">
      <a
        className="text-current w-8 h-8 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.mail}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send email to Eginata Kasan"
      >
        <EnvelopeIcon className="w-8 h-8" aria-hidden="true" />
      </a>
      <a
        className="text-current w-8 h-8 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Eginata Kasan's LinkedIn profile"
      >
        <Icon.LinkedIn className="w-8 h-8" aria-hidden="true" />
      </a>
      <a
        className="text-current w-8 h-8 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Eginata Kasan's GitHub profile"
      >
        <Icon.Github className="w-8 h-8" aria-hidden="true" />
      </a>
    </div>
  );
};

export default TinyContacts;
