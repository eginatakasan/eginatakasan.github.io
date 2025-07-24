import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

const BottomContacts = () => {
  return (
    <div className="flex flex-row justify-end px-10 py-6 space-x-4 md:space-x-6 md:px-24 w-full border-t border-solid border-t-textBlack">
      <a
        className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.mail}
      >
        <EnvelopeIcon />
      </a>
      <a
        className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.linkedin}
      >
        <Icon.LinkedIn className="w-8 h-8" />
      </a>
      <a
        className="text-current w-8 h-8 p-4 box-content hover:text-accent hover:scale-110 transition-all"
        href={url.github}
      >
        <Icon.Github className="w-8 h-8" />
      </a>
    </div>
  );
};

export default BottomContacts;
