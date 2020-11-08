import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'

import useSidebarContext from '../../hooks/useSidebarContext'

import data from '../../../res/pageData/work'
import {
  Container,
  TextContainer,
  Title,
  Description,
  BackButton,
  ToggleContainer,
  Toggle,
  ImageContainer,
  Image,
  FigmaFrame,
} from './styled'

interface Params {
  title: string
}

const WorkDetail: React.FC = () => {
  const params = useParams<Params>()

  const work = useMemo(() => data.filter((object) => object.title === decodeURI(params.title))[0], [])
  const figmaFile = useMemo(() => work.figmaFileUrl && `https://www.figma.com/embed?embed_host=alexivison&url=${work.figmaFileUrl}`, [])

  const { openSidebar, closeSidebar } = useSidebarContext()

  const [tabIndex, setTabIndex] = useState(0)

  useEffect(() => {
    closeSidebar()

    return () => openSidebar()
  }, [])

  return (
    <Container>
      <TextContainer>
        <Title>{work.title}</Title>
        <Description>{work.description}</Description>
        <BackButton to="/work">back</BackButton>
      </TextContainer>
      <ToggleContainer>
        <Toggle
          isActive={tabIndex === 0}
          onClick={() => setTabIndex(0)}
        >
          gallery
        </Toggle>
        {figmaFile && 
          <Toggle
            isActive={tabIndex === 1}
            onClick={() => setTabIndex(1)}
          >
            figma
          </Toggle>
        }
      </ToggleContainer>
      <ImageContainer tabIndex={tabIndex}>
        {(() => {
          switch(tabIndex) {
          case 0:
            return work.images.map((image) => (
              <Image key={image} src={image} />
            ))
          case 1:
            return figmaFile 
              ? <FigmaFrame allowFullScreen src={figmaFile} /> 
              : null
          default:
            return null
          }
        })()}
      </ImageContainer>
    </Container>
  )
}

export default WorkDetail
