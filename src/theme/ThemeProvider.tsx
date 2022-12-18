import { Theme, ThemeProvider } from '@mui/material/styles'
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
    // change language
    i18n.changeLanguage(lang)
  }, [lang])

  /**
   * 読み込み時のlocalstorage key(appTheme):value(テーマ名)反映
   * デフォルト or キーが無い or 現在無いテーマ名であった場合->appTheme:SaaSusThemeを付与する
   * ユーザーが任意に切り替えるまでテーマは保存
  */
  useEffect(() => {
    const getTheme = window.localStorage.getItem('appTheme')
    if (
      getTheme === 'SaaSusTheme' ||
      getTheme === 'SaaSusDarkTheme' ||
      getTheme === 'SaaSusDarkThemeHighContrast'
    ) {
      _setThemeName(getTheme)
    } else {
      window.localStorage.removeItem('appTheme'),
        window.localStorage.setItem('appTheme', 'SaaSusTheme')
    }
  }, [])

  const theme = themeCreator(themeName)

  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{ theme, setThemeName }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  )
}

export default ThemeProviderWrapper
