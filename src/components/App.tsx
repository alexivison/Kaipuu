import React from 'react'
import styled from 'styled-components'

import Style from '../style'

const App: React.FC = () => {
  return <AppContainer></AppContainer>
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${Style.Color.Black};
  font-size: ${Style.FontSize.Normal};
`

export default App
