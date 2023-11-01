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
      color: theme`colors.textWhite`,
      ':hover': {
        color: theme`colors.primary.dark`,
      },
    },
    div: {
      margin: 0,
    },
    '::-webkit-scrollbar-track': {
      background: theme`colors.primary.dark`,
    },
    '::-webkit-scrollbar': {
      width: 8,
    },
    '::-webkit-scrollbar-thumb': {
      background: theme`colors.accent.DEFAULT`,
      borderRadius: 8,
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: theme`colors.accent.DEFAULT`,
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
