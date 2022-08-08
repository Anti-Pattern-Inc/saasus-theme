import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Paper, styled, useTheme } from '@mui/material';
import TitleSet from 'components/Text/TitleSet';
const BoxInner = styled(Paper)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));
const BoxWrap = ({ 
// 見出し
addTitle, variant, component, headingText, variantSubTitle, subtitleText, titleSx, 
// 下線
divider, 
// コンテンツ
children, boxInnerSx, 
// 下マージン
noMargin, mbSmall, mbLarge, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, 
// 右端オプション
AdditionalProps, }) => {
    const theme = useTheme();
    return (_jsx(_Fragment, { children: _jsx(Box, { children: _jsxs(BoxInner, { elevation: 1, sx: {
                    padding: divider ? theme.spacing(1.5, 3, 3) : theme.spacing(3),
                    ...boxInnerSx,
                }, children: [addTitle && (_jsx(TitleSet
                    // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                    , { 
                        // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                        headingText: headingText, variant: variant ? variant : 'h3', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                        // 見出し直下の余白具合
                        noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                        // カスタムCSSがあれば設置
                        sx: titleSx, 
                        // ヘルプアイコンとツールチップ
                        TooltipTitleIconComponent: TooltipTitleIconComponent, AdditionalProps: AdditionalProps, 
                        // 下線
                        divider: divider, 
                        // 下線がある時は見出し内の余白をタイトにする。横幅を合わせる
                        dividerSx: { my: 1.5, mx: -3 } })), children] }) }) }));
};
export default BoxWrap;
//# sourceMappingURL=BoxWrap.js.map