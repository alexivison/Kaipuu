import styled from 'styled-components'

export const Container = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 16px;

  ${mediaQuery.small} {
    grid-gap: 8px;
  }
`)

export const Title = styled.h1(({ theme: { mediaQuery, ...theme } }) => `
  color: ${theme.text};
  font-size: 48px;
  letter-spacing: 8px;

  ${mediaQuery.small} {
    font-size: 24px;
    letter-spacing: 4px;
  }
`)

export const SubTitle = styled.h2(({ theme: { mediaQuery, ...theme } }) => `
  color: ${theme.subText};
  font-size: 24px;

  ${mediaQuery.small} {
    font-size: 16px;
  }
`)
