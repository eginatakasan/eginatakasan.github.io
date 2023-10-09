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

    ::-webkit-scrollbar {
      width: 8px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #d9d9d920; 
      border-radius: 8px;
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #005f73; 
      border-radius: 8px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #0a9396; 
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
