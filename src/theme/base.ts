import { Theme } from '@mui/material'
import React from 'react'

import { SaaSusDarkThemeHighContrast } from './schemes/SaaSusDarkThemeHighContrast'
import { SaaSusDarkTheme } from './schemes/SaaSusDarkTheme'
import { SaaSusTheme } from './schemes/SaaSusTheme'

export function themeCreator(theme: string): Theme {
  return themeMap[theme]
}

declare module '@mui/material/styles' {
  // カスタムBreakPoint
  interface Theme {
    colors: {
      gradients: {
        blue1: string
        blue2: string
        blue3: string
        blue4: string
        blue5: string
        orange1: string
        orange2: string
        orange3: string
        purple1: string
        purple3: string
        pink1: string
        pink2: string
        green1: string
        green2: string
        black1: string
        black2: string
      }
      shadows: {
        success: string
        error: string
        primary: string
        warning: string
        info: string
      }
      alpha: {
        white: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        trueWhite: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        black: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
      }
      secondary: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      primary: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      success: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      warning: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      error: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      info: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      turquoise?: {
        light: string
        main: string
        dark: string
      }
      coral?: {
        light: string
        main: string
        dark: string
      }
    }
    general: {
      reactFrameworkColor: React.CSSProperties['color']
      borderRadiusSm: string
      borderRadius: string
      borderRadiusLg: string
      borderRadiusXl: string
    }
    sidebar: {
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      width: string
      textColor: React.CSSProperties['color']
      dividerBg: React.CSSProperties['color']
      menuItemColor: React.CSSProperties['color']
      menuItemColorActive: React.CSSProperties['color']
      menuItemBg: React.CSSProperties['color']
      menuItemBgActive: React.CSSProperties['color']
      menuItemIconColor: React.CSSProperties['color']
      menuItemIconColorActive: React.CSSProperties['color']
      menuItemHeadingColor: React.CSSProperties['color']
    }
    header: {
      height: string
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      textColor: React.CSSProperties['color']
    }
  }

  interface ThemeOptions {
    breakpoints: {
      values: {
        xs: number //= base
        sm: number //= mobile
        md: number //= tablet
        lg: number //= laptop
        xl: number //= desktop
        xxl?: number //= wide
        // target device name
        base?: number
        mobile?: number
        tablet?: number
        laptop?: number
        desktop?: number
        wide?: number
      }
    }
    colors: {
      gradients: {
        blue1: string
        blue2: string
        blue3: string
        blue4: string
        blue5: string
        orange1: string
        orange2: string
        orange3: string
        purple1: string
        purple3: string
        pink1: string
        pink2: string
        green1: string
        green2: string
        black1: string
        black2: string
      }
      shadows: {
        success: string
        error: string
        primary: string
        warning: string
        info: string
      }
      alpha: {
        white: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        trueWhite: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
        black: {
          5: string
          10: string
          30: string
          50: string
          70: string
          100: string
        }
      }
      secondary: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      primary: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      success: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      warning: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      error: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      info: {
        lighter: string
        light: string
        main: string
        dark: string
      }
      turquoise?: {
        light: string
        main: string
        dark: string
      }
      coral?: {
        light: string
        main: string
        dark: string
      }
    }

    general: {
      reactFrameworkColor: React.CSSProperties['color']
      borderRadiusSm: string
      borderRadius: string
      borderRadiusLg: string
      borderRadiusXl: string
    }
    sidebar: {
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      width: string
      textColor: React.CSSProperties['color']
      dividerBg: React.CSSProperties['color']
      menuItemColor: React.CSSProperties['color']
      menuItemColorActive: React.CSSProperties['color']
      menuItemBg: React.CSSProperties['color']
      menuItemBgActive: React.CSSProperties['color']
      menuItemIconColor: React.CSSProperties['color']
      menuItemIconColorActive: React.CSSProperties['color']
      menuItemHeadingColor: React.CSSProperties['color']
    }
    header: {
      height: string
      background: React.CSSProperties['color']
      boxShadow: React.CSSProperties['color']
      textColor: React.CSSProperties['color']
    }
  }

  // lighter設置のための型拡張
  // https://mui.com/material-ui/customization/palette/
  interface PaletteColor {
    lighter?: string
  }
  interface SimplePaletteColorOptions {
    lighter?: string
  }
  // font
  interface FontStyle {
    info?: string
  }
  // カスタムBreakPoint
  // https://mui.com/material-ui/customization/breakpoints/
  interface BreakpointOverrides {
    xs: true //= base
    sm: true //= mobile
    md: true //= tablet
    lg: true //= laptop
    xl: true //= desktop
    xxl: true //= wide
    // target device name
    base: true
    mobile: true
    tablet: true
    laptop: true
    desktop: true
    wide: true
  }
}

const themeMap: { [key: string]: Theme } = {
  SaaSusTheme,
  SaaSusDarkTheme,
  SaaSusDarkThemeHighContrast,
}
