import React from 'react'

import { ReactProps } from '../../../types/enhance'

import {
  Outer,
  Inner,
  Wrapper,
} from './styled'

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

