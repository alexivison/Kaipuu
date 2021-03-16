import React from 'react'

import { 
  Container, 
  SkillIcon, 
  IndicatorContainer,
} from './styled'

import ProgressBar from '../../molecules/ProgressBar'

interface Props {
  image: string
  level: SkillProgressLevel
}

const Skill: React.FC<Props> = ({ image, level }) => {
  return (
    <Container>
      <SkillIcon src={image} />
      <IndicatorContainer>
        <ProgressBar level={level} />
      </IndicatorContainer>
    </Container>
  )
}

export default Skill
