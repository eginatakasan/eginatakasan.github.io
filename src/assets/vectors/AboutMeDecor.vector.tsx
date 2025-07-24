import React from 'react';

type Props = React.HTMLAttributes<SVGSVGElement> & {
  circleColor?: string;
};

const AboutMeDecor = ({ circleColor, ...props }: Props) => (
  <svg
    width="135"
    height="408"
    viewBox="0 0 135 408"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="73.5" cy="31.5" r="31.5" fill="#0a9396" fillOpacity="0.1" />
    <circle cx="99.5" cy="118.5" r="31.5" fill="#0a9396" fillOpacity="0.1" />
    <circle cx="24" cy="87" r="24" fill="#0a9396" />
    <ellipse
      cx="28.5"
      cy="152"
      rx="19.5"
      ry="19"
      fill="#0a9396"
      fillOpacity="0.1"
    />
    <ellipse cx="67.5" cy="207" rx="19.5" ry="19" fill="#78BAFF" />
    <ellipse
      cx="42"
      cy="395.5"
      rx="13"
      ry="12.5"
      fill="#0a9396"
      fillOpacity="0.1"
    />
    <ellipse
      cx="42"
      cy="269.5"
      rx="13"
      ry="12.5"
      fill="#0a9396"
      fillOpacity="0.1"
    />
    <ellipse
      cx="111"
      cy="268.5"
      rx="24"
      ry="23.5"
      fill="#0a9396"
      fillOpacity="0.1"
    />
    <ellipse
      cx="79"
      cy="340.5"
      rx="24"
      ry="23.5"
      fill="#0a9396"
      fillOpacity="0.1"
    />
  </svg>
);

export default AboutMeDecor;
