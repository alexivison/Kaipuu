import React from 'react'

import { 
  Container,  
  Index,
  ThumbnailBackground,
  ThumbnailImage,
  CategoryContainer,
  CategoryBackgroundContainer,
  CategoryBackground,
  Category,
} from './styled'

interface Props {
  index: number
  thumbnail?: string
  type: string
  onClick?: () => void
}

const Produce: React.FC<Props> = ({ index, type, thumbnail, onClick }) => {
  const indexToString = "." + ("00" + index).slice(-3)

  return (
    <Container onClick={onClick}>
      <ThumbnailBackground />
      <CategoryBackgroundContainer>
        <CategoryBackground>{type}</CategoryBackground>
      </CategoryBackgroundContainer>
      <CategoryContainer>
        <Category>{type}</Category>
      </CategoryContainer>
      <ThumbnailImage src={thumbnail} />
      <Index>{indexToString}</Index>
    </Container>
  )
}

export default Produce
