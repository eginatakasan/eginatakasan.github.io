import React from 'react';
import tw from 'twin.macro';

type Props = React.HTMLAttributes<SVGSVGElement>;

const LandingWave = (props: Props) => (
  <svg
    width="393"
    height="60"
    viewBox="0 0 393 32"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-0.988586 1C93.5811 36 108.783 -10.1385 240.27 18.3658C371.757 46.87 394.515 18.3657 394.515 18.3657"
      stroke="#0a9396"
      css={tw`animate-waves [animation-duration: 10s] [animation-delay: 1s]`}
    />
    <path
      d="M-1.70484 17.5425C79.6368 54.4979 61.4678 -16.8003 171.056 11.6489C225.362 25.7464 287.529 28.5482 309.024 18.9877C330.518 9.42713 382.461 -1.19 394.99 8.4999"
      stroke="#78BAFF"
      css={tw`animate-waves [animation-duration: 12s] [animation-delay: 2s]`}
    />
    <path
      d="M-1.96958 10.3657C95.6915 47.3622 108.848 -18.1383 240.412 10.3661C371.976 38.8706 394.747 10.3663 394.747 10.3663"
      stroke="#E3E3E3"
      stroke-opacity="0.5"
      css={tw`animate-waves [animation-duration: 8s]`}
    />
  </svg>
);

export default LandingWave;
