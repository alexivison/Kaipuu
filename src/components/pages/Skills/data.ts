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
  image: string
  level: ProgressLevel
  testLevel: ProgressLevel
}

const data: Data[] = [
  { image: ReactLogo, level: 4, testLevel: 2 },
  { image: ReactNativeLogo, level: 4, testLevel: 1 },
  { image: VueLogo, level: 2, testLevel: 1 },
  { image: JSLogo, level: 3, testLevel: 0 },
  { image: HTMLLogo, level: 4, testLevel: 0 },
  { image: CSSLogo, level: 4, testLevel: 0 },
  { image: SwiftLogo, level: 3, testLevel: 3 },
  { image: RxLogo, level: 3, testLevel: 3 },
  { image: VaporLogo, level: 2, testLevel: 0 },
]

export default data
