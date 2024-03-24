import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const greeting = 'Hello'

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
