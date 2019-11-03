import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'

import Blog from '../components/pages/Blog'
import Home from '../components/pages/Home'

const Routes: React.FC = () => {
  const location = useLocation()

  return (
    <Switch location={location}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
    </Switch>
  )
}

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default AppRouter
