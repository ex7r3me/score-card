import React, { Dispatch, SetStateAction, createContext, useState, useEffect } from 'react'

type ThemeContextType = 'light' | 'dark' 

type ThemeContextValue = {
  theme: ThemeContextType,
  toggleTheme: () => void
}

const themeContextDefaultValue: ThemeContextValue = {
  theme: 'light',
  toggleTheme: () => {}
}

const localStorageKey = 'theme'

const ThemeContext = createContext(themeContextDefaultValue)

const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  const [theme, setTheme] = useState(themeContextDefaultValue.theme)
  
  useEffect(() => {
    const localThemeJSON = localStorage.getItem(localStorageKey)
    
    if (localThemeJSON) {
      const localTheme = JSON.parse(localThemeJSON)
      setTheme(localTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(localStorageKey, JSON.stringify(newTheme))
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
