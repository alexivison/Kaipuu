import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'

export const Container = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  position: relative;

  display: grid;
  grid-auto-flow: column;
  grid-gap: 32px;

  padding: 32px;

  ${mediaQuery.small} {
    grid-gap: 24px;

    padding: 24px 0;
  }
`)

export const DateContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  z-index: 1;

  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 32px;

  ${mediaQuery.small} {
    grid-gap: 24px;
  }
`)

export const Date = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  color: ${theme.subText};

  ${mediaQuery.small} {
    line-height: 1.5;
  }
`)

export const Content = styled(animated.div)(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  width: fit-content;

  color: ${theme.text};
  background-color: ${theme.background};

  padding: 16px;

  ${mediaQuery.small} {
    width: auto;
  }
`)

export const Title = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  ${mediaQuery.small} {
    line-height: 1.5;
  }
`)

export const Body = styled.p(() => `
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
`)