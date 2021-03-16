import styled from 'styled-components'

import BaseQuote from '../../atoms/Quote'
import BaseImage from '../../atoms/Image'

export const Container = styled.section(({ theme: { mediaQuery, ...theme } }) => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 24px;

  overflow: hidden;

  background-color: ${theme.accent};

  padding: 80px 20vw;

  ${mediaQuery.small} {
    padding: 24px;
  }
`)

export const SectionHeaderWrapper = styled.div(() => `
  display: grid;
  grid-template-columns: 1fr auto;
`)

export const QuoteContainer = styled.div`
  display: grid;
  justify-content: end;
  align-content: center;
`

export const Quote = styled(BaseQuote)`
  color: ${({ theme }) => theme.text};
`

export const WorkContainer = styled.div`
  display: grid;
  align-content: center;
`

export const ScrollContainer = styled.div(() => `
  display: grid;
  grid-auto-flow: row;
  grid-gap: 80px;
`)

export const Fade = styled.div`

`

export const WorkImage = styled(BaseImage)`

`
