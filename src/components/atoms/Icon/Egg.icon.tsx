import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

const Github = ({ width = 95, height = 'auto' }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 95 112"
    fill="none"
    preserveAspectRatio="xMidYMin meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 67C1 42.4233 22.0426 0 48 0C73.9574 0 95 42.4233 95 67C95 91.5767 73.9574 111.5 48 111.5C22.0426 111.5 1 91.5767 1 67Z"
      fill="#ECDBB1"
    />
    <path
      d="M16.4972 100.5C-19.9996 69 13.4965 1.5 46.991 -0.000244141C46.991 -0.000244141 51.4252 13.1216 46.0051 16.9221C42.0359 19.7053 40.5432 13.4381 33.5918 16.9221C26.6403 20.4061 14.2263 42.8034 20.1854 42.8034H40.5439C48.4885 42.8034 36 64 33.5918 69.5C30.5659 76.4106 20.4052 66.4061 15.2282 73.6618C7.98569 83.8124 27.5 91 36 94.5C40.015 96.1532 41.4971 111 36.4971 110C31.4971 109 25.4978 108.268 16.4972 100.5Z"
      fill="white"
    />
  </svg>
);

export default Github;
