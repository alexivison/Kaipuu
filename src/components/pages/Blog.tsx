import React from 'react'
import styled from 'styled-components'

import Nav from '../molecules/BlogNav'

const Blog: React.FC = () => {
  return (
    <Container>
      <div>Blog</div>
      <Nav />
    </Container>
  )
}

const Container = styled.div`
  background-color: red;
`

export default Blog
