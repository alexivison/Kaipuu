import React, { useState } from 'react'

import { 
  Container, 
  ImageContainer, 
  TextContainer, 
  Title, 
  Text, 
  Date, 
  ProfileImage
} from './styled'

interface Props {
  image: string
  title?: string
  text?: string
  date?: string
}

const ProfileCard: React.FC<Props> = ({ image, text = '', title, date }) => {
  const [savedText,] = useState(text.trim())
  const [savedImage,] = useState(image)
  const [savedTitle,] = useState(title)

  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={savedImage} />
      </ImageContainer>
      <Date>{date}</Date>
      <TextContainer>
        {title && <Title>{savedTitle}</Title>}
        <Text>{savedText}</Text>
      </TextContainer>
    </Container>
  )
}

export default ProfileCard
