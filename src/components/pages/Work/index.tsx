/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'

import data from '../../../res/pageData/work'
import { 
  Container,
  SectionHeaderWrapper,
  WorkContainer,
  ScrollContainer,
} from './styled'

import Produce from '../../organisms/Produce'
import SectionHeader from '../../molecules/SectionHeader'
import PageNumber from '../../atoms/PageNumber'

const Work: React.FC = () => {
  return (
    <Container>
      <SectionHeaderWrapper>
        <SectionHeader title="work" subTitle="作" />
        <PageNumber>3</PageNumber>
      </SectionHeaderWrapper>
      <WorkContainer>
        <ScrollContainer>
          {data.map(({ company, ...rest }) => (
            <Produce
              key={`work-${company}`}
              company={company}
              {...rest}
            />
          ))}
        </ScrollContainer>
      </WorkContainer>
    </Container>
  )
}

export default Work
