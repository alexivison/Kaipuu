import React from 'react'

import {
  Container,
  Title,
  SubTitle,
} from './styled'

interface Props {
  title: string
  subTitle: string
}
const SectionHeader: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

export default SectionHeader
