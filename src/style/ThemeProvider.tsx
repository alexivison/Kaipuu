import React, { useState } from 'react'
import { ThemeProvider as Theme } from 'styled-components'

import ThemeLibrary, { AppTheme } from './themes'

interface Props {
  children: React.ReactChild
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [currentTheme,] = useState<AppTheme>('dark')

  const mediaQuery = {
    extraSmall: '@media (max-width: 575.98px)',
    small: '@media (max-width: 767.98px)',
    medium: '@media (max-width: 991.98px)',
    large: '@media (max-width: 1199.98px)',
  }

  return (
    <Theme theme={{ ...ThemeLibrary[currentTheme], mediaQuery }}>
      <>
        {children}
      </>
    </Theme>
  )
}

export default ThemeProvider
