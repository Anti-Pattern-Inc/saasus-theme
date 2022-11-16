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
}
export declare const SaaSusDarkThemeHighContrast: import("@mui/material").Theme;
//# sourceMappingURL=SaaSusDarkThemeHighContrast.d.ts.map