import React from 'react'

import data  from '../../../res/pageData/skills'
import { 
  Container,
  SkillListWrapper,
  Category,
  SkillContainer,
  ScrollContainer,
  PageNumberContainer,
} from './styled'

import Skill from '../../organisms/Skill'
import SectionHeader from '../../molecules/SectionHeader'
import PageNumber from '../../atoms/PageNumber'

const Skills: React.FC = () => {
  return (
    <Container>
      <SectionHeader title="skills" subTitle="技" />
      <SkillContainer>
        <SkillListWrapper>
          <Category>web</Category>
          <ScrollContainer>
            {data.filter(({ category }) => category === 'web').map((item) => (
              <Skill key={item.title} image={item.image} level={item.level} />
            ))}
          </ScrollContainer>
        </SkillListWrapper>
        <SkillListWrapper>
          <Category>native</Category>
          <ScrollContainer>
            {data.filter(({ category }) => category === 'native').map((item) => (
              <Skill key={item.title} image={item.image} level={item.level} />
            ))}
          </ScrollContainer>
        </SkillListWrapper>
        <SkillListWrapper>
          <Category>design</Category>
          <ScrollContainer>
            {data.filter(({ category }) => category === 'design').map((item) => (
              <Skill key={item.title} image={item.image} level={item.level} />
            ))}
          </ScrollContainer>
        </SkillListWrapper>
      </SkillContainer>
      <PageNumberContainer>
        <PageNumber>2</PageNumber>
      </PageNumberContainer>
    </Container>
  )
}

export default Skills
