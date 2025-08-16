const getYearDifference = (startDate: Date, endDate: Date) => {
  const startYear = startDate.getFullYear();
  const endYear = endDate.getFullYear();
  const isMoreThanOneYear = endYear - startYear > 1;
  return `>${endYear - startYear} year${isMoreThanOneYear ? 's' : ''}`;
};

const workExperience = [
  {
    company: 'QSStudio, Sydney',
    period: `since May 2024 (${getYearDifference(
      new Date('2024-05-01'),
      new Date(),
    )} years)`,
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
