import styled from 'styled-components'

import BaseQuote from '../../atoms/Quote'
import BaseImage from '../../atoms/Image'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 20vh 1fr;
  width: 150%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const QuoteContainer = styled.div`
  display: grid;
  justify-content: end;
  align-content: center;
  padding: 0 56px;
`

export const Quote = styled(BaseQuote)`
  color: ${({ theme }) => theme.text};
`

export const WorkContainer = styled.div`
  display: grid;
  position: relative;
  margin-left: -120px;
  align-content: center;
`

export const ScrollContainer = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-auto-flow: column;
  justify-content: start;
  height: fit-content;
  overflow: auto;
  padding-left: 120px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Fade = styled.div`
  position: absolute;
  content: '';
  width: 100px;
  height: 100%;
  background: linear-gradient(to right, rgb(17 17 17) 0%, rgba(251,251,251,0) 100%);
  z-index: 1;
`

export const WorkImage = styled(BaseImage)`
  width: 1070px;
  height: 705px;
  background-size: contain;
  justify-self: center;
`
