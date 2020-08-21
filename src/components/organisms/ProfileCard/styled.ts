import styled from 'styled-components'

import BaseText from '../../atoms/Text'
import BaseImage from '../../atoms/Image'

export const Container = styled.div`
`

export const ImageContainer = styled.div`
  display: grid;
  justify-items: center;
`

export const TextContainer = styled.div`
  padding: 16px;
`

export const ProfileImage = styled(BaseImage).attrs({
  size: 250
})`
  ${({ theme }) => theme.isMobile ?
  `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  border-radius: 0px;
  z-index: -1;
  filter: opacity(0.5);

  &: after {
    content: "";
    width: 100%;
    position: absolute;
    height: 16px;
    background-color: ${theme.background};
    bottom: -2px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  ` : `
  
  `}
`


export const Title = styled(BaseText)`
  font-size: 22px;
  margin-bottom: 16px;
  line-height: 1;
  font-weight: bold;
`

export const Text = styled(BaseText).attrs({
  lineHeight: 1.5
})`
  overflow-wrap: break-word;
  white-space: pre-line;
  margin-bottom: 8px;

  ${({ theme }) => theme.isMobile && `
    font-size: 18px;
    line-height: 2;
  `}
`

export const Date = styled(BaseText)`

`
