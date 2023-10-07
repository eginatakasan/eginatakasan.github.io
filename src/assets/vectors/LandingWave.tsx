import React from 'react';
import tw from 'twin.macro';

type Props = React.HTMLAttributes<SVGSVGElement>;

const LandingWave = (props: Props) => (
  <svg
    {...props}
    width="1902"
    height="218"
    viewBox="0 0 1902 218"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83911 1C458.44 170.446 531.194 -52.9249 1160.48 85.0731C1789.76 223.071 1898.68 85.0729 1898.68 85.0729"
      stroke="#0a9396"
      css={tw`animate-waves [animation-duration: 6s] [animation-delay: 1s]`}
    />
    <path
      d="M2.41099 81.0873C391.704 260 304.749 -85.1768 829.229 52.5545C1089.13 120.805 1386.66 134.369 1489.53 88.0839C1592.4 41.7984 1840.99 -9.60241 1900.95 37.3094"
      stroke="#78BAFF"
      css={tw`animate-waves [animation-duration: 8s] [animation-delay: 2s]`}
    />
    <path
      d="M1.14555 46.3423C468.542 225.454 531.506 -91.6546 1161.16 46.3443C1790.81 184.343 1899.79 46.3451 1899.79 46.3451"
      stroke="#E3E3E3"
      stroke-opacity="0.5"
      css={tw`animate-waves [animation-duration: 8s] `}
    />
    <path
      d="M0.804943 162.79C310.104 42.7885 472.235 277.788 676.272 178.786C880.31 79.7853 1225.03 138.783 1347.25 178.783C1469.47 218.782 1772.29 197.78 1900.99 91.7799"
      stroke="#0a9396"
      css={tw`animate-waves [animation-duration: 6s] [animation-delay: 2s]`}
    />
    <path
      d="M1 194.728L53.7778 182.753C106.556 170.777 212.111 146.825 317.667 128.862C423.222 110.898 528.778 98.9225 634.333 116.886C739.889 134.85 845.444 182.753 951 203.71C1056.56 224.668 1162.11 218.68 1267.67 200.716C1373.22 182.753 1478.78 152.813 1584.33 152.813C1689.89 152.813 1795.44 182.753 1901 200.716"
      stroke="#D9D9D9"
      css={tw`animate-waves [animation-duration: 6s] `}
    />
  </svg>
);

export default LandingWave;
