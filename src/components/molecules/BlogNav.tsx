import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BlogNav: React.FC = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
    </Container>
  )
}

const Container = styled.div``

export default BlogNav
