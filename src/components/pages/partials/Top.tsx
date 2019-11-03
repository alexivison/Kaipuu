import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useScrollYPosition } from '../../hooks/useScroll'

import Placeholder from '../../../res/img/placeholder.png'

const Top: React.FC = () => {
  const scrollY = useScrollYPosition()

  const calculateMultiplier = useCallback((): number => {
    return 1 + scrollY * -0.001
  }, [scrollY])

  return (
    <Container id="top">
      <Image src={Placeholder} multiplier={calculateMultiplier()} />
      <Contents multiplier={calculateMultiplier()}></Contents>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  transform: scale(1);
`
interface ImageProps {
  src: string
  multiplier: number
}
const Image = styled.div<ImageProps>`
  height: 100vh;
  background-image: ${({ src }) => `url("${src}");`}
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: ${({ multiplier }) => multiplier.toString()};
`

interface ContentsProps {
  multiplier: number
}
const Contents = styled.div<ContentsProps>`
  display: grid;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, ${({ multiplier }) => multiplier.toString()});
  opacity: ${({ multiplier }) => multiplier.toString()};
`

export default Top
