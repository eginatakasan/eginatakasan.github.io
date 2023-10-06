import React from 'react';
import { css, Global, Interpolation, Theme } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const customStyles: Interpolation<Theme> = [
  css`

    @font-face {
      font-family: 'Tokyo':
      src: local('Tokyo'),
           url('./fonts/Tokyo-Regular.woff') format('woff'),
    }

    body {
      font-family: 'Nunito Sans', sans-serif;
    }
  `,
  {
    a: {
      color: theme`colors.accent`,
      ':hover': {
        color: theme`colors.primary.light`,
      },
    },
  },
];

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
