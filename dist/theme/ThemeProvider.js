import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { createContext, useEffect, useState } from 'react';
import { themeCreator } from './base';
export const ThemeContext = createContext({
    theme: null,
    setThemeName: (_themeName) => { },
});
const ThemeProviderWrapper = (props) => {
    const [themeName, _setThemeName] = useState('PureLightTheme');
    useEffect(() => {
        const curThemeName = window.localStorage.getItem('appTheme') || 'PureLightTheme';
        _setThemeName(curThemeName);
    }, []);
    const theme = themeCreator(themeName);
    const setThemeName = (themeName) => {
        window.localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    };
    return (_jsx(StylesProvider, { injectFirst: true, children: _jsx(ThemeContext.Provider, { value: { theme, setThemeName }, children: _jsx(ThemeProvider, { theme: theme, children: props.children }) }) }));
};
export default ThemeProviderWrapper;
//# sourceMappingURL=ThemeProvider.js.map