import React from 'react'
import { animated, useTrail } from 'react-spring'

import data from './data'
import { Container } from './styled'

import Skill from '../../organisms/Skill'

const Skills: React.FC = () => {

  const trail = useTrail(data.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
  })

  return (
    <Container>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          <Skill image={data[index].image} level={data[index].level} testLevel={data[index].testLevel} />
        </animated.div>
      ))}
    </Container>
  )
}

Skills.header = {
  title: 'スキル',
  subTitle: 'こんだけ書けるぜ'
}

export default Skills
