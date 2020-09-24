import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'
import ExternalLink from '../../atoms/ExternalLink'
import SidewaysContainer from '../../hocs/SidewaysContainer'

export const Container = styled(animated.div)`
  position: fixed;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
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

export const Separator = styled.div`
  width: 4px;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.accent};
`

export const SocialContainer = styled(SidewaysContainer)`
  padding: 13px;
`

export const SocialLink = styled(ExternalLink)`
  color: ${({ theme }) => theme.text};
`