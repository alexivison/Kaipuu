import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'
import ExternalLink from '../../atoms/ExternalLink'

export const Container = styled(animated.div)`
  position: fixed;
  display: grid;
  grid-auto-rows: min-content;
  height: 100vh;
  z-index: 1;
  padding: 48px;
`

export const Nav = styled.div`
  display: grid;
  grid-gap: 24px;
`

export const PageTitle = styled(animated.div)`
  position: absolute;
  user-select: none;
`

export const Title = styled(BaseText).attrs({
  size: 24
})``

export const SubTitle = styled(BaseText).attrs({
  sub: true
})``

export const Inner = styled.div`
  padding: 50% 0;
  height: 0;
`

export const Outer = styled.div`
  display: table;
`

export const Wrapper = styled.div`
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
  margin-top: -50%;
  white-space: nowrap;

  padding: 13px;
`

export const Separator = styled.div`
  width: 4px;
  height: 118px;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.accent};
`

export const SocialLink = styled(ExternalLink)`
  color: ${({ theme }) => theme.text};
`