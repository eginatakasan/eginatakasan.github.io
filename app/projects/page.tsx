import React from 'react';
import TopNavigation from '../../src/components/organisms/TopNavigation';
import BottomContacts from '../../src/components/organisms/BottomContacts';
import ProjectSearch from '../../src/components/organisms/ProjectSearch';
import Button from '../../src/components/atoms/Button';
import Icons from '../../src/components/atoms/Icon';
import url from '../../src/constants/url.constant';
import { getFormattedBuildDate } from '../../src/constants/buildInfo.constant';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Eginata Kasan',
  description: 'Projects by Eginata Kasan',
  keywords: [
    'projects',
    'software engineer',
    'Eginata Kasan',
    'software development',
  ],
  authors: [{ name: 'Eginata Kasan' }],
  creator: 'Eginata Kasan',
  publisher: 'Eginata Kasan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Projects - Eginata Kasan',
    description: 'Projects by Eginata Kasan',
    url: 'https://eginatakasan.github.io/projects',
    siteName: 'Eginata Kasan',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Eginata Kasan',
    description: 'Projects by Eginata Kasan',
    images: ['https://eginatakasan.github.io/profile2.jpg'],
  },
  alternates: {
    canonical: 'https://eginatakasan.github.io/projects',
  },
};

const ProjectsPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-white">
      <TopNavigation />
      <div className="flex flex-col mt-32 px-8 mr-8 mb-24 md:mt-32 md:px-16 md:mx-auto xl:max-w-[1280px]">
        <section className="max-w-6xl mx-auto w-full mb-24 md:mb-20">
          <h2 className="text-xl font-tokyo text-accent">What I do</h2>
          <h1 className="text-6xl sm:text-[5rem] mt-2 font-cardo font-bold text-textBlack pr-1 border-solid">
            My Projects
          </h1>
          <div className="block mt-4 p-1 max-w-[600px] text-justify font-medium text-textBlack font-raleway">
            Hi, I'm Eginata Kasan! Here are some of the projects I've worked on
            as a software engineer. I might have more that I haven't listed here
            since I'm always working on something new! <br />
            <br />
            Feel free to contact me if you're interested in any of my projects.
          </div>
          <p className="text-sm mt-2 italic font-raleway text-textBlack">
            (last updated: {getFormattedBuildDate()})
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              href={url.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Icons.LinkedIn className="w-5 h-5" />
              Connect with me on LinkedIn
            </Button>
            <Button
              href={url.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              className="w-fit"
            >
              <Icons.Github className="w-5 h-5" />
              Follow me on GitHub
            </Button>
          </div>
        </section>

        <ProjectSearch />
      </div>

      <BottomContacts />
    </div>
  );
};

export default ProjectsPage;
