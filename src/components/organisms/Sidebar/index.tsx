import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSpring, useTransition } from 'react-spring'

import { 
  Container, 
  Nav, 
  PageTitle, 
  Title, 
  SubTitle, 
  Inner,
  Outer,
  Separator, 
  SocialLink,
  Wrapper,
} from './styled'

import NavItem from '../../molecules/NavItem'

import { RouteMap } from '../../../routes'

interface Props {
  routes: RouteMap
  header?: { title: string, subTitle?: string }
}

const Sidebar: React.FC<Props> = ({ routes, header }) => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // const transitions = useTransition(header, (item) => item?.title, {
  //   from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
  //   leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
  // })

  useEffect(() => {
    setOpen(pathname !== '/')
  }, [pathname])

  return (
    <Container style={useSpring({ left: open ? '0vw' : '-15vw', opacity: open ? 1 : 0 })}>
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
      <SidewayContainer>
        <SocialLink to='https://github.com/alexivison'>Github・</SocialLink>
        <SocialLink to='https://twitter.com/DJAlexIvison'>Twitter・</SocialLink>
        <SocialLink to='https://soundcloud.com/alex_ivison'>Soundcloud</SocialLink>
      </SidewayContainer>
    </Container>
  )
}

const SidewayContainer: React.FC = ({ children }) => {
  return (
    <Outer>
      <Inner>
        <Wrapper>
          {children}
        </Wrapper>
      </Inner>
    </Outer>
  )
}

export default Sidebar
