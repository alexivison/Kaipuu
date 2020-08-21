import React from 'react'
import { useSpring } from 'react-spring'

import { Container, Title, Indicator } from './styled'

export type ProgressLevel = 0 | 1 | 2 | 3 | 4

interface Props {
  title: string
  level: ProgressLevel
}

const ProgressBar: React.FC<Props> = ({ title, level }) => {
  const spring = useSpring({ from: { width: '0%' }, to: { width: `${(100 / 4) * level}%` } })

  return (
    <Container>
      <Title>{title}</Title>
      <Indicator style={spring} />
    </Container>
  )
}

export default ProgressBar
