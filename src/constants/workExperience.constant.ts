const getYearDifference = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();
  const dayDiff = endDate.getDate() - startDate.getDate();
  
  // Adjust years if we haven't reached the anniversary month/day yet
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }
  
  const isMoreThanOneYear = years > 1;
  return `>${years} year${isMoreThanOneYear ? 's' : ''}`;
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
