import React from 'react'
import { useSpring } from 'react-spring'

import { 
  Container, 
  SubContainer,
  ActiveIndicator,
  Icon,
  Title,
  Index,
  NavLink,
} from './styled'

interface Props {
  path: string
  icon?: string
  title: string
  index: number
  isActive: boolean
}

const NavItem: React.FC<Props> = ({ path, icon, title, index, isActive }) => {
  const indexToString = "." + ("0" + index).slice(-2)
  const iconToString = icon + "・"

  const titleAnimation = useSpring({
    top: isActive ? '32px' : '0px',
    left: isActive ? '0px' : '40px',
    fontSize: isActive ? '24px' : '16px',
  })

  return (
    <Container>
      <SubContainer isActive={isActive}>
        <Index>{indexToString}</Index>
        <NavLink>
          {icon && <Icon isActive={isActive}>{iconToString}</Icon>}
          <Title style={titleAnimation}>{title}</Title>
        </NavLink>
      </SubContainer>
      <ActiveIndicator style={useSpring({ height: isActive ? '118px' : '0px' })} />
    </Container>
  )
}

export default NavItem
