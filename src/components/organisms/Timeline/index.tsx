import React, { useState, useEffect } from 'react'
import { useTrail, useSpring } from 'react-spring'

import { Data } from '../../pages/Bio/data'

import { Container, OuterLine, Line, SubWrapper, SubContainer, CircleYo, Date, Title } from './styled'

interface Props {
  data: Data[]
  onChange: (arg: number) => void
}

const BioTimeline: React.FC<Props> = ({ data, onChange }) => {
  const [index, setIndex] = useState(0)
  const calcHeight = (100 / data.length) * (1 + index)

  const trail = useTrail(data.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' }
  })

  useEffect(() => {
    onChange(index)
  }, [index, onChange])

  return (
    <Container>
      <OuterLine>
        <Line style={useSpring({ height: `${calcHeight - ((100 / (24 - ((1 + index) * 0.01))) + (data.length - index))}%` })} />
      </OuterLine>
      <SubWrapper>
        {trail.map((style, key) => (
          <SubContainer key={`timeline-item-${key}`} style={style}  onClick={() => setIndex(key)} isOpen={index >= key}>
            <CircleYo />
            <Date>{data[key].date}</Date>
            <Title>{data[key].title}</Title>
          </SubContainer>
        ))}
      </SubWrapper>
    </Container>
  )
}

export default BioTimeline
