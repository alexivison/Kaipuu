import Bio from '../components/pages/Bio'
import Home from '../components/pages/Home'
import Portfolio from '../components/pages/Portfolio'
import Skills from '../components/pages/Skills'

export interface RouteMap {
  [key: string]: {
    icon: string
    title: string
    path: string
    component: React.FC
    exact?: boolean
  }
}

const routes: RouteMap = {
  Home: {
    icon: '上',
    title: 'TOP',
    path: '/',
    component: Home,
    exact: true,
  },
  Bio: {
    icon: '自',
    title: 'BIO',
    path: '/bio',
    component: Bio,
  },
  Skills: {
    icon: '技',
    title: 'SKILLS',
    path: '/skills',
    component: Skills,
  },
  Portfolio: {
    icon: '作',
    title: 'WORK',
    path: '/portfolio',
    component: Portfolio,
  },
}

export default routes