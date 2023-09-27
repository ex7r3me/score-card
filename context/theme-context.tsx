import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

type ThemeContextType = 'light' | 'dark' 

type ThemeContextValue = {
  theme: ThemeContextType;
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
};

const themeContextDefaultValue: ThemeContextValue = {
  theme: 'light',
  setTheme: (theme) => {}
}

const ThemeContext = createContext(themeContextDefaultValue)

const ThemeProvider = ({children}:{children: React.ReactNode}) => {
  const [theme, setTheme] = useState(themeContextDefaultValue.theme) 

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
