import React from 'react';

export type ProjectsItem = {
  title: string;
  link?: string;
  linkDesc?: string;
};
type Props = {
  items: ProjectsItem[];
};

const ProjectsView = ({ items }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-screen h-auto pt-10 px-10 md:pt-32 md:pl-20 md:pr-20 md:pb-6 lg:pt-40 lg:pl-40 lg:pr-40 lg:pb-6 relative snap-center">
      <h1 className="[font-size: 32px] md:text-[40px] md:[line-height: 1.2] text-accent m-0 font-extrabold font-sofiaSans text-secondary-dark uppercase">
        Projects
      </h1>
      <div className="grid grid-cols-1 w-full mt-4 gap-6 md:grid-cols-3 md:gap-6 md:mt-8 relative">
        {items.map(({ title, link, linkDesc }) => (
          <a
            key={title}
            className="flex flex-col h-[120px] items-center justify-center space-y-2 px-5 py-5 rounded-xl md:h-[160px] md:py-10 md:px-10 text-xl border odd:bg-primary-dark odd:text-accent odd:bg-opacity-80 odd:border-primary-dark even:bg-secondary-dark even:text-accent even:bg-opacity-60 even:border-0 hover:opacity-80"
            href={link}
          >
            <span className="[font-size: 14px] md:text-[16px] text-textBlack m-0 font-light font-semibold text-textWhite">
              {title}
            </span>
            <p
              className={`text-current underline text-sm font-light hover:text-textWhite ${
                !link && !linkDesc ? 'hidden' : ''
              }`}
            >
              {linkDesc ?? link}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
