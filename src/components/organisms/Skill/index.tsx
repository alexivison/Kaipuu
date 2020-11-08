import React from 'react'

import { 
  Container, 
  SkillIcon, 
  IndicatorContainer,
  Title,
} from './styled'

import ProgressBar from '../../molecules/ProgressBar'

interface Props {
  title: string
  image: string
  level: SkillProgressLevel
}

const Skill: React.FC<Props> = ({ title, image, level }) => {
  return (
    <Container>
      <SkillIcon src={image} />
      <IndicatorContainer>
        <Title>{title}</Title>
        <ProgressBar level={level} />
      </IndicatorContainer>
    </Container>
  )
}

export default Skill
