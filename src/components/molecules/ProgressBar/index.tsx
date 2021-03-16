import React from 'react'
import { useSpring } from 'react-spring'

import { 
  Container,
  Indicator 
} from './styled'

interface Props {
  level: SkillProgressLevel
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
