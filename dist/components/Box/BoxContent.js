import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import { useTheme } from '@mui/material'
import { Box, styled } from '@mui/material';
import TitleSet from 'components/Text/TitleSet';
const BoxOuter = styled(Box)(({ theme }) => `
  margin-bottom: ${theme.spacing(4)};

  &:last-child {
    margin-bottom: 0;
  }
  `);
const BoxInner = styled(Box)(({ theme }) => `
    padding: ${theme.spacing(0)};
    `);
const BoxContent = ({ 
// 見出し
addTitle, variant, component, headingText, variantSubTitle, subtitleText, titleSx, 
// 下線
divider, dividerSx, 
// コンテンツ
children, boxInnerSx, 
// 下マージン
noMargin, mbSmall, mbLarge, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, 
// 右端オプション
AdditionalProps, }) => {
    // const theme = useTheme()
    return (_jsx(_Fragment, { children: _jsx(BoxOuter, { children: _jsxs(BoxInner, { sx: {
                    ...boxInnerSx,
                }, children: [addTitle && (_jsx(TitleSet
                    // 見出しフォントサイズ htmlElement設定 サブタイトル
                    , { 
                        // 見出しフォントサイズ htmlElement設定 サブタイトル
                        headingText: headingText, variant: variant ? variant : 'h4', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                        // 見出し直下の余白具合
                        noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                        // カスタムCSSがあれば設置
                        sx: titleSx, 
                        // ヘルプアイコンとツールチップ
                        TooltipTitleIconComponent: TooltipTitleIconComponent, AdditionalProps: AdditionalProps, divider: divider, dividerSx: dividerSx })), children] }) }) }));
};
export default BoxContent;
//# sourceMappingURL=BoxContent.js.map