import React from 'react';
import tw from 'twin.macro';

type Props = React.HTMLAttributes<SVGSVGElement>;

const Star = (props: Props) => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.715729 29C17.9019 25.6773 24.0265 19.3658 29 0.715729C34.6728 19.8889 41.119 25.6331 57.2843 29C40.835 33.2247 34.7552 39.5256 29 57.2843C23.7807 39.3784 17.7751 32.807 0.715729 29Z"
      fill="current"
    />
  </svg>
);

export default Star;
