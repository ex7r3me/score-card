'use client'

import { ThemeProvider } from "@/context/theme-context"

const ThemeWrapper = ({ children }: {children: React.ReactNode}) => (
  <ThemeProvider>
    { children }
  </ThemeProvider>
)


export default ThemeWrapper
