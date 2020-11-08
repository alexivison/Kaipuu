import React from 'react'

import { SidebarState } from '../hooks/useSidebar'

import useSidebar, { initialState } from '../hooks/useSidebar'

export type SidebarContext = {
  state: SidebarState
  openSidebar: () => void
  closeSidebar: () => void
}

const initialContext: SidebarContext = {
  state: initialState,
  openSidebar: () => null,
  closeSidebar: () => null,
}

export const SidebarContextProvider: React.FC = ({ children }) => {
  return (
    <SidebarContext.Provider value={useSidebar()}>
      {children}
    </SidebarContext.Provider>
  )
}

const SidebarContext = React.createContext(initialContext)

export default SidebarContext
