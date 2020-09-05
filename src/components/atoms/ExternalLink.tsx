import React from 'react'
import styled from 'styled-components'

interface Props {
  to: string
  className?: string
}

const ExternalLink: React.FC<Props> = ({ to, className, children }) => {
  return <Anchor className={className} href={to}>{children}</Anchor>
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  user-select: none;
`

export default ExternalLink
