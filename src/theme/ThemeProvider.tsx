import { Theme, ThemeProvider } from '@mui/material/styles'
import { I18nextProvider } from 'react-i18next'
import { StylesProvider } from '@mui/styles'
import { createContext, useEffect, useState } from 'react'

import { themeCreator } from './base'
import i18n from '../i18n'

interface ThemeContextType {
  theme: Theme
  setThemeName: (_themeName: string) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: null,
  setThemeName: null,
})

interface ThemeProviderProps {
  lang?: 'en' | 'ja'
  children: React.ReactNode
}

const ThemeProviderWrapper = ({
  lang = 'ja',
  children,
}: ThemeProviderProps) => {
  const [themeName, _setThemeName] = useState('SaaSusTheme')

  useEffect(() => {
    const curThemeName = 'SaaSusTheme'
    _setThemeName(curThemeName)
  }, [])

  useEffect(() => {
    // change language
    i18n.changeLanguage(lang)
  }, [lang])

  const theme = themeCreator(themeName)

  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <I18nextProvider i18n={i18n}>
      <StylesProvider injectFirst>
        <ThemeContext.Provider value={{ theme, setThemeName }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
      </StylesProvider>
    </I18nextProvider>
  )
}

export default ThemeProviderWrapper
