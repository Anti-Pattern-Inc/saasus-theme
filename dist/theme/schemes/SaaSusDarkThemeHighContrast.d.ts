import '@mui/lab/themeAugmentation';
/***
 * lighter設置のための型拡張
 *  @see: https://mui.com/material-ui/customization/palette/
 */
declare module '@mui/material/styles' {
    interface PaletteColor {
        lighter?: string;
    }
    interface SimplePaletteColorOptions {
        lighter?: string;
    }
    interface FontStyle {
        info?: string;
    }
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
        base: true;
        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
        wide: true;
    }
}
export declare const SaaSusDarkThemeHighContrast: import("@mui/material").Theme;
//# sourceMappingURL=SaaSusDarkThemeHighContrast.d.ts.map