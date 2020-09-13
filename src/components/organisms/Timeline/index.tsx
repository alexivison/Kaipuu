import React, { useState, useEffect } from 'react'
import { useTrail, useSpring } from 'react-spring'

import { Data } from '../../pages/Bio/data'

import { 
  Container, 
  OuterLine, 
  Line, 
  SubWrapper, 
  SubContainer, 
  Date, 
} from './styled'

interface Props {
  data: Data[]
  onChange: (arg: number) => void
}

const BioTimeline: React.FC<Props> = ({ data, onChange }) => {
  const [index, setIndex] = useState(0)
  const calcHeight = (100 / data.length) * index

  // FIXME: Dunno why this works...
  const hage = (() => {
    switch(index) {
      case 0:
        return 7
      case 1:
        return 10
      case 2:
        return 13
      case 3:
        return 16
      case 4:
        return 19
      default:
        return 0
    }
  })()

  const hoge = (() => {
    switch(index) {
      case data.length -1:
        return 100
      default:
        return calcHeight + hage
    }
  })()

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
        <Line style={useSpring({ height: `${hoge}%` })} />
      </OuterLine>
      <SubWrapper>
        {trail.map((style, key) => (
          <SubContainer key={`timeline-item-${key}`} style={style}  onClick={() => setIndex(key)} isOpen={index === key}>
            <Date>{data[key].date}</Date>
          </SubContainer>
        ))}
      </SubWrapper>
    </Container>
  )
}

export default BioTimeline
