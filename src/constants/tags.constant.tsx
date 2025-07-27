import {
  ServerIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

export type TechnologyTag = {
  name: string;
  icon: React.ReactNode;
};

const tags: Record<string, TechnologyTag> = {
  Frontend: {
    name: 'Frontend development',
    icon: <ComputerDesktopIcon className="w-4 h-4" />,
  },
  Mobile: {
    name: 'Mobile development',
    icon: <DevicePhoneMobileIcon className="w-4 h-4" />,
  },
  Web: {
    name: 'Web development',
    icon: <GlobeAltIcon className="w-4 h-4" />,
  },
  Backend: {
    name: 'Backend development',
    icon: <ServerIcon className="w-4 h-4" />,
  },
};

export default tags;
