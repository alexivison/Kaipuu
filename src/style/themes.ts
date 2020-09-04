// Type
export type Theme = {
  background: string
  highlight: string
  text: string
  subText: string
  accent: string
}

export type AppTheme = 'dark' | 'light'

// SubTheme 2
export const dark: Theme = {
  background: '#111111',
  highlight: '#505050',
  text: '#DADADA',
  subText: '#505050',
  accent: '#1A1A1A',
}

// SubTheme 2
export const light: Theme = {
  background: '#246286',
  highlight: '#194661',
  text: '#fbeed8',
  subText: '#90a6b5',
  accent: '#52a1a9',
}

export default {
  dark,
  light,
}
