import React, { createContext, useState } from "react"

const defaultState = {
  isAsideOpen: false,
  toggleAside: () => {},
}

export const AsideContext = createContext(defaultState)

const AsideContextProvider = ({ children }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const toggleAside = () => setIsAsideOpen(!isAsideOpen)

  return (
    <AsideContext.Provider value={{ isAsideOpen, toggleAside }}>
      {children}
    </AsideContext.Provider>
  )
}

export default AsideContextProvider
