import styled from 'styled-components'
import { animated } from 'react-spring'

import Text from '../../atoms/Text'

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 8px;
`

export const SubContainer = styled.div<{ isActive: boolean }>`
  display: grid;
  grid-gap: 4px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  color: ${({ theme, isActive }) => isActive ? theme.text : theme.subText};
  transition: color .2s ease-in-out;
  letter-spacing: 4px;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

export const Index = styled(Text).attrs({ 
  size: 24 
})`
  font-weight: 400;
`

export const NavLink = styled.div`
  position: relative;
  line-height: 1;
`

export const Icon = styled(Text)<{ isActive: boolean }>`
  color: inherit;
  transition: font-size .5s ease-in-out;

  ${({ isActive }) => isActive 
    ? `
      font-size: 24px;
    `
    : `
      font-size: 16px;
    `
  }
`

export const Title = styled(animated.div)`
  position: absolute;
`

export const ActiveIndicator = styled(animated.div)`
  width: 4px;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.accent};
`
