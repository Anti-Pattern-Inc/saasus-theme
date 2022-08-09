import { ThemeProvider } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import { createContext, FC, useEffect, useState } from 'react'

import { themeCreator } from './base'

interface ThemeContextType {
  theme: Theme
  setThemeName: (_themeName: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThemeName: (_themeName: string): void => {
    return
  },
})

const ThemeProviderWrapper: FC = (props) => {
  const [themeName, _setThemeName] = useState('PureLightTheme')

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'PureLightTheme'
    _setThemeName(curThemeName)
  }, [])

  const theme = themeCreator(themeName)
  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{ theme, setThemeName }}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  )
}

export default ThemeProviderWrapper
