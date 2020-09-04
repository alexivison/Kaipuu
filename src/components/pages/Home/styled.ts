import styled from 'styled-components'

import Link from '../../atoms/Link'
import Text from '../../atoms/Text'

export const Container = styled.div`
  display: grid;
  align-self: end;
  align-items: end;
  justify-items: center;
  height: 90%;
  padding: 8vh;
  border-top: 6px solid ${({ theme }) => theme.text};
  border-left: 6px solid ${({ theme }) => theme.text};
  border-right: 6px solid ${({ theme }) => theme.text};
`

export const TextContainer = styled.div`
  display: grid;
  align-self: center;
`

export const Title = styled(Text)`
  font-size: 5vw;
  letter-spacing: 8px;
  width: max-content;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.background};
`

export const SubTitleContainer = styled.div`
  display: grid;
  grid-gap: 16px;
`

export const SubTitle = styled(Text).attrs({ 
  sub: true,
})``

export const Menu = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 56px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`

export const MenuItem = styled(Link)``
