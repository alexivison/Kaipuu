/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback, useEffect, useState } from 'react'
import * as Figma from 'figma-js'

import data from './data'
import { 
  Container,
  QuoteContainer,
  Quote,
  WorkContainer,
  ScrollContainer,
  Fade,
} from './styled'

import Produce from '../../organisms/Produce'

const Portfolio: React.FC = () => {
  const client = Figma.Client({
    personalAccessToken: "63683-2769d49e-cae8-4a3b-bb5a-65c8d21eae58"
  })

  const [loading, setLoading] = useState(true)
  const [figmaFiles, setFigmaFiles] = useState<Figma.FileSummary[]>([])

  useEffect(() => {
    client.projectFiles('14782664')
      .then(({ data: { files } }) => {
        setFigmaFiles(files.map((file) => ({ ...file })))
        setLoading(false)
      })
      .catch(({ error }) => console.error(error))
  }, [])

  const fetchDetail = useCallback((key: string, name: string) => {
    client.file(key)
      .then(({ data: { document } }) => {
        const displayPage = document.children.find((node) => node.name === 'Display') as Figma.Document
        const displayPageChildrenIds = displayPage.children.map((child) => child.id)

        client.fileImages(key, { ids: displayPageChildrenIds, format: 'png' })
          .then(({ data: { images } }) => {
            console.log({ images })
          })
          .catch(({ error }) => console.error(error))
      })
      .catch(({ error }) => console.error(error))
  }, [])

  return (
    <Container>
      <QuoteContainer>
        <Quote quotee="Salvador Dali">Have no fear of perfection -- you’ll never reach it.</Quote>
      </QuoteContainer>
      <WorkContainer>
        <Fade />
        <ScrollContainer>
          {figmaFiles.map(({ key, name, thumbnail_url }, index) => (
            <Produce 
              key={key} 
              type="design"
              index={index}
              thumbnail={thumbnail_url}
              onClick={() => fetchDetail(key, name)}
            />
          ))}
        </ScrollContainer>
      </WorkContainer>
    </Container>
  )
}

export default Portfolio
