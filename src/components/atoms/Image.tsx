import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  src: string
  size?: number
  width?: number
  height?: number
  mask?: boolean
  rounded?: boolean
  className?: string
  onClick?: () => void
}

const Image: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

Image.defaultProps = {
  size: 100,
  mask: false,
  rounded: false
}

const Container = styled.div<Props>`
  width: ${({ size, width }) => size || width}px;
  height: ${({ size, height }) => size || height}px;
  border-radius: ${({ rounded }) => rounded ? '50%' : 'initial'};
  background-color: ${({ theme }) => theme.text};

  ${({ mask, src }) => mask 
    ? css`
      mask-image: url("${src}");
      mask-position: center;
      mask-repeat: no-repeat;
      mask-size: contain;
    ` 
    : css`
      background-image: url("${src}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `
  }
`

export default Image
