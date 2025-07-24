import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import url from '../../constants/url.constant';
import Icon from '../atoms/Icon';

type Props = {
  solid?: boolean;
};

const BottomInformation = ({ solid }: Props) => {
  return (
    <div
      className={`flex flex-col h-auto px-10 pt-6 pb-10 md:px-40 w-full bg-frosted backdrop-blur snap-end ${
        solid ? 'bg-primary' : ''
      }`}
    >
      <h2 className="[font-size: 20px] md:text-[24px] text-textBlack m-0 font-bold font-sofiaSans mb-2 uppercase">
        Contacts
      </h2>
      <div className="flex flex-col items-start justify-start space-y-2">
        <a
          className="flex-1 pl-4 flex flex-row space-x-4 items-center text-secondary-dark"
          href={url.mail}
        >
          <div>
            <EnvelopeIcon width={16} height={16} />
          </div>
          <p className="text-xs font-light text-current">
            eginatakasan@gmail.com
          </p>
        </a>
        <a
          className="flex-1 pl-4 flex flex-row space-x-4 items-center text-secondary-dark"
          href={url.linkedin}
        >
          <div>
            <Icon.LinkedIn className="w-4 h-4" />
          </div>
          <p className="text-xs font-light text-current">
            linkedin.com/in/eginata-kasan
          </p>
        </a>
        <a
          className="flex-1 pl-4 flex flex-row space-x-4 items-center text-secondary-dark"
          href={url.github}
        >
          <div>
            <Icon.Github className="w-4 h-4" />
          </div>
          <p className="text-xs font-light text-current">
            github.com/eginatakasan
          </p>
        </a>
      </div>
    </div>
  );
};

export default BottomInformation;
