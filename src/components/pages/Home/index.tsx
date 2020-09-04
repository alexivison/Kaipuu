import React from 'react'

import { 
  Container,
  TextContainer,
  Title, 
  SubTitleContainer,
  SubTitle,
  Menu,
  MenuItem,
 } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <Title>ALEKSI TUOMINEN</Title>
        <SubTitleContainer>
          <SubTitle>Web・iOS Engineer</SubTitle>
          <SubTitle>UI・UX Designer</SubTitle>
          <SubTitle>Music Enthusiast</SubTitle>
        </SubTitleContainer>
      </TextContainer>
      <Menu>
        <MenuItem to="/bio">.01＼BIO</MenuItem>
        <MenuItem to="/skills">.02＼SKILLS</MenuItem>
        <MenuItem to="/portfolio">.03＼WORK</MenuItem>
      </Menu>
    </Container>
  )
}

export default Home
