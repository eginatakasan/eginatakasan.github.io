import { UIEventHandler, useCallback, useState } from 'react';
import { PlaygroundItems } from 'views/Playground/Playground.view';
import AnimationsRoute from '../Animations/Animations.route';
import SSTStudioImg from '../../assets/images/sst-studios.png';

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
  {
    title: 'The Dentists (coming soon)',
    link: 'thedentists.id',
  },
];

const useProjectsViewModel = () => {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(e => {
    setSectionIdx(Math.round(e.target.scrollTop / window.innerHeight));
    setScrollY(e.target.scrollTop);
  }, []);

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
    playgroundItems,
    sectionIdx,
    onScroll,
    scrollY,
    projectItems,
  };
};

export default useProjectsViewModel;
