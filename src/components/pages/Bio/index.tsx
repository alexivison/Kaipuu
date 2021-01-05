import React, { useState, useCallback } from 'react'
import { useTransition } from 'react-spring'

import useDetectMobile from '../../hooks/useDetectMobile'

import data from '../../../res/pageData/bio'
import { 
  Container, 
  LeftColumn, 
  RightColumn,
  MobileTimelineNav,
  MobileTimelineDate,
  MobileTimelineNavItem,
  MobileTimelineNavIndicator,
} from './styled'

import ProfileCard from '../../organisms/ProfileCard'
import Timeline from '../../organisms/Timeline'

const Bio: React.FC = () => {
  const isMobile = useDetectMobile()

  const [activeIndex, setActiveIndex] = useState(0)
  const [isGoingBack, setIsGoingBack] = useState(false)

  const transitions = useTransition(activeIndex, item => item, {
    from: { 
      opacity: 0, 
      transform: isMobile
        ? isGoingBack 
          ? 'translate3d(-300px, 0px, 0)'
          : 'translate3d(300px, 0px, 0)' 
        : 'translate3d(0px, -48px, 0)'
    },
    enter: {
      opacity: 1, 
      transform: 'translate3d(0px, 0px, 0)', 
    },
    leave: { 
      opacity: 0, 
      transform: isMobile 
        ? isGoingBack 
          ? 'translate3d(300px, 0px, 0)'
          : 'translate3d(-300px, 0px, 0)' 
        : 'translate3d(0px, 48px, 0)' 
    },
  })

  const onClickHandler = useCallback((index: number) => {
    setIsGoingBack(index < activeIndex)
    setActiveIndex(index)
  }, [activeIndex])

  return (
    <Container>
      {isMobile 
        ? // TODO: Separate this into its own component
          <MobileTimelineNav>
            {Object.values(data).map((item, index) => (
              <MobileTimelineNavItem key={item.date} onClick={() => onClickHandler(index)}>
                <MobileTimelineDate>{item.date}</MobileTimelineDate>
                <MobileTimelineNavIndicator isActive={activeIndex === index} />
              </MobileTimelineNavItem>
            ))}
          </MobileTimelineNav>
        : 
          <LeftColumn>
            <Timeline data={data} onChange={(index) => setActiveIndex(index)} />
          </LeftColumn>}
        {transitions.map(({ key, props }) => (
          <RightColumn key={key} style={props}>
            <ProfileCard title={data[activeIndex].title} text={data[activeIndex].text} image={data[activeIndex].image} date={isMobile ? data[activeIndex].date : undefined} />
          </RightColumn>
        ))}
    </Container>
  )
}

export default Bio
