import React from 'react'
import styled from 'styled-components'

import { ReactProps } from '../../types/enhance'

interface Props extends ReactProps {
  children: string
  className?: string
  quotee: string
}

const Quote: React.FC<Props> = ({ children, quotee, className }) => (
  <Container className={className}>
    <h1>{children}</h1>
    <p>{quotee}</p>
  </Container>
)

export default Quote

const Container = styled.div`
  user-select: none;

  h1 {
    font-size: 32px;
    margin: 0;
    letter-spacing: 4px;

    &:before {
      content: '"'
    }

    &:after {
      content: '"';
    }
  }

  p {
    font-size: 16px;
    text-align: end;

    &:before {
      content: '- '
    }
  }
`