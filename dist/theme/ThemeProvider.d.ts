/// <reference types="react" />
import { Theme } from '@mui/material/styles';
interface ThemeContextType {
    theme: Theme;
    setThemeName: (_themeName: string) => void;
}
export declare const ThemeContext: import("react").Context<ThemeContextType>;
interface ThemeProviderProps {
    lang?: 'en' | 'ja';
    children: React.ReactNode;
}
export declare const ThemeProviderWrapper: ({ lang, children, }: ThemeProviderProps) => JSX.Element;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map