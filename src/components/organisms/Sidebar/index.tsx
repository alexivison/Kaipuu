import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { useSpring } from 'react-spring'

import useSidebarContext from '../../hooks/useSidebarContext'

import { 
  Container, 
  Nav, 
  Separator,
  SocialContainer,
  SocialLink,
} from './styled'

import NavItem from '../../molecules/NavItem'

interface Props {
  routes: RouteMap
}

const Sidebar: React.FC<Props> = ({ routes }) => {
  const { state: { isOpen } } = useSidebarContext()
  const { pathname } = useLocation()

  return (
    <Container style={useSpring({ left: isOpen ? '0vw' : '-15vw', opacity: isOpen ? 1 : 0 })}>
      <Nav>
        {Object.values(routes).map(({ path, title, icon }, index) => (
          <NavItem 
            key={index}
            icon={icon}
            path={path}
            index={index}
            title={title}
            isActive={path === pathname} 
          />
        ))}
      </Nav>
      <Separator />
      <SocialContainer>
        <SocialLink to='https://github.com/alexivison'>Github・</SocialLink>
        <SocialLink to='https://twitter.com/DJAlexIvison'>Twitter・</SocialLink>
        <SocialLink to='https://soundcloud.com/alex_ivison'>Soundcloud</SocialLink>
      </SocialContainer>
    </Container>
  )
}

export default Sidebar
