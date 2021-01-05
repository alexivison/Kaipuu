import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'

export const Container = styled.div(({ theme: { mediaQuery, ...theme } }) => `
  position: relative;
  display: grid;
  align-self: end;
  width: 80%;
  height: 90%;
  border: 4px solid ${theme.text};
  border-bottom: none;
  padding: 40px;
  padding-right: 62px;

  ${mediaQuery.medium} {
    border: none;
    padding: 32px;
    padding-right: inherit;
  }
`)

export const CategorySwitch = styled.div(() => `
  position: absolute;
  right: -132px;
  top: 32px;
  display: grid;
  grid-gap: 40px;
`)

export const Category = styled(BaseText)<{ isActive: boolean }>`
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ isActive, theme }) => isActive ? theme.text : theme.subText};

  &:before {
    content: "."
  }

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

export const SkillContainer = styled.div`
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ScrollContainer = styled(animated.div)`
  position: absolute;
  display: grid;
  grid-gap: 32px;
  width: 100%;

  ${({ theme }) => theme.isMobile && `
    grid-gap: 24px;
    padding: 0 24px 24px;
  `}
`

export const ListEndIndicator = styled.div`
  justify-self: center;
  width: 40%;
  height: 3px;
  background: ${({ theme }) => theme.subText};
`
