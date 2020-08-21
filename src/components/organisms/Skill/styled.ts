import styled from 'styled-components'

import BaseImage from '../../atoms/Image'

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto 1fr;
`

export const SkillIcon = styled(BaseImage).attrs({
  size: 100,
})`
  background-color: ${({ theme }) => theme.background};
  border: 4px solid ${({ theme }) => theme.highlight};
  z-index: 1;

  ${({ theme }) => !theme.isMobile && `
    box-shadow: 0px 0px 16px 2px ${theme.highlight};
  `}
`

export const IndicatorContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-rows: max-content;
  align-content: center;
  color: ${({ theme }) => theme.text};
`
