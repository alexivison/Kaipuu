import React, { useEffect, useState } from 'react'
import { useTrail, animated } from 'react-spring'

import DefaultPicture from '../../../res/img/default-profile.jpg'

import { Container, ImageContainer, TextContainer, Title, Text, Date, ProfileImage } from './styled'

interface Props {
  image?: string
  title?: string
  text?: string
  date?: string
}

const BioInfo: React.FC<Props> = ({ image = DefaultPicture, text = '', title, date }) => {
  const [splittedText, setSplittedText] = useState<string[]>([])
  const [savedImage,] = useState(image)
  const [savedTitle,] = useState(title)

  const trail = useTrail(splittedText.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1.0,
    x: 0,
    from: { opacity: 0, x: 20 },
    delay: 300,
  })

  useEffect(() => {
    setTimeout(() => setSplittedText(text.split(/[\n,]+/).filter(Boolean)), 300)
  }, [text])

  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={savedImage} />
      </ImageContainer>
      <Date>{date}</Date>
      <TextContainer>
        {title && <Title>{savedTitle}</Title>}
        {trail.map(({ x, ...rest }, index) => (
          <animated.div key={`timeline-text-${index}`} style={{ transform: x.to(x => `translate3d(0, ${x}px, 0)`), ...rest }}>
            <Text>{splittedText[index]}</Text>
          </animated.div>
        ))}
      </TextContainer>
    </Container>
  )
}

export default BioInfo
