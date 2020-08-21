import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'
import styled from 'styled-components'

const Link: React.FC<LinkProps> = (props) => <Container {...props} />

const Container = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  user-select: none;
`

export default Link
