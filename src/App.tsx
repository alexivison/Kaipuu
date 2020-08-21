import React from 'react'

import AppRouter from './routes/AppRouter'
import ThemeProvider from './style/ThemeProvider'
import GlobalStyleProvider from './style/GlobalStyleProvider'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <>
        <GlobalStyleProvider />
        <AppRouter />
      </>
    </ThemeProvider>
  )
}

export default App
