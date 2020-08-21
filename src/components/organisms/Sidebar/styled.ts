import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'
import ExternalLink from '../../atoms/ExternalLink'

import TwitterLogo from '../../../res/img/twitter.svg'
import SoundcloudLogo from '../../../res/img/soundcloud.svg'
import GithubLogo from '../../../res/img/github.svg'

export const Container = styled(animated.div)`
  position: fixed;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: start;
  height: 100vh;
  z-index: 1;
  padding: 48px;
`

export const Nav = styled.div`
  position: relative;
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: min-content;
`

export const PageTitle = styled(animated.div)`
  position: absolute;
  display: grid;
  grid-gap: 8px;
  width: max-content; 
  line-height: 1;
  user-select: none;
`

export const Title = styled(BaseText).attrs({
  size: 24
})``

export const SubTitle = styled(BaseText).attrs({
  sub: true
})``

export const Social = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
`

export const Icon = styled(ExternalLink)<{ src: string }>`
  background-image: ${({ src }) => `url("${src}");`}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text};
  transition: all .2s ease-in-out;
`

export const Twitter = styled(Icon).attrs({ src: TwitterLogo, to: 'https://twitter.com/DJAlexIvison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #1CA1F230;
    background-color: #1CA1F2;
  }
`

export const Soundcloud = styled(Icon).attrs({ src: SoundcloudLogo, to: 'https://soundcloud.com/alex_ivison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #ff550030;
    background-color: #FF5500;
  }
`

export const Github = styled(Icon).attrs({ src: GithubLogo, to: 'https://github.com/alexivison' })`
  &:hover {
    box-shadow: 0px 0px 0px 8px #00000030;
    background-color: white;
  }
`
