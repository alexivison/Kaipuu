import styled from 'styled-components'

import BaseText from '../../atoms/Text'
import BaseLink from '../../atoms/Link'
import BaseImage from '../../atoms/Image'

export const Container = styled.div`
  position: absolute;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr auto 2fr;
  width: 100%;
  height: 100%;
  padding: 0 80px;
`

export const TextContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: auto 1fr auto;
  padding: 80px 0;
`

export const Title = styled(BaseText)`
  font-size: 40px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 400;
`

export const Description = styled(BaseText)`
  font-size: 16px;
  line-height: 2;
  font-weight: 200;
`

export const BackButton = styled(BaseLink)`
  font-size: 24px;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.text};

  &:before {
    content: "< ";
  }
`

export const ToggleContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  align-content: start;
  padding: 80px 40px;
`

export const Toggle = styled(BaseText)<{ isActive: boolean }>`
  cursor: pointer;
  font-size: 32px;
  text-transform: uppercase;
  text-orientation: mixed;
  writing-mode: vertical-rl;
  width: fit-content;
  transform: rotate(180deg);

  color: ${({ isActive, theme }) => isActive ? theme.text : theme.subText};

  &:before {
    content: ".";
  }
`

export const ImageContainer = styled.div<{ tabIndex: number }>`
  overflow: ${({ tabIndex }) => tabIndex === 0 ? 'auto' : 'hidden'};
  padding: ${({ tabIndex }) => tabIndex === 0 ? '0px' : '80px'};

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Image = styled(BaseImage)`
  width: 100%;
  height: 70vh;
  background-size: contain;
`

export const FigmaFrame = styled.iframe`
  width: 100%
  height: 100%;
  border: none;
`