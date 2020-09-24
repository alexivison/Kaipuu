import styled from 'styled-components'

import DefaultImage from '../../../res/img/default-profile.jpg'

import BaseText from '../../atoms/Text'
import SidewaysContainer from '../../hocs/SidewaysContainer'

export const Container = styled.div<{ src?: string }>`
  position: relative;
  display: grid;
  align-items: end;
  width: 450px;
  height: 450px;
  filter: saturate(0.3);
  cursor: pointer;
  padding: 16px;

  &:hover {
    filter: saturate(1.0);
  }

  &:before {

  }

  &:hover: before {

  }
`

export const ThumbnailBackground = styled.div`
  position: relative;
  width: 100%; 
  height: 100%;
  border: 2px solid ${({ theme }) => theme.text};
`

export const ThumbnailImage = styled.div<{ src?: string }>`
  position: absolute;
  justify-self: center;
  align-self: center;
  width: calc(100% - 32px - 4px); 
  height: calc(100% - 32px - 4px);
  background-image: url(${({ src }) => src || DefaultImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Index = styled(BaseText)`
  position: absolute;
  top: 24px;
  right: 28px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`

export const CategoryContainer = styled(SidewaysContainer)`
  position: fixed;
  left: 0px;
  bottom: 24px;
  padding: 16px 0;
  z-index: 1;
`

export const Category = styled(BaseText)`
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  padding: 0 8px;
  text-shadow: 0px 0px 8px ${({ theme }) => theme.background};

  &:before {
    content: ".";
  }
`

export const CategoryBackgroundContainer = styled(SidewaysContainer)`
  position: fixed;
  left: 0px;
  bottom: 24px;
  padding: 16px 0;
`

export const CategoryBackground = styled(Category)`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.background};
`
