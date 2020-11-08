import { useReducer, useCallback } from 'react'

import { SidebarContext } from '../context/SidebarContext'

export type SidebarState = {
  isOpen: boolean
}

export type SidebarAction = {
  type: 'open' | 'close' 
}

export const initialState: SidebarState = {
  isOpen: false,
}

export const reducer = (state: SidebarState, action: SidebarAction): SidebarState => {
  switch(action.type) {
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
  }
}

const useSidebar = (): SidebarContext => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = useCallback(() => dispatch({ type: 'open' }), [dispatch])
  const closeSidebar = useCallback(() => dispatch({ type: 'close' }), [dispatch])

  return { state, openSidebar, closeSidebar }
}

export default useSidebar
