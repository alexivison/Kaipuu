import React from 'react'
import styled from 'styled-components'

import { ReactProps } from '../../types/enhance'

interface Props extends ReactProps {
  className?: string
}

const SidewaysContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <Outer className={className}>
      <Inner>
        <Wrapper>
          {children}
        </Wrapper>
      </Inner>
    </Outer>
  )
}

export default SidewaysContainer

const Inner = styled.div`
  padding: 50% 0;
  height: 0;
`

const Outer = styled.div`
  display: table;
`

const Wrapper = styled.div`
  transform-origin: top left;
  transform: rotate(-90deg) translate(-100%);
  margin-top: -50%;
  white-space: nowrap;
`