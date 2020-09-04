import React, { useState, useCallback } from 'react'
import styled, { ThemeProvider as Theme } from 'styled-components'

import ThemeLibrary, { AppTheme } from './themes'

import useDetectMobile from '../components/hooks/useDetectMobile'

interface Props {
  children: React.ReactChild
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<AppTheme>('dark')

  const isMobile = useDetectMobile()

  const onClick = useCallback(() => {
    switch(currentTheme) {
     case 'dark':
       return setCurrentTheme('light')
      case 'light':
        return setCurrentTheme('dark')
    }
  }, [currentTheme])

  return (
    <Theme theme={{ ...ThemeLibrary[currentTheme], isMobile }}>
      <>
        <PlaceHolder onClick={onClick} />
        {children}
      </>
    </Theme>
  )
}

const PlaceHolder = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  // width: 24px;
  // height: 24px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  z-index: 100;
`

export default ThemeProvider
