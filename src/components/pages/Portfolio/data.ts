export type ProduceType = 'design' | 'music' | 'development' | 'post'

export interface Data {
  type: ProduceType
  image?: string
  title: string
  date: string
  description?: string
  url?: string
}

const data: Array<Data> = [
  { type: 'development', title: 'Sample 1', date: '2020年4月' },
  { type: 'design', title: 'Sample 2', date: '2020年4月', description: 'lorem ipsum' },
  { type: 'music', title: 'Sample 3', date: '2020年4月' },
  { type: 'post', title: 'Sample 4', date: '2020年4月', url: 'https://dmm-corp.com/people/column/business/11/' },
]

export default data
