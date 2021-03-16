import React  from 'react'
import { useTrail } from 'react-spring'

import { 
  Container, 
  DateContainer,  
  Date,
  Content,
  Title,
} from './styled'

interface Props {
  data: TimelineData[]
}

const BioTimeline: React.FC<Props> = ({ data }) => {
  const trail = useTrail(data.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' }
  })

  return (
    <Container>
      <DateContainer>
        {trail.map((style, key) => (
          <Content key={`timeline-item-${key}`} style={style}>
            <Date>{data[key].date}</Date>
            <Title>{data[key].title}</Title>
          </Content>
        ))}
      </DateContainer>
    </Container>
  )
}

export default BioTimeline
