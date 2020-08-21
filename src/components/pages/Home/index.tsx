import React, { useCallback, useState, useRef } from 'react'
import { useSpring, useChain } from 'react-spring'
import { useHistory } from 'react-router-dom'

import { Container, Logo, Upper, Center, Lower } from './styled'

import UpperKanji from '../../../res/img/upper-kanji.svg'
import KaipuuText from '../../../res/img/kaipuu-text.png'
import LowerKanji from '../../../res/img/lower-kanji.svg'

const Home: React.FC = () => {
  const { push } = useHistory()
  const [leaving, setLeaving] = useState(false)

  const upperKanjiSpringRef = useRef(null)
  const upperKanjiSpring = useSpring({
    ref: upperKanjiSpringRef,
    config: { mass: 1, tension: 500, friction: 40 },
    to: { transform: `translate3d(${leaving ? -48 : 0}px, 0, 0)`, opacity: leaving ? 0 : 1 },
  })

  const lowerKanjiSpringRef = useRef(null)
  const lowerKanjiSpring = useSpring({
    ref: lowerKanjiSpringRef,
    config: { mass: 1, tension: 500, friction: 60 },
    to: { transform: `translate3d(${leaving ? 48 : 0}px, 0, 0)`, opacity: leaving ? 0 : 1 },
  })

  const centerKanjiSpringRef = useRef(null)
  const centerKanjiSpring = useSpring({
    ref: centerKanjiSpringRef,
    config: { mass: 1, tension: 500, friction: 10 },
    to: { transform: `scale(${leaving ? 3 : 1})`, opacity: leaving ? 0 : 1 },
    onRest: () => push('/bio')
  })

  useChain([upperKanjiSpringRef, lowerKanjiSpringRef, centerKanjiSpringRef], [0.0, 0.1, 0.2])

  const onClickTextHandler = useCallback(() => {
    setLeaving(true)
  }, [])

  return (
    <Container>
      <Logo>
        <Upper src={UpperKanji} style={upperKanjiSpring} />
        <Center src={KaipuuText} style={centerKanjiSpring} onClick={onClickTextHandler} />
        <Lower src={LowerKanji} style={lowerKanjiSpring} />
      </Logo>
    </Container>
  )
}

export default Home
