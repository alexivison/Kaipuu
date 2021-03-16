import styled from 'styled-components'

import BaseText from '../../atoms/Text'

export const Container = styled.div(({ theme: { mediaQuery } }) => `
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  ${mediaQuery.small} {
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
    grid-gap: 16px;
  }
`)

export const CategoryContainer = styled.div(({ theme: { mediaQuery } }) => `
  display: flex;
  flex-direction: row;

  ${mediaQuery.small} {
    flex-direction: column-reverse;
  }
`)

export const ThumbnailContainer = styled.div(({ theme: { mediaQuery } }) => `
  position: relative;

  width: 200px;
  height: 200px;

  margin-left: 24px;

  ${mediaQuery.small} {
    width: auto;

    margin-left: 0;
    margin-bottom: 24px;
  }
`)

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

export const Index = styled(BaseText)(({ theme }) => `
  position: absolute;
  right: 16px;
  top: 16px;

  color: ${theme.background};
`)

export const Category = styled(BaseText)(({ theme: { mediaQuery, ...theme } }) => `
  font-size: 24px;
  text-align: end;

  color: ${theme.subText};

  writing-mode: vertical-rl;
  transform: rotate(180deg);

  ${mediaQuery.small} {
    font-size: 16px;
    text-align: start;

    writing-mode: inherit;
    transform: none;
  }
`)

export const TextContainer = styled.div(({ theme }) => `
  position: relative;

  display: flex;
  flex-direction: column;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${theme.subText};
    left: 100%;
    top: calc(8px + 2px);
  }
`)

export const Title = styled.h3(({ theme: { mediaQuery, ...theme } }) => `
  position: relative;

  display: flex;
  flex-direction: row;

  padding-bottom: 16px;

  color: ${theme.text};
  font-size: 32px;
  font-weight: 500;
  font-weight: 500;
  letter-spacing: 2px;

  &:after {
    content: "";
    flex: 1;
    display: block;
    height: 2px;
    background-color: ${theme.subText};
    margin-top: calc(8px + 2px);
    margin-left: 16px;
  }

  ${mediaQuery.small} {
    font-size: 24px;
  }
`)

export const Description = styled(BaseText)`
  line-height: 1.5;
`

export const ProjectContainer = styled.div(({ theme: { mediaQuery } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 32px;

  ${mediaQuery.small} {
    grid-gap: 24px;
  }
`)

export const Project = styled.div(() => `
  display: grid;
  grid-gap: 8px;
  grid-template-rows: repeat(3, auto);
`)

export const ProjectTitle = styled.h4(({ theme }) => `
  font-size: 24px;
  font-weight: 300;
  color: ${theme.text};
`)

export const ProjectPosition = styled(BaseText)(({ theme }) => `
  color: ${theme.subText};
`)

export const ProjectDescription = styled(BaseText)(() => `
  line-height: 1.5;
  padding: 8px 0;
`)
