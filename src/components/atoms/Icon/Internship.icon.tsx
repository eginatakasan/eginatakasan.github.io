import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const Internship = (props: Props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.6875 7.5C19.6875 8.7432 19.1936 9.93549 18.3145 10.8146C17.4355 11.6936 16.2432 12.1875 15 12.1875C13.7568 12.1875 12.5645 11.6936 11.6854 10.8146C10.8063 9.93549 10.3125 8.7432 10.3125 7.5C10.3125 6.2568 10.8063 5.06451 11.6854 4.18544C12.5645 3.30636 13.7568 2.8125 15 2.8125C16.2432 2.8125 17.4355 3.30636 18.3145 4.18544C19.1936 5.06451 19.6875 6.2568 19.6875 7.5V7.5ZM5.62622 25.1475C5.66639 22.6879 6.67164 20.3427 8.42519 18.6176C10.1787 16.8924 12.5401 15.9256 15 15.9256C17.4599 15.9256 19.8212 16.8924 21.5747 18.6176C23.3283 20.3427 24.3336 22.6879 24.3737 25.1475C21.433 26.496 18.2352 27.1919 15 27.1875C11.655 27.1875 8.47997 26.4575 5.62622 25.1475Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 18.5L13 16.5H17L15 18.5L17 23L15 24.5L13 23L15 18.5Z"
      fill="currentColor"
    />
    <path
      d="M15 18.5L13 16.5H17L15 18.5ZM15 18.5L13 23L15 24.5L17 23L15 18.5Z"
      stroke="currentColor"
    />
  </svg>
);

export default Internship;
