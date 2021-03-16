import styled from 'styled-components'

import BaseText from '../../atoms/Text'
import BaseImage from '../../atoms/Image'

export const Container = styled.div``

export const ImageContainer = styled.div(({ theme: { mediaQuery } }) => `
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;

  ${mediaQuery.small} {

  }

  ${mediaQuery.small} {
    position: initial;
  }
`)

export const TextContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  padding: 0px 16px;

  ${mediaQuery.small} {
    padding: 16px 24px;
    border: 2px solid ${theme.text};
  }
`)

export const ProfileImage = styled(BaseImage)(({ theme: { mediaQuery } }) => `
  width: 340px;
  height: 340px;
  filter: saturate(0.3);

  ${mediaQuery.small} {

  }

  ${mediaQuery.small} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    border-radius: 0px;
    z-index: -1;
    filter: saturate(0.3) opacity(0.5);
  }
`)


export const Title = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  font-size: 40px;
  letter-spacing: 4px;
  line-height: 1;
  font-weight: 400;
  margin-left: -96px;
  width: max-content;
  padding: 16px;
  background-color: ${theme.background};
  color: ${theme.text};

  ${mediaQuery.small} {
    font-size: 32px;
  }

  ${mediaQuery.small} {
    width: auto;
    font-size: 24px;
    margin: 0;
    padding: 16px 0;
    background-color: initial;
  }
`)

export const Text = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  overflow-wrap: break-word;
  white-space: pre-line;
  margin-bottom: 8px;
  line-height: 2;
  color: ${theme.text};

  ${mediaQuery.small} {
    font-size: 16px;
    line-height: 1.5;
  }
`)

export const Date = styled(BaseText)(({ theme: { mediaQuery } }) => `
  ${mediaQuery.small} {
    display: none;
  }
`)
