import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Box, Button, Divider, Grid, styled, Tooltip, Typography, useTheme, } from '@mui/material';
/**
 * 中見出しとサブタイトルをまとめて表示するコンポーネントです。
 * Example: <TitleSet headingText={t('見出し表示')} subtitleText={t('サブタイトルで説明文追加')} />
 * @param variant 見出し 未指定時:div フォントの大きさレベル。ページ最初はh2、その後はHTMLレベルに応じてh3、h4...
 * @param component 見出しのコンポーネント/HTML要素 未指定時:h2 基本的にはh1~h6
 * @param headingText 見出しの文字列
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param subtitleText サブタイトル本文
 * @param AdditionalProps 右端に追加するコンポーネントが必要な時に設置(例: ボタン。基本無くても良い）
 */
const AddToolTip = styled(Tooltip)(() => `
  .MuiTooltip-popper{
    max-width: calc(125em + 16px);
  }
`);
// 中見出しとサブタイトル
const TitleSet = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, sxHeader, sxSubTitle, sx, gutterBottom, noMargin, mbSmall, mbLarge, style, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, 
// 下線
divider, dividerSx, }) => {
    const theme = useTheme();
    return (_jsx(_Fragment, { children: _jsxs(Box, { sx: {
                margin: noMargin
                    ? theme.spacing(0)
                    : mbSmall
                        ? theme.spacing(0, 0, 1, 0)
                        : mbLarge
                            ? theme.spacing(0, 0, 5, 0)
                            : theme.spacing(0, 0, 3, 0),
                '.MuiPageTitle-wrapper': {
                    m: theme.spacing(0),
                    p: theme.spacing(0),
                    background: 'transparent',
                    boxShadow: 'none',
                },
                ...sx,
            }, children: [_jsxs(Grid, { container: true, justifyContent: "space-between", alignItems: "center", sx: { mb: noMargin ? 0 : 1 }, children: [_jsxs(Grid, { item: true, sx: style, children: [_jsxs(Typography, { variant: variant, component: component ? component : 'div', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.5 }, children: [headingText, TooltipTitleIconComponent && (_jsx(AddToolTip, { title: TooltipTitleIconComponent, arrow: true, placement: "top-start", children: _jsx(Button, { sx: {
                                                    margin: '0 0 .2em 0',
                                                    '&.MuiButton-root': {
                                                        padding: '6px',
                                                        minWidth: 'fit-content',
                                                    },
                                                }, children: _jsx(HelpOutlineIcon, { fontSize: "small" }) }) }))] }), _jsx(Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', sx: sxSubTitle, style: { lineHeight: 1.4 }, children: subtitleText })] }), _jsx(Grid, { item: true, children: AdditionalProps })] }), divider && _jsx(Divider, { sx: dividerSx })] }) }));
};
export default TitleSet;
//# sourceMappingURL=TitleSet.js.map