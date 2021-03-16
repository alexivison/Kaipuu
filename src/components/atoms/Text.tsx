import React from 'react'
import styled from 'styled-components'

import { ReactProps } from '../../types/enhance'

interface Props extends ReactProps {
  children?: string
  className?: string,
}

const Text: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

const Container = styled.p`
  user-select: none;
  letter-spacing: 2px;
  line-height: 1;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`

export default Text
