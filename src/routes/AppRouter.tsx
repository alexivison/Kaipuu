import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route as RouterRoute,
  Switch,
  useLocation,
} from 'react-router-dom'
import { animated, useTransition } from 'react-spring'

import routes from './index'

import Sidebar from '../components/organisms/Sidebar'
import MobileNav from '../components/organisms/MobileNav'

import useDetectMobile from '../components/hooks/useDetectMobile'

interface Props {
  path: string
  component: React.FC
  exact?: boolean
  onLoad: (arg: React.FC) => void
}

const Route: React.FC<Props> = ({ component, onLoad, ...props }) => {

  useEffect(() => {
    onLoad(component)
  }, [component.header])

  return (
    <PageContainer>
      <RouterRoute component={component} {...props} />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  ${({ theme }) => theme.isMobile
    ? ``
    : `
      justify-self: center;
      padding: 48px 0;
      width: 50vw;
      max-width: 50vw;
    `
  }
`

const Routes: React.FC = () => {
  const location = useLocation()

  const isMobile = useDetectMobile()

  const [currentHeader, setCurrentHeader] = useState<{ title: string, subTitle?: string } | undefined>(undefined)

  const transitions = useTransition(location, ({ pathname }) => pathname, {
    config: { mass: 1, tension: 2000, friction: 300 },
    from: { opacity: 0, transform: isMobile ? 'translate3d(0px, 0px, 0)' : 'translate3d(0px, -32px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0)' },
    leave: { opacity: 0, transform: isMobile ? 'translate3d(0px, 0px, 0)' : 'translate3d(0px, 32px, 0)' },
  })

  return (
    <>
      {transitions.map(({ key, item, props: style }) => (
        <RouteContainer key={key} style={style}>
          <Switch location={item}>
            {Object.values(routes).map((props, index) => (
              <Route key={index} onLoad={({ header }) => setCurrentHeader(header)} {...props} />
            ))}
          </Switch>
        </RouteContainer>
      ))}
      {isMobile 
        ? <MobileNav routes={routes} header={currentHeader} />
        : <Sidebar routes={routes} header={currentHeader} />
      }
    </>
  )
}

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

const RouteContainer = styled(animated.div)`
  position: absolute;
  display: grid;
  grid-auto-rows: auto 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;

  ${({ theme }) => theme.isMobile && `
    padding-top: 64px
  `}
`

export default AppRouter
