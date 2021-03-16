import styled from 'styled-components'
import { animated } from 'react-spring'

export const Container = styled.div`
  position: relative;
  display: grid;
  height: 24px;
  width: 100%;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.text};
`

export const Indicator = styled(animated.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.text};
`
