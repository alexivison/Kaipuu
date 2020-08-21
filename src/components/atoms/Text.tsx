import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: string
  sub?: boolean
  size?: number
  lineHeight?: number
  className?: string
}

const Text: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

Text.defaultProps = {
  sub: false,
  size: 16,
  lineHeight: 1,
}

const Container = styled.div<Omit<Props, 'children'>>`
  color: ${({ theme, sub }) => sub ? theme.subText : theme.text};
  font-size: ${({ size }) => size}px;
  font-family: 'PT Sans', sans-serif;
  line-height: ${({ lineHeight }) => lineHeight};
  user-select: none;
`

export default Text
