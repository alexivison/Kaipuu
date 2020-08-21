import React, { useState, useEffect, useRef } from 'react'

import { Container, Column } from './styled'

import { Div } from '../../../types/enhance'

import useEventListener from '../../hooks/useEventListener'

const fillCols = (children: React.ReactNode, cols: Array<any>): void => React.Children.forEach(children, (child, index) => cols && cols[index % cols.length]?.push(child))

interface Props {
  gap?: number
  minWidth?: number
}

const Masonry: React.FC<Props> = ({ children, gap = 16, minWidth = 300 }) => {
  const ref = useRef<Div>(null)
  const [numCols, setNumCols] = useState(3)

  const cols: Array<any> = [...Array(numCols)].map(() => [])

  const resizeHandler = (): void => setNumCols(Math.ceil((ref?.current?.offsetWidth || 0) / minWidth))

  fillCols(children, cols)

  useEffect(resizeHandler, [])

  useEventListener('resize', resizeHandler)

  return (
    <Container ref={ref} gap={gap}>
      {[...Array(numCols)].map((_, index) => (
        <Column key={index} gap={gap}>
          {cols[index]}
        </Column>
      ))}
    </Container>
  )
}

export default Masonry
