// sidebar
export const sidebar = {
  width: '210px',
}
// common spacing base
export const spacing = 8

// for breakpoint
const viewport = {
  width: {
    xs: 0, // base
    sm: 480, // mobile
    md: 768, // tablet
    lg: 1280, // laptop
    xl: 1536, // desktop
    xxl: 1920, // wide
  },
}

export const breakpoints = {
  values: {
    xs: viewport.width.xs, // base
    sm: viewport.width.sm, // mobile
    md: viewport.width.md, // tablet
    lg: viewport.width.lg, // laptop
    xl: viewport.width.xl, // desktop
    xxl: viewport.width.xxl, // wide
    // target device name
    base: viewport.width.xs,
    mobile: viewport.width.sm,
    tablet: viewport.width.md,
    laptop: viewport.width.lg,
    desktop: viewport.width.xl,
    wide: viewport.width.xxl,
  },
}

// ----- Typography -----
const fontPxToRem = (px: number) => {
  return px / 16 + 'rem'
}
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim = (px: number) => {
  return (px / 16) * 0.85 + 'rem'
}

const fontWeight = {
  normal: 400,
  medium: 500,
  bold: 700,
}

const lineHeight = {
  small: 1.5,
  medium: 1.75,
  large: 2.0,
}

const typographyBreakpoint = {
  // upper size lg(laptop)
  up: `@media (min-width: ${breakpoints.values.lg}px)`,
}

const typographyTitleFont = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "BIZ UDPゴシック", "Noto Sans JP", Helvetica, Arial, sans-serif !important',
}

export const typography = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans JP", Helvetica, Arial, sans-serif',
  // 見出し
  h1: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(24)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(24)}`,
    },
  },
  h2: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(22)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(22)}`,
    },
  },
  h3: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(20)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(20)}`,
    },
  },
  h4: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(18)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(18)}`,
    },
  },
  h5: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: `${fontPxToRemMinim(16)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(16)}`,
    },
  },
  h6: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(15)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(15)}`,
    },
  },
  // Text本文
  body1: {
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(15)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(15)}`,
    },
  },
  body2: {
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(14)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(14)}`,
    },
  },
  // サブタイトル
  subtitle1: {
    // color: 'inherit’',
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(14)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(14)}`,
    },
  },
  subtitle2: {
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.small,
    fontSize: `${fontPxToRemMinim(13)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(13)}`,
    },
  },
  // Text Utility
  caption: {
    fontWeight: fontWeight.normal,
    fontSize: `${fontPxToRemMinim(12)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(12)}`,
    },
  },
  overline: {
    fontWeight: fontWeight.normal,
    fontSize: `${fontPxToRemMinim(13)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(13)}`,
    },
  },
  // button
  button: {
    fontFamily: typographyTitleFont.fontFamily,
    fontWeight: fontWeight.medium,
    fontSize: `${fontPxToRemMinim(14)}`,
    [typographyBreakpoint.up]: {
      fontSize: `${fontPxToRem(14)}`,
    },
  },
}

export const codes = {
  pre: {
    maxWidth: `auto`,
    margin: `8px 0`,
    padding: `16px 24px`,
    overflow: `auto`,
    borderRadius: 6,
    fontWeight: 700,
  },
  code: {
    lineHeight: 1.5,
    margin: '0 0.1ch',
    padding: `0px 3px 1px`,
    borderRadius: 3,
    background: 'transparent',
  },
}
