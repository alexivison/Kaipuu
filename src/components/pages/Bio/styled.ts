import styled from 'styled-components'

import BaseText from '../../atoms/Text'

export const Container = styled.section(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;

  background: ${theme.accent};

  padding: 80px 20vw;

  ${mediaQuery.small} {
    padding: 24px;
  }
`)

export const HeaderWrapper = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 1fr auto;
`)

export const Introduction = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  line-height: 1.5;
  font-size: 24px;

  ${mediaQuery.small} {
    font-size: 16px;
  }
`)

export const ContentWrapper = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  position: relative;

  display: flex;
  flex-direction: row;

  ${mediaQuery.small} {
    flex-direction: column-reverse;
  }
`)

export const SocialWrapper = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  z-index: 1;

  font-size: 16px;

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  ${mediaQuery.small} {
    font-size: 14px;
    text-align: center;

    padding: 16px;

    writing-mode: initial;
    transform: none;
  }
`)

export const SocialLink = styled.a(({ theme }) => `
  color: ${theme.text};
  font-weight: 500;

  text-decoration: none;
`)

export const TimelineWrapper = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  width: 100%;

  margin-left: 40px;

  ${mediaQuery.small} {
    margin-left: 0;
  }
`)

export const Image = styled.img(({ theme: { mediaQuery, ...theme } }) => `
  position: absolute;
  top: 0;
  right: 0;

  width: 500px;
  height: 500px;

  opacity: 0.3;
  object-fit: cover;

  ${mediaQuery.small} {
    display: none;
  }
`)
