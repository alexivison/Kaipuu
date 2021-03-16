import React from 'react'

import data from '../../../res/pageData/bio'
import { 
  Container, 
  HeaderWrapper,
  Introduction,
  ContentWrapper,
  SocialWrapper,
  SocialLink,
  TimelineWrapper,
  Image,
} from './styled'

import Timeline from '../../organisms/Timeline'
import SectionHeader from '../../molecules/SectionHeader'
import PageNumber from '../../atoms/PageNumber'

import BioImage from '../../../res/img/bio.jpg'

const Bio: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
        <SectionHeader title="about me" subTitle="私" />
        <PageNumber>1</PageNumber>
      </HeaderWrapper>
      <Introduction>
        {data.description}
      </Introduction>
      <ContentWrapper>
        <SocialWrapper>
          <SocialLink href="">Github・</SocialLink>
          <SocialLink href="">Twitter・</SocialLink>
          <SocialLink href="">Soundcloud</SocialLink>
        </SocialWrapper>
        <TimelineWrapper>
          <Timeline data={data.timeline} />
        </TimelineWrapper>
        <Image src={BioImage} />
      </ContentWrapper>
    </Container>
  )
}

export default Bio
