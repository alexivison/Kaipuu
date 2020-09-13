import KosenPicture from '../../../res/img/kosen.jpg'
import AMKPicture from '../../../res/img/default-profile.jpg'
import TonpeiPicture from '../../../res/img/tonpei.jpg'
import InttiPicture from '../../../res/img/intti-profile.jpg'
import ProfilePicture from '../../../res/img/profile.jpg'

export interface Data {
  date: string
  image: string
  title: string
  text: string
}

const data: Data[] = [
  { 
    date: '1994', 
    image: ProfilePicture,
    title: 'こんにちは、世界！', 
    text: `
    誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生
    誕生誕生誕生誕生誕生誕生誕生誕生誕生誕生
    `
  },
  {
    date: '2015',
    image: KosenPicture,
    title: '仙台高等専門学校で３ヶ月交換留学',
    text: `
    高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高
    専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専
    高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専高専
    `
  },
  {
    date: '2016',
    image: TonpeiPicture,
    title: '東北大学で一年間交換留学',
    text: `
    東北大学東北大学東北大学東北大学東北大学東北大学
    東北大学東北大学
    東北大学東北大学東北大学東北大学東北大学東北大学東北大学東北大学東北大学東北大学東北大学
    東北大学東北大学東北大学東北大学
    `
  },
  {
    date: '2017',
    image: AMKPicture,
    title: 'Turku応用科学大学を卒業',
    text:`
    Turku応用Turku応用Turku応用Turku応用Turku応用
    Turku応用Turku応用
    Turku応用Turku応用Turku応用Turku応用Turku応用Turku応用Turku応用Turku応用
    Turku応用Turku応用Turku応用
    `
  },
  {
    date: '2020',
    image: InttiPicture,
    title: 'フィンランド陸軍・Pori旅団に入団',
    text: `
    軍隊軍隊軍隊軍隊
    軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊軍隊
    軍隊軍隊軍隊軍隊軍隊軍隊
    `
  },
]

export default data
