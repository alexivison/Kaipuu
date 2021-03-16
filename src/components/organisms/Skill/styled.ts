import styled from 'styled-components'

import BaseImage from '../../atoms/Image'
import BaseText from '../../atoms/Text'

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto 1fr;
`

export const SkillIcon = styled(BaseImage).attrs({
  size: 60,
})`
  background-color: ${({ theme }) => theme.background};
  filter: saturate(0.5);
  z-index: 1;

  &:hover {
    filter: saturate(1);
  }
`

export const IndicatorContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-rows: max-content;
  align-content: center;
  color: ${({ theme }) => theme.text};
`

export const Title = styled(BaseText)`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.subText};
`
