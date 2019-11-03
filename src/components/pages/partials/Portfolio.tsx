import React from 'react'
import styled from 'styled-components'

import Nav from '../../molecules/Nav'

const Portfolio: React.FC = () => {
  return (
    <Container id="portfolio">
      <Nav />
      Top
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: red;
`

export default Portfolio
