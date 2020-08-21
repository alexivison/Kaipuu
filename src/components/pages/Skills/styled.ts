import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-gap: 32px;

  ${({ theme }) => theme.isMobile && `
    grid-gap: 24px;
    padding: 0 24px 24px;
  `}
`
