import React from 'react'
import styled from 'styled-components'

import AppRouter from './routes/AppRouter'

import Style from './style'

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${Style.Color.LightGray};
  font-size: ${Style.FontSize.Normal};
`

export default App
