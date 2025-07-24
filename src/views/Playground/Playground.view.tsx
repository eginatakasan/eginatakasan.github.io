import React from 'react';

export type PlaygroundItems = {
  header: string;
  description: string;
  tags: string[];
  link: string;
};
type Props = {
  items: PlaygroundItems[];
};

const PlaygroundView = ({ items }: Props) => {
  return (
    <div className="w-full flex flex-col pt-12 pl-8 pr-6 pb-12 relative md:pb-12">
      <h1
        className="[font-size: 32px] md:text-[40px] md:[line-height: 1.2] text-accent m-0 font-extrabold text-center mt-5 mb-10 text-white"
        id="playground"
      >
        Playground
      </h1>
      <div className="grid-rows-2 justify-center items-center mx-auto">
        {items.map(({ header, description, tags, link }, index) => (
          <div
            key={header}
            className={`inline-flex flex-col items-center font-light text-center px-4 py-8 md:w-[460px] md:px-10 md:pt-16 md:pb-10 md:h-auto card ${
              index % 3 === 0
                ? 'bg-[#0a9396] text-[#1e1e1e]'
                : index % 3 === 1
                ? 'bg-[#4a5a7d] text-white'
                : 'bg-[#35383f] text-white'
            }`}
          >
            <h2
              className={`[font-size: 20px] md:text-[24px] text-textBlack m-0 font-bold mb-2 md:mb-4 heading ${
                index % 3 === 0
                  ? 'text-[#35383f]'
                  : index % 3 === 1
                  ? 'text-[#0a9396]'
                  : 'text-[#0a9396]'
              }`}
            >
              {header}
            </h2>
            <p className="[font-size: 16px] md:text-[18px] text-textBlack m-0 text-inherit">
              {description}
            </p>
            <span
              className={`[font-size: 14px] md:text-[16px] text-textBlack m-0 font-light highlight ${
                index % 3 === 0
                  ? 'text-[#0e5aa9]'
                  : index % 3 === 1
                  ? 'text-[#78baff]'
                  : 'text-[#78baff]'
              }`}
            >
              {tags.join(' ')}
            </span>
            {link && (
              <a href={link}>
                <button className="py-3 px-11 bg-accent shadow-md hover:bg-accent-light hover:scale-105 text-textWhite font-semibold rounded-full transition-all [transition-duration: 300ms] mt-6 md:mt-16">
                  Check it out
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaygroundView;
