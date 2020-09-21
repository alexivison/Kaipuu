import React from 'react'
import { useSpring } from 'react-spring'

import { 
  Container,
  Indicator 
} from './styled'

export type ProgressLevel = 0 | 1 | 2 | 3 | 4

interface Props {
  level: ProgressLevel
}

const ProgressBar: React.FC<Props> = ({ level }) => {
  const spring = useSpring({ from: { width: '0%' }, to: { width: `${(100 / 4) * level}%` } })

  return (
    <Container>
      <Indicator style={spring} />
    </Container>
  )
}

export default ProgressBar
