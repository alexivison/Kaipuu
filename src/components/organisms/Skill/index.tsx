import React from 'react'

import { Container, SkillIcon, IndicatorContainer } from './styled'

import ProgressBar, { ProgressLevel } from '../../molecules/ProgressBar'

interface Props {
  image: string
  level: ProgressLevel
  testLevel: ProgressLevel
}

const Skill: React.FC<Props> = ({ image, level, testLevel }) => {
  return (
    <Container>
      <SkillIcon src={image} />
      <IndicatorContainer>
        <ProgressBar title="実装" level={level} />
        <ProgressBar title="テスト" level={testLevel} />
      </IndicatorContainer>
    </Container>
  )
}

export default Skill
