import React from 'react'
import styled from 'styled-components'

const Link: React.FC = (props) => <Container {...props} />

const Container = styled.a`
  color: inherit;
  text-decoration: none;
  user-select: none;
`

export default Link
