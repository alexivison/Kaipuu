import ReactLogo from '../../../res/img/react.png'
import ReactNativeLogo from '../../../res/img/react-native.png'
import VueLogo from '../../../res/img/vue.png'
import HTMLLogo from '../../../res/img/html.png'
import CSSLogo from '../../../res/img/css.png'
import JSLogo from '../../../res/img/js.png'
import SwiftLogo from '../../../res/img/swift.png'
import RxLogo from '../../../res/img/rx.png'
import VaporLogo from '../../../res/img/vapor.png'

import { ProgressLevel } from '../../molecules/ProgressBar'

export interface Data {
  title: string
  image: string
  category: SkillCategory
  level: ProgressLevel
}

const data: Data[] = [
  { title: 'React', image: ReactLogo, category: 'web', level: 4 },
  { title: 'Vue', image: VueLogo, category: 'web', level: 2 },
  { title: 'JavaScript', image: JSLogo, category: 'web', level: 3 },
  { title: 'HTML', image: HTMLLogo, category: 'web', level: 4 },
  { title: 'CSS', image: CSSLogo, category: 'web', level: 4 },
  { title: 'React Native', image: ReactNativeLogo, category: 'native', level: 4 },
  { title: 'Swift', image: SwiftLogo, category: 'native', level: 3 },
  { title: 'RxSwift', image: RxLogo, category: 'native', level: 3 },
  { title: 'Vapor', image: VaporLogo, category: 'native', level: 2 },
  { title: 'Figma', image: RxLogo, category: 'design', level: 3 },
  { title: 'Sketch', image: VaporLogo, category: 'design', level: 2 },
]

export default data
