import React, {
  UIEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AboutMeItem } from 'views/WorkEducation/WorkEducation.view';
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Icon from '../../components/atoms/Icon';
import tw from 'twin.macro';
import { PlaygroundItems } from 'views/Playground/Playground.view';
import AnimationsRoute from '../../pages/Animations/Animations.route';
import SSTStudioImg from '../../assets/images/sst-studios.png';

const aboutDetails = [
  {
    icon: <AcademicCapIcon />,
    header: 'Bandung Institute of Technology',
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
    icon: <Icon.Internship />,
    header: 'Game Programmer Intern at Agate Studios',
    description: (
      <>
        I had a wonderful internship experience from Agate Studio in{' '}
        <span css={tw`text-accent`}>2019</span>.
        <br />
        <br /> I joined the framework team where I worked with Unity (C#) and
        Firebase.
        <br /> I was awarded a <span css={tw`text-accent`}>
          golden ticket
        </span>{' '}
        at the end of the internship.
      </>
    ),
  },
  {
    icon: <BriefcaseIcon />,
    header: 'UX Engineer at Nomura Research Institute (NRI) Indonesia',
    description: (
      <>
        I've worked multiple projects remotely as a UX Engineer at NRI Indonesia
        (Jakarta-based) in <span css={tw`text-accent`}>2021</span> until
        <span css={tw`text-accent`}> present</span>. I collaborate closely with
        designers to develop both web apps and mobile apps with a high attention
        to UI/UX details. Experienced working on multi-national teams.
      </>
    ),
  },
];

const projectItems = [
  {
    title: 'Qash POS',
    link: 'qash.id',
  },
  {
    title: 'Lawassier.',
    link: 'lawassier.com',
  },
  {
    title: 'SST Studios',
    linkDesc: 'see design',
    link: SSTStudioImg,
  },
];

const useHomeViewModel = () => {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(e => {
    setSectionIdx(Math.round(e.target.scrollTop / window.innerHeight));
    setScrollY(e.target.scrollTop);
  }, []);

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

  const playgroundItems: PlaygroundItems[] = [
    {
      header: 'CSS Animation',
      description:
        'An experiment consisting smooth transitions and moving SVG animations',
      tags: ['#CSS', '#HTML'],
      link: AnimationsRoute.path ?? '',
    },
  ];

  return {
    aboutMeItems,
    playgroundItems,
    sectionIdx,
    onScroll,
    scrollY,
    projectItems,
  };
};

export default useHomeViewModel;
