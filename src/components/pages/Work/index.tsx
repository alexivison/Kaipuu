/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react'
import { useHistory } from 'react-router'

import data from '../../../res/pageData/work'
import { 
  Container,
  QuoteContainer,
  Quote,
  WorkContainer,
  ScrollContainer,
  Fade,
} from './styled'

import Produce from '../../organisms/Produce'

const Work: React.FC = () => {
  const { push } = useHistory()

  const handleOnProduceClick = useCallback((title: string) => push(`/work/${title}`), [push])

  return (
    <Container>
      <QuoteContainer>
        <Quote quotee="Salvador Dali">Have no fear of perfection -- you’ll never reach it.</Quote>
      </QuoteContainer>
      <WorkContainer>
        <Fade />
        <ScrollContainer>
          {data.map(({ type, title, thumbnail }, index) => (
            <Produce 
              key={title}
              type={type}
              index={index}
              thumbnail={thumbnail}
              onClick={() => handleOnProduceClick(title)}
            />
          ))}
        </ScrollContainer>
      </WorkContainer>
    </Container>
  )
}

export default Work
