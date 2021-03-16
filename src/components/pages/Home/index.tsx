import React from 'react'

import { 
  Container,
  TextContainer,
  Title, 
  TitleContainer,
  SubTitle,
  Image,
 } from './styled'

const Home: React.FC = () => {
  return (
    <Container id="top">
      <TextContainer>
        <SubTitle>Aleksi Tuominen</SubTitle>
        <TitleContainer>
          <Title>development</Title>
          <Title>design</Title>
        </TitleContainer>
      </TextContainer>
      <Image />
    </Container>
  )
}

export default Home
