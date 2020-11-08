import { useContext } from 'react'

import Context, { SidebarContext } from '../context/SidebarContext'

const useSidebarContext = (): SidebarContext => useContext(Context)

export default useSidebarContext