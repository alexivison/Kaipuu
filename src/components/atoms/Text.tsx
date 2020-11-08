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

const Container = styled.div`
  user-select: none;
  letter-spacing: 4px;
  line-height: 1;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`

export default Text
