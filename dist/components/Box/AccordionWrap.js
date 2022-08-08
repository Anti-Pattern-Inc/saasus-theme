import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// https://mui.com/material-ui/react-accordion/
// Icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// MUI
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Paper, styled, Tooltip, Typography, } from '@mui/material';
import { useState } from 'react';
const AddToolTip = styled(Tooltip)(() => `
  .MuiTooltip-popper{
    max-width: calc(125em + 16px);
  }
`);
// Stylings アコーディオン全体
const Item = styled(Paper)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    padding: 0,
}));
const AccordionStyle = styled((props) => (_jsx(Accordion, { disableGutters: true, elevation: 0, square: true, ...props })))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    marginBottom: 40,
    transition: '0ms',
    '&:before': {
        display: 'none',
    },
}));
// Stylings アコーディオン見出し、トリガー部分
const AccordionSummaryStyle = styled((props) => (_jsx(AccordionSummary, { ...props })))(({ theme }) => ({
    borderRadius: 10,
    marginBottom: -1,
    // TODO: DarkMode Color設定
    borderBottom: theme.palette.mode === 'dark'
        ? '1px solid rgba(255, 255, 255, 0.1)'
        : '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .01)'
        : 'rgba(0, 0, 0, .01)',
    '&.Mui-expanded': {
        borderRadius: '9px 9px 0 0',
    },
    transition: '.3s',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, .03)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));
// Stylings アコーディオン内部、コンテンツ部分
const AccordionDetailsStyle = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3, 3, 4),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '0 0 10px 10px',
}));
export const AccordionWrap = ({ 
// 見出し
AccordionTitle, variant, component, AccordionSubTitle, variantSubTitle, 
// アコーディオントリガー
// id,
ExpandedName, // 一意の値、id関連をこの値に兼用させる
// 読み込み時のオープンクローズ
InitOpen, 
// 追加スタイリング
AccordionSx, SummarySx, DetailsSx, 
// コンテンツ
children, AdditionalProps, disabled, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, }) => {
    const [expanded, setExpanded] = useState(`${InitOpen}`);
    const handleChange = (panel) => (_event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (_jsx(_Fragment, { children: _jsx(Item, { children: _jsxs(AccordionStyle, { expanded: expanded === `${ExpandedName}`, onChange: handleChange(`${ExpandedName}`), sx: AccordionSx, children: [_jsx(AccordionSummaryStyle, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": `${ExpandedName}-content`, id: `${ExpandedName}-content`, sx: SummarySx, disabled: disabled, children: _jsxs(Box, { sx: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                width: '100%',
                                pr: 5,
                            }, children: [_jsxs(Box, { children: [_jsxs(Box, { sx: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'end',
                                            }, children: [_jsx(Typography, { variant: variant ? variant : 'h3', component: component ? component : 'div', children: AccordionTitle }), TooltipTitleIconComponent && (_jsx(AddToolTip, { title: TooltipTitleIconComponent, arrow: true, placement: "top-start", children: _jsx(Button, { sx: {
                                                            margin: '0 0 .2em 0',
                                                            '&.MuiButton-root': {
                                                                padding: '6px',
                                                                minWidth: 'fit-content',
                                                            },
                                                        }, children: _jsx(HelpOutlineIcon, { fontSize: "small" }) }) }))] }), _jsx(Box, { children: _jsx(Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', children: AccordionSubTitle }) })] }), _jsx(Box, { children: AdditionalProps })] }) }), _jsx(AccordionDetailsStyle, { sx: DetailsSx, children: children })] }) }) }));
};
//# sourceMappingURL=AccordionWrap.js.map