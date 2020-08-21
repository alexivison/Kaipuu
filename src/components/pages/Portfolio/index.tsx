import React from 'react'

import data from './data'
import { Container } from './styled'

import Masonry from '../../organisms/Masonry'
import Produce from '../../organisms/Produce'

const Portfolio: React.FC = () => {
  return (
    <Container>
      <Masonry gap={24}>
        {data.map((props, index) => (
          <Produce key={index} {...props} />
        ))}
      </Masonry>
    </Container>
  )
}

Portfolio.header = {
  title: '製作物',
  subTitle: 'イェー'
}

export default Portfolio
