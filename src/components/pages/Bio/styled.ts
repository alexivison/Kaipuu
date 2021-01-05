import styled from 'styled-components'
import { animated } from 'react-spring'

import BaseText from '../../atoms/Text'

export const Container = styled.div`
  height: 100%;

  ${({ theme }) => theme.isMobile  ? `
    display: flex;
    flex-direction: column-reverse;
  ` : `
    position: relative;
    display: grid;
    grid-gap: 48px;
    grid-template-columns: repeat(2, calc(50% - (48px / 2)));
  `}
`

export const LeftColumn = styled.div``

export const RightColumn = styled(animated.div)`
  position: absolute;

  ${({ theme }) => theme.isMobile ? `
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    padding: 56px 24px 24px;
    height: 100%;
    width: 100vw;
  ` : `
    right: 0;
    top: 32px;
    border: 4px solid ${theme.text};
    padding: 24px 16px;
    width: 50%;
  `}
`

export const MobileTimelineNav = styled.div(() => `
  z-index: 1;
  display: grid;
  padding: 24px 16px;
  grid-auto-flow: column;
`)

export const MobileTimelineNavItem = styled.div`
  display: grid;
  justify-content: center;
  // background-color: ${({ theme }) => theme.highlight};
`

export const MobileTimelineDate = styled(BaseText)(
  ({ theme }) => `
    color: ${theme.text};
    margin-bottom: 8px;
  `
)

interface MobileTimelineNavIndicatorProps {
  isActive: boolean
}
export const MobileTimelineNavIndicator = styled.div<MobileTimelineNavIndicatorProps>(
  ({ theme, isActive }) => `
    height: 4px;
    background-color: ${isActive ? theme.text : 'inherit'};
    transition: all .5s ease-in-out;
  `
)
