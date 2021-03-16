import React from 'react'

import { 
  Container,
  CategoryContainer,
  Category,
  ThumbnailContainer,  
  Image,
  Index,
  TextContainer,
  Title,
  Description,
  ProjectContainer,
  Project,
  ProjectTitle,
  ProjectPosition,
  ProjectDescription,
} from './styled'

interface Props {
  date: string
  description: string
  company: string
  thumbnail?: string
  projects: Project[]
}

const Produce: React.FC<Props> = ({ company, description, date, thumbnail, projects }) => {
  return (
    <Container>
      <CategoryContainer>
        <Category>{date}</Category>
        <ThumbnailContainer>
          <Image src={thumbnail} />
        </ThumbnailContainer>
      </CategoryContainer>
      <TextContainer>
        <Title>{company}</Title>
        <Description>{description}</Description>
        <ProjectContainer>
          {projects.map(({ title, position, description }) => (
            <Project key={`project-${title}`}>
              <ProjectTitle>{title}</ProjectTitle>
              <ProjectPosition>{position}</ProjectPosition>
              <ProjectDescription>{description}</ProjectDescription>
            </Project>
          ))}
        </ProjectContainer>
      </TextContainer>
    </Container>
  )
}

export default Produce
