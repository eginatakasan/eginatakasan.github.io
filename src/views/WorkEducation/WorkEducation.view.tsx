import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import backgroundImg from '../../assets/images/abstract-bg.png';

export type AboutMeItem = {
  icon: React.ReactNode;
  company: string;
  header: string;
  description: React.ReactNode;
  expanded: boolean;
  onToggle: () => void;
};
type Props = {
  items: AboutMeItem[];
};

const WorkEducation = ({ items }: Props) => {
  return (
    <div
      className="flex flex-col w-full min-h-screen h-max px-10 pt-6 md:flex-row md:pl-20 md:pr-0 lg:pl-40 lg:pr-0 relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="flex flex-col justify-center text-left pt-20 pb-6 md:flex-1 md:text-left md:justify-center md:max-w-[600px] z-10">
        <h1
          className="text-textWhite mt-5 mb-10 text-[28px] md:text-[72px] font-bold"
          id="about"
        >
          Work & Education History
        </h1>
      </div>
      <div className="flex-[2 2] flex flex-col justify-start text-left md:text-left md:justify-center md:px-20 z-10">
        <ul className="max-w-[600px]">
          {items.map(
            ({ icon, header, description, expanded, onToggle, company }) => (
              <li
                key={header}
                className="flex flex-col gap-2 mb-4 items-start relative md:hover:cursor-pointer"
                onClick={onToggle}
              >
                <div className="flex flex-row w-full mb-2 gap-4 justify-start">
                  <div className="inline-flex mt-1.5 w-8 flex-[0 0 32px] text-textWhite">
                    {icon}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex-1 mt-1 font-semibold font-nunitoSans text-textWhite md:text-base">
                      {header}
                    </div>
                    <div className="flex-1 mt-1 font-semibold font-nunitoSans text-textWhite md:text-base">
                      {company}
                    </div>
                  </div>
                  <ChevronDownIcon
                    width={16}
                    height={32}
                    className={`text-accent ${expanded ? 'rotate-180' : ''}`}
                  />
                </div>
                <div
                  className={`max-h-0 h-auto flex flex-row justify-between overflow-hidden [transition: max-height linear 250ms] ${
                    expanded ? 'max-h-screen' : ''
                  }`}
                >
                  <div
                    className={`ml-4 border-0 border-l-2 border-solid text-textWhite`}
                  ></div>
                  <div
                    className={`ml-8 font-extralight text-textWhite text-justify text-sm mb-2 md:text-base md:mb-6 md:[line-height: 1.5] translate-x-full transition-all opacity-0 [transition-duration: 500ms] [transition-delay: 250ms] ${
                      expanded ? 'opacity-100 translate-x-0' : ''
                    }`}
                  >
                    {description}
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default WorkEducation;
