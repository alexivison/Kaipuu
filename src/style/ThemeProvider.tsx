import React, { useState, useCallback } from 'react'
import { ThemeProvider as Theme } from 'styled-components'

import ThemeLibrary, { AppTheme } from './themes'

interface Props {
  children: React.ReactChild
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<AppTheme>('dark')

  const mediaQuery = {
    extraSmall: '@media (max-width: 575.98px)',
    small: '@media (max-width: 767.98px)',
    medium: '@media (max-width: 991.98px)',
    large: '@media (max-width: 1199.98px)',
  }

  const onClick = useCallback(() => {
    switch(currentTheme) {
     case 'dark':
       return setCurrentTheme('light')
      case 'light':
        return setCurrentTheme('dark')
    }
  }, [currentTheme])

  return (
    <Theme theme={{ ...ThemeLibrary[currentTheme], mediaQuery }}>
      <>
        {children}
      </>
    </Theme>
  )
}

export default ThemeProvider
