import React from 'react'
import { css, Global, Interpolation, Theme } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'

const customStyles: Interpolation<Theme> = [
  css`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');

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
]

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
