import Bio from '../components/pages/Bio'
import Home from '../components/pages/Home'
import Work from '../components/pages/Work'
import WorkDetail from '../components/pages/WorkDetail'
import Skills from '../components/pages/Skills'

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
  Work: {
    icon: '作',
    title: 'WORK',
    path: '/work',
    component: Work,
    exact: true,
    subRoutes: {
      WorkDetail: {
        icon: '作',
        title: 'WORK',
        path: '/work/:title',
        component: WorkDetail,
      },
    }
  },
}

export default routes