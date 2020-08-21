import React from 'react'
import styled from 'styled-components'

interface Props {
  to: string
  title?: string
  className?: string
}

const ExternalLink: React.FC<Props> = ({ to, title, className }) => {
  return <Anchor className={className} href={to}>{title}</Anchor>
}

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  user-select: none;
`

export default ExternalLink
