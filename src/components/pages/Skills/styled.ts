import styled from 'styled-components'

import BaseText from '../../atoms/Text'

export const Container = styled.section(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;

  background-color: ${theme.background};

  padding: 80px 20vw;

  ${mediaQuery.small} {
    padding: 24px;
  }
`)

export const Category = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  justify-self: center;

  font-size: 32px;
  color: ${theme.subText};

  transition: all .2s ease-in-out;

  &:before {
    content: "."
  }

  ${mediaQuery.small} {
    justify-self: start;

    font-size: 24px;
  }
`)

export const ScrollContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-gap: 32px;
  width: 100%;

  filter: opacity(0.7);
  transition: all .2s ease-in-out;

  ${mediaQuery.small} {
    grid-gap: 16px;
  }
`)

export const SkillListWrapper = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;

  &:hover {
    ${Category} {
      color: ${theme.text};
    }

    ${ScrollContainer} {
      filter: opacity(1);
    }
  }

  ${mediaQuery.small} {
    padding: 0;
  }
`)

export const SkillContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  align-items: start;

  padding: 40px 0;

  ${mediaQuery.small} {
    grid-template-columns: none;
    grid-template-rows: repeat(3, min-content);
    grid-gap: 40px;
  }
`)

export const PageNumberContainer = styled.div(() => `
  justify-self: end;
`)
