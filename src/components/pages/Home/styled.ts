import styled from 'styled-components'

import Text from '../../atoms/Text'
import TopPicture from '../../../res/img/top.png'


export const Container = styled.section(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-template-columns: 1fr 45vw;
  height: 100vh;
  background-color: ${theme.background};

  ${mediaQuery.small} {
    display: flex;
    align-items: flex-end;

    background-image: url(${TopPicture});
    background-repeat: no-repeat;
    background-size: cover;
  }
`)

export const TextContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-gap: 40px;
  align-content: center;
  padding: 80px;

  ${mediaQuery.small} {
    display: flex;
    flex-direction: column;
    grid-gap: 0px;

    width: 100%;

    padding: 24px 0px;
  }
`)

export const TitleContainer = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  justify-content: end;

  padding: 40px 0;
  border: 4px solid ${theme.text};

  transform: translateX(calc(-80px - 4px)); // The padding of the parent + border-width

  ${mediaQuery.small} {
    padding: 24px 0;

    border: none;

    transform: none;
  }
`)

export const Title = styled(Text)(({ theme: { mediaQuery, ...theme } }) => `
  justify-self: end;

  font-size: 64px;
  letter-spacing: 8px;
  padding: 24px 0;
  background-color: ${theme.background};
  color: ${theme.text};

  transform: translateX(calc(80px + 4px)); // Reverse the transform of the parent

  ${mediaQuery.small} {
    color: ${theme.subText};
    font-size: 24px;

    padding: 16px;

    transform: none;
  }
`)

export const SubTitle = styled(Text)(({ theme: { mediaQuery, ...theme } }) => `
  font-size: 32px;
  color: ${theme.subText};

  ${mediaQuery.small} {
    font-size: 24px;
    color: ${theme.text};

    padding: 0 24px;
  }
`)

export const Image = styled.div(({ theme: { mediaQuery } }) => `
  background-image: url(${TopPicture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${mediaQuery.small} {
    display: none;
  }
`)
