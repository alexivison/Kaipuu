import Bio from '../components/pages/Bio'
import Home from '../components/pages/Home'
import Portfolio from '../components/pages/Portfolio'
import Skills from '../components/pages/Skills'

export interface RouteMap {
  [key: string]: {
    title: string
    path: string
    component: React.FC
    exact?: boolean
  }
}

const routes: RouteMap = {
  Home: {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  Bio: {
    title: 'About Me',
    path: '/bio',
    component: Bio,
  },
  Skills: {
    title: 'Skills',
    path: '/skills',
    component: Skills,
  },
  Portfolio: {
    title: 'Portfolio',
    path: '/portfolio',
    component: Portfolio,
  },
}

export default routes