///Global types
declare type RouteMap = {
  [key: string]: Route
}

declare type Route = {
  icon: string
  title: string
  path: string
  component: React.FC
  exact?: boolean
  subRoutes?: RouteMap
}

// PageData
declare type HomePageData = {

}

declare type TimelineData = {
  date: string
  title: string
  text: string
}

declare type BioPageData = {
  description: string
  timeline: TimelineData[]
}

declare type SkillPageData = {
  title: string
  image: string
  category: SkillCategory
  level: ProgressLevel
}

declare type SkillCategory = 'web' | 'native' | 'design'
declare type SkillProgressLevel = 0 | 1 | 2 | 3 | 4

declare type WorkPageData = {
  date: string
  company: string
  description: string
  thumbnail: string
  projects: Project[]
}

declare type Project = {
  title: string
  position: string
  description: string
}
