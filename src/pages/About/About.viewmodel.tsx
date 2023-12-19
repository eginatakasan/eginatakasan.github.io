import React, { useMemo, useState } from 'react';
import { AboutMeItem } from 'views/WorkEducation/WorkEducation.view';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import tw from 'twin.macro';

const aboutDetails = [
  {
    icon: <AcademicCapIcon height={30} width={30} />,
    header: 'Bachelor of Computer Science',
    company: 'Bandung Institute of Technology',
    description: (
      <>
        Bachelor's degree in Informatics / Computer Science
        <span css={tw`text-accent`}> (2021).</span>
        <br />
        <br />I was head of programming for fire-extinguisher robot team{' '}
        <span css={tw`text-accent`}>(2018)</span> and a member of Water Polo and
        Swimming team.
      </>
    ),
  },
  {
    icon: <Icon.Internship height={30} width={30} />,
    header: 'Game Programmer Intern',
    company: 'Agate Games Studio',
    description: (
      <>
        I had a wonderful internship experience from Agate Studio in{' '}
        <span css={tw`text-accent`}>2019</span>.
        <br />
        <br /> I developed the company's framework using Unity (C#) and
        Firebase, where I added and/or expanded timer, ads, bulk upload /
        downloads, and asset management features
        <br /> I was awarded a <span css={tw`text-accent`}>
          golden ticket
        </span>{' '}
        at the end of the internship for a job well done.
      </>
    ),
  },
  {
    icon: <BriefcaseIcon height={30} width={30} />,
    header: 'UX Engineer',
    company: 'Nomura Research Institute (NRI) Indonesia (Present)',
    description: (
      <>
        I work remotely as a UX Engineer at NRI Indonesia (Jakarta-based) in{' '}
        <span css={tw`text-accent`}>2021</span> until
        <span css={tw`text-accent`}> present</span>. I collaborate closely with
        designers to develop web or mobile apps with a high attention to UI/UX
        details.
      </>
    ),
  },
  {
    icon: <AcademicCapIcon height={30} width={30} />,
    header: 'Master of Infomation Technology (Interactive Media major)',
    company: 'Univeristy of Technology Sydney',
    description: (
      <>
        I am pursuing master of IT at UTS, Sydney starting February 2024. With a
        focus on Interactive media major, I plan to explore further on advanced
        interactive design, media, and user research.
      </>
    ),
  },
];

const useAboutViewModel = () => {
  const [aboutExpandedIdx, setAboutExpandedIdx] = useState<number | undefined>(
    aboutDetails.length - 1,
  );
  const aboutMeItems: AboutMeItem[] = useMemo(
    () =>
      aboutDetails.map((item, index) => ({
        ...item,
        expanded: aboutExpandedIdx === index,
        onToggle: () => {
          setAboutExpandedIdx(prev => (prev === index ? undefined : index));
        },
      })),
    [aboutExpandedIdx],
  );

  return {
    aboutMeItems,
    scrollY,
  };
};

export default useAboutViewModel;
