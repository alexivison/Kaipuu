import React from 'react'

import ThemeProvider from './style/ThemeProvider'
import GlobalStyleProvider from './style/GlobalStyleProvider'

import Bio from './components/pages/Bio'
import Home from './components/pages/Home'
import Work from './components/pages/Work'
import Skills from './components/pages/Skills'

const App: React.FC = () => {
  return (
    <GlobalStyleProvider>
      <ThemeProvider>
        <>
          <Home />
          <Bio />
          <Skills />
          <Work />
        </>
      </ThemeProvider>
    </GlobalStyleProvider>
  )
}

export default App
