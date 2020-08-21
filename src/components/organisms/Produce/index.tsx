import React from 'react'

import { Container, TextWrapper, Title, Date, Description } from './styled'

interface Props {
  image?: string
  title: string
  date: string
  description?: string
}

const Produce: React.FC<Props> = ({ image, title, date, description }) => {
  return (
    <Container src={image}>
      <TextWrapper>
        <Title>{title}</Title>
        <Date>{date}</Date>
        {description && <Description>{description}</Description>}
      </TextWrapper>
    </Container>
  )
}

export default Produce
