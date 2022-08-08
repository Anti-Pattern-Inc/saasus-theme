import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Grid, Typography, useTheme } from '@mui/material';
// 大見出しとサブタイトル
const MainTitleSet = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, 
// TitleWrapNone,
sxHeader, sxSubTitle, gutterBottom, }) => {
    const theme = useTheme();
    return (_jsx(_Fragment, { children: _jsx(Box, { sx: [
                {
                    p: theme.spacing(3, 4),
                    mb: theme.spacing(2),
                },
            ], children: _jsxs(Grid, { container: true, justifyContent: "space-between", alignItems: "center", children: [_jsxs(Grid, { item: true, children: [_jsx(Typography, { variant: variant ? variant : 'h1', component: component ? component : 'h1', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.4 }, children: headingText }), _jsx(Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle1', sx: sxSubTitle, style: { lineHeight: 1.4 }, children: subtitleText })] }), _jsx(Grid, { item: true, children: AdditionalProps })] }) }) }));
};
export default MainTitleSet;
//# sourceMappingURL=MainTitleSet.js.map