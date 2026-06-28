import { createContext, useState, useContext } from 'react'

const ColorContext = createContext()

export const ColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('#ffffff')

  const changeColor = (color) => {
    setBgColor(color)
  }

  return (
    <ColorContext.Provider value={{ bgColor, changeColor }}>
      {children}
    </ColorContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useColor = () => {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error('useColor must be used within ColorProvider')
  }
  return context
}