import React from 'react'
import styled from 'styled-components'

import Nav from '../../molecules/Nav'

const Bio: React.FC = () => {
  return (
    <Container id="bio">
      <Nav />
      Top
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: orange;
`

export default Bio
