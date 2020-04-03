import React, { createContext, useState, useEffect } from "react"

const defaultState = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
}

export const SidebarContext = createContext(defaultState)

const SidebarContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "unset"
  }, [isSidebarOpen])

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider
