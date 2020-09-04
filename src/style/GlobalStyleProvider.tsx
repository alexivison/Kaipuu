import React from 'react'
import { createGlobalStyle, ThemedGlobalStyledClassProps } from 'styled-components'

import { Theme } from './themes'

const GlobalStyleProvider: React.FC = () => {
  return (
    <GlobalStyle />
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
    font-family: 'Hiragino Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    transition: background-color .2s ease-in-out;
    background-color: ${({ theme }: ThemedGlobalStyledClassProps<{}, Theme>) => theme?.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  div {
    box-sizing: border-box;
    transition: background-color .2s ease-in-out;
  }
`

export default GlobalStyleProvider
