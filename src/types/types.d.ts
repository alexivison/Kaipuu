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

declare type BioPageData = {
  date: string
  image: string
  title: string
  text: string
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
  type: WorkType
  title: string
  description: string
  figmaFileUrl?: string
  thumbnail: string
  images: string[]
}

declare type WorkType = 'design' | 'music' | 'development' | 'post'
