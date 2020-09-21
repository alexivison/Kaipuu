// All around stuff
export interface SamePropTypeOnly<T> {
  [P: string]: T
}

// DOM related
export type Div = HTMLDivElement
export type ReactProps = React.HTMLAttributes<HTMLElement>

// Style related
export type FontSize = string
export type Color = string
