import styled, { keyframes } from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const LogoAnimation = keyframes`
  0% { filter: saturate(1); }
  25% { filter: saturate(0.5); }
  50% { filter: saturate(1); }
  75% { filter: saturate(1.5); }
  100% { filter: saturate(1); }
`

export const Logo = styled.div`
  display: grid;
  grid-gap: 16px;
  justify-self: center;
  align-self: center;
  justify-items: center;
  padding: 16px;
`

export const Image = styled(animated.div)<{ src: string }>`
  mask-image: ${({ src }) => `url("${src}");`}
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
`

export const Upper = styled(Image)`
  width: 25vh;
  height: 25vh;
  background-color: ${({ theme }) => theme.accent};
  animation: ${LogoAnimation} 8s infinite;
`

export const Center = styled(Image)`
  width: 30vh;
  height: 6vh;
  background-color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    width: 34vh;
    height: 10vh;
  }
`

export const Lower = styled(Image)`
  width: 25vh;
  height: 25vh;
  background-color: ${({ theme }) => theme.accent};
  animation: ${LogoAnimation} 11s infinite;
`
