import React from 'react';
import { css, Global, Interpolation, Theme } from '@emotion/react';
import { GlobalStyles as BaseStyles, theme } from 'twin.macro';

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

    h1, h2, h3, p: {
      margin: 0,
    }
  `,
  {
    a: {
      color: theme`colors.textWhite`,
    },
    div: {
      margin: 0,
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
