import styled from 'styled-components'

import Link from '../../atoms/Link'
import Text from '../../atoms/Text'

export const Container = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  align-self: end;
  align-items: end;
  justify-items: center;
  height: 90%;
  padding: 8vh;
  border: 4px solid ${theme.text};
  border-bottom: none;

  ${mediaQuery.medium} {
    height: 100%;
    border: none;
  }
`)

export const TextContainer = styled.div(({ theme: { mediaQuery } }) => `
  display: grid;
  align-self: center;

  ${mediaQuery.medium} {
    grid-gap: 24px;
  }
`)

export const Title = styled(Text)(({ theme: { mediaQuery, ...theme } }) => `
  font-size: 5vw;
  letter-spacing: 8px;
  width: max-content;
  padding: 16px 0;
  background-color: ${theme.background};
  color: ${theme.text};

  ${mediaQuery.medium} {
    width: auto;
    font-size: 32px;
  }
`)

export const SubTitleContainer = styled.div(() => `
  display: grid;
  grid-gap: 16px;
`)

export const SubTitle = styled(Text)(({ theme }) => `
  color: ${theme.text};
`)

export const Menu = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: column;
  grid-gap: 56px;
  font-size: 24px;
  color: ${theme.text};

  ${mediaQuery.medium} {
    grid-gap: 32px;
    font-size: 24px;
  }

  ${mediaQuery.small} {
    grid-gap: 24px;
    font-size: 16px;
  }
`)

export const MenuItem = styled(Link)(() => ``)
