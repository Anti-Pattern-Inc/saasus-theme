import { Theme } from '@mui/material/styles';
import { FC } from 'react';
interface ThemeContextType {
    theme: Theme;
    setThemeName: (_themeName: string) => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextType>;
declare const ThemeProviderWrapper: FC;
export default ThemeProviderWrapper;
//# sourceMappingURL=ThemeProvider.d.ts.map