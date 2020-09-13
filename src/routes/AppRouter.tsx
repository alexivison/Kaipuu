import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  HashRouter as Router,
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
      display: grid;
      justify-self: center;
      padding-top: 48px;
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
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
    <Router basename="/">
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
