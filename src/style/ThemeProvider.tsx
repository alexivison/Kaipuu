import React, { useEffect, useState, useCallback } from 'react'
import styled, { ThemeProvider as Theme } from 'styled-components'

import ThemeLibrary from './themes'

import useDetectMobile from '../components/hooks/useDetectMobile'

type TimeOfDay = 'morning' | 'day' | 'dusk' | 'night'

const between = (x: number, min: number, max: number): boolean => x >= min && x <= max

const hoursToTimeOfDay = (hours: number): TimeOfDay => {
  if (between(hours, 6, 11)) return 'morning'
  if (between(hours, 12, 18)) return 'day'
  if (between(hours, 19, 24)) return 'dusk'
  return 'night'
}

interface Props {
  children: React.ReactChild
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day')

  useEffect(() => {
    const today = new Date()
    setTimeOfDay(hoursToTimeOfDay(today.getHours()))
  }, [])

  const isMobile = useDetectMobile()

  const onClick = useCallback(() => {
    switch(timeOfDay) {
     case 'day':
       return setTimeOfDay('dusk')
      case 'dusk':
        return setTimeOfDay('night')
      case 'night':
        return setTimeOfDay('morning')
      case 'morning':
        return setTimeOfDay('day')
    }
  }, [timeOfDay])

  return (
    <Theme theme={{ ...ThemeLibrary[timeOfDay], isMobile }}>
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
