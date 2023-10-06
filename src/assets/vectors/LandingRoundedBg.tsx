import React from 'react';

type Props = React.HTMLAttributes<SVGSVGElement>;

const AboutMeRoundedBg = (props: Props) => (
  <svg
    width="393"
    height="72"
    viewBox="0 0 393 72"
    preserveAspectRatio="none"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 28.8904C25 0.45009 114 -12.5227 198 15.9176C331.526 53.0701 361.176 15.9176 393 66.5V72H0V28.8904Z"
      fill="#8ECAE6"
    />
  </svg>
);

export default AboutMeRoundedBg;
