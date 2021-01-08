import React, { useState, useEffect } from 'react'
import { animated, useTrail, useTransition } from 'react-spring'

import useDetectMobile from '../../hooks/useDetectMobile'

import baseData  from '../../../res/pageData/skills'
import { 
  Container,
  CategorySwitch,
  Category,
  SkillContainer,
  ScrollContainer,
  ListEndIndicator
} from './styled'

import Skill from '../../organisms/Skill'

const Skills: React.FC = () => {
  const isMobile = useDetectMobile()

  const [data, setData] = useState<SkillPageData[]>(baseData.filter((item) => item.category === 'web'))
  const [category, setCategory] = useState<SkillCategory>('web')

  useEffect(() => {
    setData(baseData.filter((item) => item.category === category))
  }, [category])

  const trail = useTrail(data.length, {
    config: { duration: 600 },
    from: { opacity: 0, transform: 'translate3d(0, 0px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
  })

  const transitions = useTransition(category, null, {
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
 

  return (
    <Container>
      {!isMobile && 
        <CategorySwitch>
          <Category
            isActive={category === 'web'} 
            onClick={() => setCategory('web')}
          >
            web
          </Category>
          <Category
            isActive={category === 'native'} 
            onClick={() => setCategory('native')}
          >
            native
          </Category>
          <Category
            isActive={category === 'design'}
            onClick={() => setCategory('design')}
          >
            design
          </Category>
        </CategorySwitch>
      }
      <SkillContainer>
        {transitions.map(({ key, props }) => (
          <ScrollContainer key={key} style={props}>
            {trail.map((props, index) => (
              <animated.div key={index} style={props}>
                <Skill title={data[index].title} image={data[index].image} level={data[index].level} />
              </animated.div>
            ))}
            <ListEndIndicator />
          </ScrollContainer>
        ))}
      </SkillContainer>
    </Container>
  )
}

export default Skills
