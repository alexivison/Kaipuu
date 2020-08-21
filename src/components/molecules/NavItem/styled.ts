import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled(animated.div)<{ isActive: boolean }>`
  display: grid;
  grid-gap: 4px;
  color: ${({ theme, isActive }) => isActive ? theme.text : theme.subText};
  transition: color .2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

export const ActiveIndicator = styled(animated.div)`
  height: 4px;
  background-color: ${({ theme }) => theme.accent};
`
