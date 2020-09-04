import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router'
import { useTransition } from 'react-spring'

import useDetectMobile from '../../hooks/useDetectMobile'

import data from './data'
import { 
  Container, 
  LeftColumn, 
  RightColumn, 
  HogeContainer, 
  NextButton, 
  BackButton,
  Huuga,
  InnerHuuga,
} from './styled'

import ProfileCard from '../../organisms/ProfileCard'
import Timeline from '../../organisms/Timeline'

const Bio: React.FC = () => {
  const { push } = useHistory()
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
      delay: 300 
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

  const onClickNext = useCallback(() => {
    if ((activeIndex + 1) === data.length) {
      return push('/skills')
    }
    setIsGoingBack(false)
    return setActiveIndex(activeIndex + 1)
  }, [activeIndex])

  const onClickBack = useCallback(() => {
    setIsGoingBack(true)
    return setActiveIndex(activeIndex - 1)
  }, [activeIndex])

  return (
    <Container>
      {isMobile 
        ?
          <Huuga stages={data.length}>
            <InnerHuuga stage={activeIndex + 1} />
          </Huuga>
        : 
          <LeftColumn>
            <Timeline data={data} onChange={(index) => setActiveIndex(index)} />
          </LeftColumn>}
        {transitions.map(({ key, props }) => (
          <RightColumn key={key} style={props}>
            <ProfileCard title={isMobile ? data[activeIndex].title : undefined} text={data[activeIndex].text} image={data[activeIndex].image} date={isMobile ? data[activeIndex].date : undefined} />
            {isMobile && (
              <HogeContainer>
                {activeIndex > 0 && <BackButton onClick={onClickBack} />}
                <NextButton onClick={onClickNext} />
              </HogeContainer>
            )}
          </RightColumn>
        ))}
    </Container>
  )
}

Bio.header = {
  title: "ALEKSI TUOMINEN",
  subTitle: "アレクシ・トゥオミネン"
}

export default Bio
