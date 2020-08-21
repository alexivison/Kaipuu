import styled from 'styled-components'

import DefaultImage from '../../../res/img/default-profile.jpg'

import BaseText from '../../atoms/Text'

export const Container = styled.div<{ src?: string }>`
  position: relative;
  display: grid;
  align-items: end;
  background-image: url(${({ src }) => src || DefaultImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  max-height: 250px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 0px 16px 2px ${({ theme }) => theme.highlight};
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 8px 1px ${({ theme }) => theme.highlight};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    transition: all .2s ease-in-out;
    backdrop-filter: blur(2px) grayscale(0.5);
  }

  &:hover: before {
    backdrop-filter: blur(0px) grayscale(0);
  }
`

export const TextWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 4px;

  &:before {
    content: "";
    position: absolute;
    height: 110%;
    left: -16px;
    right: -16px;
    bottom: -17px;
    border-radius: 8px;
    background: ${({ theme }) => theme.highlight};
  }
`

export const Title = styled(BaseText).attrs({
  size: 24,
})`
  z-index: 1;
`

export const Date = styled(BaseText).attrs({
  size: 12,
  sub: true,
})`
  z-index: 1;
`

export const Description = styled(BaseText).attrs({ })`
  z-index: 1;
`
