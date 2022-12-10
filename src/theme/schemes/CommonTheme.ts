export const sidebar = {
  width: '180px',
}

export const spacing = 8

export const viewport = {
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
    // 明示的な命名での同じ用途
    base: viewport.width.xs,
    mobile: viewport.width.sm,
    tablet: viewport.width.md,
    laptop: viewport.width.lg,
    desktop: viewport.width.xl,
    wide: viewport.width.xxl,
  },
}

// Typography

const fontPxToRem = (px: number) => {
  return px / 16 + 'rem'
}
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim = (px: number) => {
  return (px / 16) * 0.85 + 'rem'
}

export const typography = {
  fontFamily:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  // 見出し用
  h1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: `${fontPxToRemMinim(24)}`,
    [`@media (min-width: ${breakpoints.values.md}px)`]: {
      fontSize: `${fontPxToRem(24)}`,
    },
  },
  // TODO: other Typography
}
