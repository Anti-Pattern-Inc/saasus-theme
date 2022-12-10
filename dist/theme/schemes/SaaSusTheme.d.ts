import '@mui/lab/themeAugmentation';
/***
 * マテリアルカラー 一覧
 *  @see: https://mui.com/material-ui/customization/color/#color-palette
 * Example: マテリアルカラーから実数値(色番号)で設置する場合
 *  import { blueGrey } from '@mui/material/colors';
 *  const blueGrey100 = blueGrey[100]; など
 */
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
export declare const SaaSusTheme: import("@mui/material").Theme;
//# sourceMappingURL=SaaSusTheme.d.ts.map