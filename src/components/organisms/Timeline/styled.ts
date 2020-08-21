import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: auto 1fr;
`

export const OuterLine = styled.div`
  background-color: ${({ theme }) => theme.accent};
  position: relative;

  &:after {
    content: "";
    position: fixed;
    width: 4px;
    top: 0;
    bottom: 0;
    background-color: inherit;
    box-shadow: 1px 0px 0px 1px ${({ theme }) => theme.highlight};
  }
`

export const Line = styled(animated.div)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 19px;
    height: 20px;
    background-color: ${({ theme }) => theme.accent};
    bottom: -10px;
    left: -7px;
    border-radius: 50%;
    z-index: 3;
  }
` as typeof animated.div

export const SubWrapper = styled.div`
  display: grid;
  grid-gap: 24px;
`

export const Date = styled.div`
  line-height: 1;
  font-size: 12px;
  user-select: none;
  color: ${({ theme }) => theme.subText};
  transition: all .3s ease-in-out;
`

export const Title = styled.div`
  position: relative;
  font-size: 16px;
  user-select: none;
  line-height: 1;
  transition: all .3s ease-in-out;
`

export const SubContainer = styled(animated.div)<{ isOpen: boolean }>`
  display: grid;
  grid-gap: 4px;
  position: relative;
  color: ${({ theme, isOpen }) => isOpen ? theme.accent : theme.text};
  cursor: pointer;

  ${Date} {
    color: ${({ theme, isOpen }) => isOpen ? theme.text : theme.subText};
  } 
`

export const CircleYo = styled.div`
  position: absolute;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.accent};
  left: -42px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 2px 0px 0px 0px ${({ theme }) => theme.highlight};

  &:after {
    content: "";
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.highlight};
    border-radius: 50%;
    z-index: 2;
  }
`
