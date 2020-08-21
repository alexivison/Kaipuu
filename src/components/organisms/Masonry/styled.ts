import styled from 'styled-components'

export const Container = styled.div<{ gap: number }>`
  display: grid;
  grid-gap: ${({ gap }) => gap}px;
  ${({ theme }) => !theme.isMobile && `grid-auto-flow: column;`}
`

export const Column = styled.div<{ gap: number }>`
  display: grid;
  grid-auto-rows: max-content
  grid-gap: ${({ gap }) => gap}px;
`
