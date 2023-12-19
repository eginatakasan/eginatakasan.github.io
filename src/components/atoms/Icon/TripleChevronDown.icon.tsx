import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const TripleChevronDown = (props: Props) => (
  <svg
    width="26"
    height="31"
    viewBox="0 0 26 31"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.74512L13.109 11.6879L24.9753 0.999811"
      stroke="currentColor"
    />
    <path d="M1 19.8721L13.109 29.8148L24.9753 19.1268" stroke="currentColor" />
    <path
      d="M1 10.8086L13.109 20.7513L24.9753 10.0633"
      stroke="currentColor"
      stroke-opacity="0.8"
    />
  </svg>
);

export default TripleChevronDown;
