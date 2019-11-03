import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <Container>
      <HashLink smooth to="#top">
        Home
      </HashLink>
      <HashLink smooth to="#bio">
        Bio
      </HashLink>
      <HashLink smooth to="#portfolio">
        Portfolio
      </HashLink>
      <Link to="/Blog">Blog</Link>
    </Container>
  )
}

const Container = styled.div``

export default Nav
