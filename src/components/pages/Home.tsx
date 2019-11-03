import React from 'react'
import styled from 'styled-components'

import Bio from './partials/Bio'
import Portfolio from './partials/Portfolio'
import Top from './partials/Top'

const Home: React.FC = () => {
  return (
    <Container>
      <Top />
      <Bio />
      <Portfolio />
    </Container>
  )
}

const Container = styled.div``

export default Home
