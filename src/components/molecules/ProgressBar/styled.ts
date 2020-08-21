import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'

export const Container = styled.div`
  position: relative;
  display: grid;
  position: relative;
  background-color: ${({ theme }) => theme.highlight};
  height: 32px;
  width: 100%;
  padding: 4px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  &:after {
    position: absolute;
    content: "";
    height: inherit;
    background-color: inherit;
    width: 32px;
    left: -32px;
  }
`

export const Title = styled(BaseText).attrs({
  size: 14
})`
  position: absolute;
  justify-self: center;
  align-self: center;
`

export const Indicator = styled(animated.div)`
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.accent};
`
