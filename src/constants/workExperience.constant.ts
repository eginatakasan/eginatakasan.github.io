import { differenceInCalendarMonths } from 'date-fns';

const getYearDifference = (startDate: Date, endDate: Date) => {
  const monthDiff = differenceInCalendarMonths(endDate, startDate);
  const months = monthDiff % 12;
  let years = Math.floor(monthDiff / 12);

  const isMoreThanOneMonth = months > 1;
  const isMoreThanOneYear = monthDiff > 12;
  return `${years} year${isMoreThanOneYear ? 's' : ''} ${months > 0 ? `${months > 0 ? `${months}` : ''} ${isMoreThanOneMonth ? 'months' : 'month'}` : ''}`;
};

const workExperience = [
  {
    company: 'QSStudio, Sydney',
    period: `since May 2024 (${getYearDifference(
      new Date('2024-05-01'),
      new Date(),
    )})`,
    title: 'FullStack Engineer',
  },
  {
    company: 'Nomura Research Institute Indonesia, Jakarta',
    period: `October 2021 - January 2024 (${getYearDifference(
      new Date('2021-10-01'),
      new Date('2024-01-01'),
    )})`,
    title: 'UX Engineer',
  },
  {
    company: 'Agate Games Studio',
    period: '2018',
    title: 'Game Programmer Intern',
  },
];

export default workExperience;
