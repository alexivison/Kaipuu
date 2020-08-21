import React from 'react'
import { useSpring } from 'react-spring'

import { Container, ActiveIndicator } from './styled'

import Link from '../../atoms/Link'

interface Props {
  path: string
  title: string
  isActive: boolean
}

const NavItem: React.FC<Props> = ({ path, title, isActive }) => {
  return (
    <Container isActive={isActive}>
      <Link to={path}>{title}</Link>
      <ActiveIndicator style={useSpring({ width: isActive ? '100%' : '0%' })} />
    </Container>
  )
}

export default NavItem
