import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useSpring, useTransition } from 'react-spring'

import { Container, Nav, PageTitle, Title, SubTitle, Social, Github, Twitter, Soundcloud } from './styled'

import NavItem from '../../molecules/NavItem'

import { RouteMap } from '../../../routes'

interface Props {
  routes: RouteMap
  header?: { title: string, subTitle?: string }
}

const Sidebar: React.FC<Props> = ({ routes, header }) => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const transitions = useTransition(header, (item) => item?.title, {
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
  })

  useEffect(() => {
    setOpen(pathname !== '/')
  }, [pathname])

  return (
    <Container style={useSpring({ left: open ? '0vw' : '-15vw', opacity: open ? 1 : 0 })}>
      <Nav>
        <div style={{ height: 48 }} />
        {transitions.map(({ item, props, key }) => (
          <PageTitle key={key} style={props}>
            <Title>{item?.title}</Title>
            <SubTitle>{item?.subTitle || ''}</SubTitle>
          </PageTitle>
        ))}
        {Object.values(routes).map(({ path, title }, index) => (
          <NavItem key={index} path={path} title={title} isActive={path === pathname} />
        ))}
      </Nav>
      <Social>
        <Github />
        <Twitter />
        <Soundcloud />
      </Social>
    </Container>
  )
}

export default Sidebar
