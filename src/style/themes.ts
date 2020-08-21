// Type
export type Theme = {
  background: string
  highlight: string
  text: string
  subText: string
  accent: string
}

// SubTheme 2
export const morning: Theme = {
  background: '#344B51',
  highlight: '#25353a',
  text: '#CFD3CA',
  subText: '#868b9e',
  accent: '#9e6b47',
}

// SubTheme 2
export const day: Theme = {
  background: '#246286',
  highlight: '#194661',
  text: '#fbeed8',
  subText: '#90a6b5',
  accent: '#52a1a9',
}

// Main theme
export const dusk: Theme = {
  background: '#33313b',
  highlight: '#242329',
  text: '#d2cfde',
  subText: '#526984',
  accent: '#834c69',
}

// SubTheme 1
export const night: Theme = {
  background: '#101823',
  highlight: '#080c13',
  text: '#92b6d6',
  subText: '#37546b',
  accent: '#886c49',
}

export default {
  morning,
  day,
  dusk,
  night,
}
