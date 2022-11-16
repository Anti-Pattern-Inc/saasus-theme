'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react/jsx-runtime');
var require$$1 = require('@mui/material');
var DeleteTwoToneIcon$1 = require('@mui/icons-material/DeleteTwoTone');
var EditTwoToneIcon$1 = require('@mui/icons-material/EditTwoTone');
var require$$4 = require('@mui/icons-material/ExpandMore');
var require$$5 = require('@mui/icons-material/HelpOutline');
var i18n$1 = require('i18next');
var require$$7 = require('react-i18next');
var require$$8 = require('@mui/icons-material/Close');
var require$$9 = require('@mui/material/styles');
var require$$10 = require('next/link');
require('@mui/lab/themeAugmentation');
var require$$12 = require('@mui/styles');
var require$$13 = require('react');
var SearchTwoToneIcon = require('@mui/icons-material/SearchTwoTone');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var DeleteTwoToneIcon__default$1 = /*#__PURE__*/_interopDefaultLegacy(DeleteTwoToneIcon$1);
var EditTwoToneIcon__default$1 = /*#__PURE__*/_interopDefaultLegacy(EditTwoToneIcon$1);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var i18n__default$1 = /*#__PURE__*/_interopDefaultLegacy(i18n$1);
var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var require$$9__default = /*#__PURE__*/_interopDefaultLegacy(require$$9);
var require$$10__default = /*#__PURE__*/_interopDefaultLegacy(require$$10);
var require$$12__default = /*#__PURE__*/_interopDefaultLegacy(require$$12);
var require$$13__default = /*#__PURE__*/_interopDefaultLegacy(require$$13);
var SearchTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchTwoToneIcon);

const CustomTable$1 = ({ children, caption, sx, ...props }) => {
    return (require$$0.jsxs(require$$1.Table, { stickyHeader: true, ...props, sx: sx, children: [caption && require$$0.jsx("caption", { children: caption }), children] }));
};

const CustomTableContainer$1 = ({ children, maxHeightValue, sx, ...props }) => {
    return (require$$0.jsx(require$$1.TableContainer, { component: require$$1.Paper, style: { maxHeight: maxHeightValue }, sx: sx, ...props, children: children }));
};

// ----- テーブルの見出し折返し防止をグローバルに設置 -----
const StyledTableHead$1 = require$$1.styled(require$$1.TableHead)(() => `
  &.MuiTableHead-root {
    >.MuiTableRow-head {
      >.MuiTableCell-head {
        white-space: nowrap;
      }
    }
  }
  `);
const CustomTableHeader$1 = ({ children, ...props }) => {
    return (require$$0.jsx(StyledTableHead$1, { ...props, children: require$$0.jsx(require$$1.TableRow, { children: children }) }));
};

const StyledTableRow$1 = require$$1.styled(require$$1.TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        background: theme.colors.alpha.black[10],
        '&:hover': {
            background: theme.colors.primary.lighter,
        },
    },
    '&:nth-of-type(even)': {
        background: theme.colors.alpha.black[5],
        '&:hover': {
            background: theme.colors.primary.lighter,
        },
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const CustomTableRow$1 = ({ children }) => {
    return require$$0.jsx(StyledTableRow$1, { children: children });
};

// ----- Design -----
// INFO: https://mui.com/material-ui/react-table/#basic-table
// ----- Cell BasicStyle -----
const StyledTableCell$1 = require$$1.styled(require$$1.TableCell)(({ theme }) => ({
    [`&.${require$$1.tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${require$$1.tableCellClasses.body}`]: {
        fontSize: 14,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// デフォルトのTableCell
const CustomTableCell$1 = ({ children, minWidthValue, maxWidthValue, noWrap, ...props }) => {
    return (require$$0.jsx(StyledTableCell$1, { ...props, sx: {
            whiteSpace: 'normal',
            top: 0,
            wordBreak: noWrap ? 'keep-all' : 'break-word',
            minWidth: minWidthValue ? minWidthValue : 60,
            maxWidth: maxWidthValue ? maxWidthValue : 240,
        }, children: children }));
};
// 編集機能がある時のTableCell
const StyledTableCellAction$3 = require$$1.styled(require$$1.TableCell)(({ theme }) => ({
    [`&.${require$$1.tableCellClasses.head}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${require$$1.tableCellClasses.body}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// アクションがある場合は見出しのmapとは別に並列で設置する
const CustomTableCellAction$1 = ({ children, ...props }) => {
    return (require$$0.jsx(StyledTableCellAction$3, { align: "center", sx: { top: 0 }, ...props, children: children }));
};

// ----- Action Header for Edit/Remove Other-----
const StyledTableCellAction$2 = require$$1.styled(require$$1.TableCell)(({ theme }) => ({
    [`&.${require$$1.tableCellClasses.head}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${require$$1.tableCellClasses.body}`]: {
        position: `sticky`,
        top: -49,
        right: 0,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// ----- Action Cell for Edit/Remove Other -----
const IconButtonUI$1 = require$$1.styled(require$$1.IconButton)(({ theme }) => `
  &.MuiButtonBase-root {
    &.MuiIconButton-root {
      background: ${theme.colors.alpha.white[70]};
      margin: ${theme.spacing(0, 0.5)};
    }
  `);
const CustomTableCellActionBody$1 = ({ hasEdit, editTitle, hasDelete, deleteTitle, onClickEdit, onClickDelete, testItem, ...props }) => {
    return (require$$0.jsx(StyledTableCellAction$2, { align: "center", sx: { top: 0 }, ...props, children: require$$0.jsxs(require$$1.Typography, { noWrap: true, children: [hasEdit && (require$$0.jsx(require$$1.Tooltip, { title: editTitle, arrow: true, children: require$$0.jsx(IconButtonUI$1, { onClick: onClickEdit, color: "primary", children: require$$0.jsx(EditTwoToneIcon__default$1["default"], { fontSize: "small", "data-testid": testItem && `updating:${testItem}` }) }) })), hasDelete && (require$$0.jsx(require$$1.Tooltip, { title: deleteTitle, arrow: true, children: require$$0.jsx(IconButtonUI$1, { onClick: onClickDelete, color: "error", children: require$$0.jsx(DeleteTwoToneIcon__default$1["default"], { fontSize: "small", "data-testid": testItem && `deleting:${testItem}` }) }) }))] }) }));
};

var dist = {};

Object.defineProperty(dist, '__esModule', { value: true });

var jsxRuntime = require$$0__default["default"];
var material = require$$1__default["default"];
var DeleteTwoToneIcon = DeleteTwoToneIcon__default$1["default"];
var EditTwoToneIcon = EditTwoToneIcon__default$1["default"];
var ExpandMoreIcon = require$$4__default["default"];
var HelpOutlineIcon = require$$5__default["default"];
var i18n = i18n__default$1["default"];
var reactI18next = require$$7__default["default"];
var CloseIcon = require$$8__default["default"];
var styles = require$$9__default["default"];
var Link = require$$10__default["default"];

var styles$1 = require$$12__default["default"];
var react = require$$13__default["default"];

function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DeleteTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(DeleteTwoToneIcon);
var EditTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(EditTwoToneIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(ExpandMoreIcon);
var HelpOutlineIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(HelpOutlineIcon);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy$1(i18n);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(CloseIcon);
var Link__default = /*#__PURE__*/_interopDefaultLegacy$1(Link);

const CustomTable = ({ children, caption, sx, ...props }) => {
    return (jsxRuntime.jsxs(material.Table, { stickyHeader: true, ...props, sx: sx, children: [caption && jsxRuntime.jsx("caption", { children: caption }), children] }));
};

const CustomTableContainer = ({ children, maxHeightValue, sx, ...props }) => {
    return (jsxRuntime.jsx(material.TableContainer, { component: material.Paper, style: { maxHeight: maxHeightValue }, sx: sx, ...props, children: children }));
};

// ----- テーブルの見出し折返し防止をグローバルに設置 -----
const StyledTableHead = material.styled(material.TableHead)(() => `
  &.MuiTableHead-root {
    >.MuiTableRow-head {
      >.MuiTableCell-head {
        white-space: nowrap;
      }
    }
  }
  `);
const CustomTableHeader = ({ children, ...props }) => {
    return (jsxRuntime.jsx(StyledTableHead, { ...props, children: jsxRuntime.jsx(material.TableRow, { children: children }) }));
};

const StyledTableRow = material.styled(material.TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        background: theme.colors.alpha.black[10],
        '&:hover': {
            background: theme.colors.primary.lighter,
        },
    },
    '&:nth-of-type(even)': {
        background: theme.colors.alpha.black[5],
        '&:hover': {
            background: theme.colors.primary.lighter,
        },
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const CustomTableRow = ({ children }) => {
    return jsxRuntime.jsx(StyledTableRow, { children: children });
};

// ----- Design -----
// INFO: https://mui.com/material-ui/react-table/#basic-table
// ----- Cell BasicStyle -----
const StyledTableCell = material.styled(material.TableCell)(({ theme }) => ({
    [`&.${material.tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${material.tableCellClasses.body}`]: {
        fontSize: 14,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// デフォルトのTableCell
const CustomTableCell = ({ children, minWidthValue, maxWidthValue, noWrap, ...props }) => {
    return (jsxRuntime.jsx(StyledTableCell, { ...props, sx: {
            whiteSpace: 'normal',
            top: 0,
            wordBreak: noWrap ? 'keep-all' : 'break-word',
            minWidth: minWidthValue ? minWidthValue : 60,
            maxWidth: maxWidthValue ? maxWidthValue : 240,
        }, children: children }));
};
// 編集機能がある時のTableCell
const StyledTableCellAction$1 = material.styled(material.TableCell)(({ theme }) => ({
    [`&.${material.tableCellClasses.head}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${material.tableCellClasses.body}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// アクションがある場合は見出しのmapとは別に並列で設置する
const CustomTableCellAction = ({ children, ...props }) => {
    return (jsxRuntime.jsx(StyledTableCellAction$1, { align: "center", sx: { top: 0 }, ...props, children: children }));
};

// ----- Action Header for Edit/Remove Other-----
const StyledTableCellAction = material.styled(material.TableCell)(({ theme }) => ({
    [`&.${material.tableCellClasses.head}`]: {
        position: `sticky`,
        top: 0,
        right: 0,
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${material.tableCellClasses.body}`]: {
        position: `sticky`,
        top: -49,
        right: 0,
        borderColor: theme.colors.alpha.black[5],
    },
}));
// ----- Action Cell for Edit/Remove Other -----
const IconButtonUI = material.styled(material.IconButton)(({ theme }) => `
  &.MuiButtonBase-root {
    &.MuiIconButton-root {
      background: ${theme.colors.alpha.white[70]};
      margin: ${theme.spacing(0, 0.5)};
    }
  `);
const CustomTableCellActionBody = ({ hasEdit, editTitle, hasDelete, deleteTitle, onClickEdit, onClickDelete, testItem, ...props }) => {
    return (jsxRuntime.jsx(StyledTableCellAction, { align: "center", sx: { top: 0 }, ...props, children: jsxRuntime.jsxs(material.Typography, { noWrap: true, children: [hasEdit && (jsxRuntime.jsx(material.Tooltip, { title: editTitle, arrow: true, children: jsxRuntime.jsx(IconButtonUI, { onClick: onClickEdit, color: "primary", children: jsxRuntime.jsx(EditTwoToneIcon__default["default"], { fontSize: "small", "data-testid": testItem && `updating:${testItem}` }) }) })), hasDelete && (jsxRuntime.jsx(material.Tooltip, { title: deleteTitle, arrow: true, children: jsxRuntime.jsx(IconButtonUI, { onClick: onClickDelete, color: "error", children: jsxRuntime.jsx(DeleteTwoToneIcon__default["default"], { fontSize: "small", "data-testid": testItem && `deleting:${testItem}` }) }) }))] }) }));
};

const TableHeightSwitch$1 = ({ checked, onChange, sxStyle, label, ...props }) => {
    return (jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Switch, { checked: checked, onChange: onChange }), label: label, labelPlacement: "end", sx: sxStyle, style: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'end',
            margin: '0 8px -8px 0',
        }, ...props }));
};

//  テストコメント2
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources$1 = {
    ja: {
        saasusTheme: {
            help: 'ヘルプ',
        },
    },
    en: {
        saasusTheme: {
            help: 'Help',
        },
    },
};
const i18nNamespace$1 = 'saasusTheme';
i18n__default["default"]
    .use(reactI18next.initReactI18next) // passes i18n down to react-i18next
    .init({
    defaultNS: i18nNamespace$1,
    fallbackNS: i18nNamespace$1,
    ns: [i18nNamespace$1],
    resources: resources$1,
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

const CustomTooltip$1 = ({ TooltipTitleIconComponent, TooltipComponent, }) => {
    const { t } = reactI18next.useTranslation(i18nNamespace$1, { i18n: i18n__default["default"] });
    // TooltipComponentが定義されていない場合、
    // スクリーンリーダーにButtonと読まれてしまうのでaria-labelを設定
    const toolTipAriaLabel = TooltipComponent ? undefined : t('help');
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: TooltipTitleIconComponent && (jsxRuntime.jsx(material.Tooltip, { title: jsxRuntime.jsx(material.Box, { sx: { textAlign: 'justify' }, children: TooltipTitleIconComponent }), arrow: true, placement: "top-start", children: jsxRuntime.jsx(material.Button, { sx: {
                    margin: '0 0 .2em 0',
                    '&.MuiButton-root': {
                        margin: '0 2px 4px',
                        minWidth: 'fit-content',
                        padding: '2px 4px',
                        borderRadius: '6px',
                    },
                }, "aria-label": toolTipAriaLabel, children: TooltipComponent ? (TooltipComponent) : (jsxRuntime.jsx(HelpOutlineIcon__default["default"], { fontSize: "small" })) }) })) }));
};

const AccordionStyle$1 = material.styled((props) => (jsxRuntime.jsx(material.Accordion, { disableGutters: true, elevation: 0, square: true, ...props })))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    transition: '0ms',
    '&:before': {
        display: 'none',
    },
    // 重複border非表示
    '.MuiAccordionDetails-root': { border: 'none !important' },
}));
// Stylings アコーディオン見出し、トリガー部分
const AccordionSummaryStyle$1 = material.styled((props) => (jsxRuntime.jsx(material.AccordionSummary, { ...props })))(({ theme }) => ({
    padding: '8px 16px',
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
const AccordionDetailsStyle$1 = material.styled(material.AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3, 3, 4),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '0 0 10px 10px',
}));
const AccordionWrap$1 = ({ 
// 見出し
accordionTitle, variant, component, accordionSubTitle, variantSubTitle, 
// アコーディオン開閉ステータス
defaultExpanded, expanded, onChange, 
// 一意の値が必要であれば、id関連をこの値に兼用させる
id, 
// Style
AccordionSx, AccordionSummarySx, DetailsSx, BorderNone, spacing, 
// コンテンツ
children, disabled, AdditionalProps, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, }) => {
    return (jsxRuntime.jsx(material.Paper, { sx: { p: 0, mb: spacing ? spacing : 4 }, children: jsxRuntime.jsxs(AccordionStyle$1, { expanded: expanded, onChange: onChange, sx: AccordionSx, defaultExpanded: defaultExpanded, children: [jsxRuntime.jsx(AccordionSummaryStyle$1, { expandIcon: jsxRuntime.jsx(ExpandMoreIcon__default["default"], {}), "aria-controls": id, id: id, disabled: disabled, sx: AccordionSummarySx, style: {
                        border: BorderNone && 'none',
                        background: BorderNone && 'none',
                    }, children: jsxRuntime.jsxs(material.Box, { sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            width: '100%',
                            pr: 5,
                        }, children: [jsxRuntime.jsxs(material.Box, { children: [jsxRuntime.jsxs(material.Box, { sx: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'end',
                                        }, children: [jsxRuntime.jsx(material.Typography, { variant: variant ? variant : 'h3', component: component ? component : 'div', children: accordionTitle }), jsxRuntime.jsx(CustomTooltip$1, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent })] }), jsxRuntime.jsx(material.Box, { children: jsxRuntime.jsx(material.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', children: accordionSubTitle }) })] }), jsxRuntime.jsx(material.Box, { children: AdditionalProps })] }) }), jsxRuntime.jsx(AccordionDetailsStyle$1, { sx: DetailsSx, style: {
                        marginTop: BorderNone ? '-16px' : '',
                    }, children: children })] }) }));
};

const AlertInner$1 = material.styled(material.Alert)(({ theme }) => `
    padding: ${theme.spacing(1, 4)};
    box-shadow: 0 2px 4px ${theme.colors.alpha.black[10]};

    .MuiAlert-message {
      padding: 7px 0;
    }

    .MuiTypography-root.MuiAlertTitle-root {
      margin: 0;
      font-size: 1em;
      line-height: 1.75;
    }

    .MuiAlert-icon {
      margin-right: ${theme.spacing(1)};
    }

    &.MuiAlert-standardError, &.MuiAlert-outlinedError {
      color: ${theme.colors.error.dark};
    }
    &.MuiAlert-standardWarning, &.MuiAlert-outlinedWarning {
      color: ${theme.colors.warning.dark};
    }
    &.MuiAlert-standardInfo, &.MuiAlert-outlinedInfo {
      color: ${theme.colors.info.dark};
    }
    &.MuiAlert-standardSuccess, &.MuiAlert-outlinedSuccess {
      color: ${theme.colors.success.dark};
    }

  `);
const CustomAlert$1 = ({ severity, variant, alertHeadingTitle, children, square, action, sx, }) => {
    return (jsxRuntime.jsx(material.Stack, { spacing: 4, children: jsxRuntime.jsxs(AlertInner$1, { severity: severity || 'error', variant: variant || 'standard', style: {
                borderRadius: square ? 0 : '',
            }, sx: sx, action: action, children: [jsxRuntime.jsx(material.AlertTitle, { children: jsxRuntime.jsx("strong", { children: alertHeadingTitle }) }), children] }) }));
};

// ----- extend Container -----
const StyledContainer$1 = material.styled(material.Container)(({ theme }) => `
    padding: ${theme.spacing(0, 0, 0, 0)};
  `);
const CustomContainer$1 = ({ children, maxWidth, fixed, sx, addGutter, mb, style, }) => {
    return (
    // margin-bottom or デフォルトmargin-bottom
    jsxRuntime.jsx(material.Box, { sx: { mb: mb || 4 }, children: jsxRuntime.jsx(StyledContainer$1, { maxWidth: maxWidth, sx: sx, style: style, 
            // 段階的な横幅指定
            fixed: fixed, 
            // 両横の溝=paddingの有無 defaultは無しに指定
            disableGutters: addGutter ? false : true, children: children }) }));
};

// 中見出しとサブタイトル
const TitleSet$1 = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, sxHeader, sxSubTitle, sx, gutterBottom, noMargin, mbSmall, mbLarge, style, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, 
// 下線
divider, dividerSx, }) => {
    const theme = material.useTheme();
    return (jsxRuntime.jsxs(material.Box, { sx: {
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
        }, children: [jsxRuntime.jsxs(material.Grid, { container: true, justifyContent: "space-between", alignItems: "center", sx: { mb: noMargin ? 0 : 1 }, columnSpacing: 2, children: [jsxRuntime.jsxs(material.Grid, { item: true, sx: style, flex: 1, children: [jsxRuntime.jsxs(material.Typography, { variant: variant, component: component ? component : 'div', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.5 }, children: [headingText, jsxRuntime.jsx(CustomTooltip$1, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent })] }), jsxRuntime.jsx(material.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', sx: sxSubTitle, style: { lineHeight: 1.4, textAlign: 'justify' }, children: subtitleText })] }), AdditionalProps && jsxRuntime.jsx(material.Grid, { item: true, children: AdditionalProps })] }), divider && jsxRuntime.jsx(material.Divider, { sx: dividerSx })] }));
};

const BoxOuter$1 = material.styled(material.Box)(({ theme }) => `
  margin-bottom: ${theme.spacing(4)};

  &:last-child {
    margin-bottom: 0;
  }
  `);
const BoxInner$1$1 = material.styled(material.Box)(({ theme }) => `
    padding: ${theme.spacing(0)};
    `);
const BoxContent$1 = ({ 
// 見出し
addTitle, variant, component, headingText, variantSubTitle, subtitleText, titleSx, 
// 下線
divider, dividerSx, 
// コンテンツ
children, boxInnerSx, 
// 下マージン
noMargin, mbSmall, mbLarge, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, 
// 右端オプション
AdditionalProps, 
// 全体sx
sx, }) => {
    // const theme = useTheme()
    return (jsxRuntime.jsx(BoxOuter$1, { sx: sx, children: jsxRuntime.jsxs(BoxInner$1$1, { sx: {
                ...boxInnerSx,
            }, children: [addTitle ? (jsxRuntime.jsx(TitleSet$1
                // 見出しフォントサイズ htmlElement設定 サブタイトル
                , { 
                    // 見出しフォントサイズ htmlElement設定 サブタイトル
                    headingText: headingText, variant: variant ? variant : 'h4', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                    // 見出し直下の余白具合
                    noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                    // カスタムCSSがあれば設置
                    sx: titleSx, 
                    // ヘルプアイコンとツールチップ
                    TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent, AdditionalProps: AdditionalProps, divider: divider, dividerSx: dividerSx })) : (''), children] }) }));
};

const BoxInner$2 = material.styled(material.Paper)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));
const BoxWrap$1 = ({ 
// 見出し
addTitle, variant, component, headingText, variantSubTitle, subtitleText, titleSx, 
// 下線
divider, 
// コンテンツ
children, boxInnerSx, 
// 下マージン
noMargin, mbSmall, mbLarge, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, 
// 右端オプション
AdditionalProps, 
// 全体sx
sx, }) => {
    const theme = material.useTheme();
    return (jsxRuntime.jsx(material.Box, { sx: sx, children: jsxRuntime.jsxs(BoxInner$2, { elevation: 1, sx: {
                padding: divider ? theme.spacing(1.5, 3, 3) : theme.spacing(3),
                ...boxInnerSx,
            }, children: [addTitle && (jsxRuntime.jsx(TitleSet$1
                // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                , { 
                    // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                    headingText: headingText, variant: variant ? variant : 'h3', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                    // 見出し直下の余白具合
                    noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                    // カスタムCSSがあれば設置
                    sx: titleSx, 
                    // ヘルプアイコンとツールチップ
                    TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent, AdditionalProps: AdditionalProps, 
                    // 下線
                    divider: divider, 
                    // 下線がある時は見出し内の余白をタイトにする。横幅を合わせる
                    dividerSx: { my: 1.5, mx: -3 } })), children] }) }));
};

// {`theme.breakpoints.up('sm') matches: ${matches}`}
const StackButtonWrap$1 = material.styled(material.Stack)(() => ({
    display: 'grid',
    gap: 8,
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
    // テーマブレイクポイントのsm
    '@media (min-width: 600px)': {
        gap: 24,
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), auto))',
    },
}));
const ButtonWrap$1 = ({ mt, mb, sx, children, justifyContent }) => {
    return (jsxRuntime.jsx(StackButtonWrap$1, { justifyContent: justifyContent ? justifyContent : 'flex-start', sx: {
            mt: mt || 4,
            mb: mb || 2,
            ...sx,
        }, children: children }));
};

const CustomButton$1 = ({ color, variant, size, type, startIcon, endIcon, disabled, onClick, sx, children, }) => {
    return (jsxRuntime.jsx(material.Button, { color: color, size: size, variant: variant ? variant : 'contained', type: type ? type : 'submit', onClick: onClick, startIcon: startIcon, endIcon: endIcon, disabled: disabled, sx: sx, children: children }));
};

const DialogWrapper$1 = material.styled(material.Dialog)(() => `
      .MuiDialog-paper {
        overflow: visible;
      }
`);
const AvatarError$1 = material.styled(material.Avatar)(({ theme }) => `
    background-color: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    .MuiSvgIcon-root {
      font-size: ${theme.typography.pxToRem(45)};
    }
  `);
const ButtonError$1 = material.styled(material.Button)(({ theme }) => `
    background: ${theme.colors.error.main};
    color: ${theme.palette.error.contrastText};

    &:hover {
      background: ${theme.colors.error.dark};
    }
  `);
const DeleteDialog$1 = ({ open, DeleteItem, handleDeleteCompleted, closeDeleteDialog, }) => {
    return (jsxRuntime.jsx(DialogWrapper$1, { open: open, maxWidth: "sm", fullWidth: true, keepMounted: true, onClose: closeDeleteDialog, children: jsxRuntime.jsxs(material.Box, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", p: 5, children: [jsxRuntime.jsx(AvatarError$1, { children: jsxRuntime.jsx(CloseIcon__default["default"], {}) }), jsxRuntime.jsxs(material.Typography, { align: "center", sx: {
                        pt: 4,
                    }, variant: "h3", children: [DeleteItem, jsxRuntime.jsx("br", {}), "\u3092\u524A\u9664\u3057\u307E\u3059"] }), jsxRuntime.jsx(material.Typography, { align: "center", sx: {
                        py: 4,
                    }, children: "\u4E00\u5EA6\u524A\u9664\u3059\u308B\u3068\u5143\u306B\u623B\u305B\u307E\u305B\u3093" }), jsxRuntime.jsxs(material.Box, { children: [jsxRuntime.jsx(material.Button, { variant: "text", size: "large", sx: {
                                mx: 1,
                            }, onClick: closeDeleteDialog, "data-testid": "cancel", children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), jsxRuntime.jsx(ButtonError$1, { onClick: handleDeleteCompleted, size: "large", sx: {
                                mx: 1,
                                px: 3,
                            }, variant: "contained", "data-testid": "deleteButton", children: "\u524A\u9664" })] })] }) }));
};

const Label$1 = material.styled(material.InputLabel)(() => ({
    fontSize: '14px',
    position: 'initial',
    textAlign: 'left',
    transform: 'none',
    minHeight: '1.85em',
    '&.MuiFormLabel-root.MuiInputLabel-root': {
        fontSize: 14,
    },
}));
const CustomLabel$1 = ({ id, TooltipTitleIconComponent, TooltipComponent, children, OptionalChip, chipLabel, color, size, sx, variant, mt, }) => {
    return (jsxRuntime.jsxs(Label$1, { htmlFor: id, sx: { mt: mt || 3 }, children: [children, jsxRuntime.jsx(CustomTooltip$1, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent }), OptionalChip && (jsxRuntime.jsx(material.Chip, { size: size ? size : 'small', color: color, variant: variant, label: chipLabel ? chipLabel : '任意', sx: sx, style: {
                    borderRadius: 4,
                    margin: `0px 4px 4px`,
                    padding: `1px 8px 0`,
                } }))] }));
};

// ヘルパーテキストまで含めたラッピング
const WrapButtonlUI$1 = material.styled(material.Stack)(() => `
  flexDirectiom: column;
  & + .MuiFormHelperText-root.MuiFormHelperText-contained.MuiFormHelperText-root {
    margin: -4px 12px 4px 12px;
  }
  `);
const MinWidth$1 = 200;
const MinHeight$1 = 70;
const FontWeight$1 = 600;
const ClickableElement$1 = `
  position: absolute;
  content: '';
  display: block;
  overflow: hidden;
  min-width: ${MinWidth$1};
`;
const ButtonlUI$1 = material.styled(material.Button)(({ theme }) => `
  margin: ${theme.spacing(1)};

  // Button Style
  &.MuiButtonBase-root {

    &.MuiButton-root {
      min-width: ${MinWidth$1}px;
      min-height: ${MinHeight$1}px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 44px;
      padding-bottom: 0px;

      &.Mui-disabled {
        background-color: ${theme.colors.secondary.lighter};
        border: none;
      }

      .MuiButtonBase-root.MuiRadio-root {
        top: 0;
        bottom: 0;
        width: 100%;
        padding-left: 12px;

        // Checked Style
        &.Mui-checked {
          min-width: ${MinWidth$1}px;
          background-color: ${theme.colors.primary.lighter};
          border: 2px solid ${theme.colors.primary.main};
          height: 100%;
          border-radius: 9px;
          overflow: hidden;

          &:after{
            ${ClickableElement$1}
            left: -24px;
          }
        }
      }
    }
  }

  // Label Style
  span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.MuiTypography-root {
    font-weight: ${FontWeight$1};
    color: ${theme.colors.secondary.dark};
    padding-left: 4px;

    &.MuiTypography-body1.MuiTypography-root {
      margin: 0px 0px -24px 0px;
    }
  }

  .MuiTypography-root.MuiTypography-body1.MuiTypography-root+.MuiTypography-root.MuiTypography-body1.MuiTypography-root {
    color: ${theme.colors.secondary.dark};
    font-size: 14px;
  }

  .MuiFormControlLabel-root {
    margin-left: -4px;

    &.MuiFormControlLabel-label {
      fontWeight: 600,
      min-width: ${MinWidth$1}px;
      font-weight: ${FontWeight$1};
      text-align: left;
      z-index: 1;
    }

    .MuiButtonBase-root.MuiRadio-root {
      left: 0;
      position: absolute;
      width: 100%;
      justify-content: flex-start;

      &:hover {
        min-width: ${MinWidth$1}px;
        height: 100%;
        border-radius: 0;
        overflow: hidden;
      }
    }
  }

  .MuiTouchRipple-root.MuiTouchRipple-root {
    min-width: ${MinWidth$1}px;
    min-height: ${MinHeight$1}px;
    background-color: ${theme.colors.primary.lighter};
    min-width: ${MinWidth$1};
    min-height: 100px;
    padding: 0;
    margin-top: -12px;
    margin-left: -4px;
    border-radius: 0;
    overflow: hidden;
    opacity: 0.5;
  }
  `);
const FormControlUI$1 = material.styled(material.FormControlLabel)(() => `
    min-width: ${MinWidth$1}px;
    `);
const OptionComponent$1 = material.styled(material.Typography)(({ theme }) => `
      color: ${theme.colors.primary.main};
      font-weight: ${FontWeight$1};
      position: absolute;
      right: 10px;
      top: 8px;
      font-size: 12px !important;
      text-align: right;
    `);
const RadioButton$1 = ({ label, value, disabled, AdditionalProps, helperText, onClick, checked, }) => {
    return (jsxRuntime.jsx(WrapButtonlUI$1, { children: jsxRuntime.jsxs(ButtonlUI$1, { variant: "outlined", disabled: disabled, onClick: onClick, children: [jsxRuntime.jsx(FormControlUI$1, { control: jsxRuntime.jsx(material.Radio, {}), label: label, value: value, checked: checked }), jsxRuntime.jsx(material.Typography, { children: jsxRuntime.jsx(OptionComponent$1, { children: AdditionalProps }) }), jsxRuntime.jsx(material.Typography, { children: helperText })] }) }));
};

// 大見出しとサブタイトル
const MainTitleSet$1 = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, 
// TitleWrapNone,
sxHeader, sxSubTitle, gutterBottom, mb, }) => {
    const theme = material.useTheme();
    return (jsxRuntime.jsx(material.Box, { sx: [
            {
                p: theme.spacing(3, 4),
                mb: mb || theme.spacing(2),
            },
        ], children: jsxRuntime.jsxs(material.Grid, { container: true, justifyContent: "space-between", alignItems: "center", columnSpacing: 2, children: [jsxRuntime.jsxs(material.Grid, { item: true, flex: 1, children: [jsxRuntime.jsx(material.Typography, { variant: variant ? variant : 'h1', component: component ? component : 'h1', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.4 }, children: headingText }), jsxRuntime.jsx(material.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle1', sx: sxSubTitle, style: { lineHeight: 1.4, textAlign: 'justify' }, children: subtitleText })] }), AdditionalProps && jsxRuntime.jsx(material.Grid, { item: true, children: AdditionalProps })] }) }));
};

function toVal$1(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal$1(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx$1() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal$1(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var propTypes$1 = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

var hasRequiredReactIs$1;

function requireReactIs$1 () {
	if (hasRequiredReactIs$1) return reactIs$1.exports;
	hasRequiredReactIs$1 = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min$1();
		} else {
		  module.exports = requireReactIs_development$1();
		}
} (reactIs$1));
	return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign$1;
var hasRequiredObjectAssign$1;

function requireObjectAssign$1 () {
	if (hasRequiredObjectAssign$1) return objectAssign$1;
	hasRequiredObjectAssign$1 = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign$1 = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1$1;
var hasRequiredReactPropTypesSecret$1;

function requireReactPropTypesSecret$1 () {
	if (hasRequiredReactPropTypesSecret$1) return ReactPropTypesSecret_1$1;
	hasRequiredReactPropTypesSecret$1 = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1$1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1$1;
}

var has$1;
var hasRequiredHas$1;

function requireHas$1 () {
	if (hasRequiredHas$1) return has$1;
	hasRequiredHas$1 = 1;
	has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	return has$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1$1;
var hasRequiredCheckPropTypes$1;

function requireCheckPropTypes$1 () {
	if (hasRequiredCheckPropTypes$1) return checkPropTypes_1$1;
	hasRequiredCheckPropTypes$1 = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret$1();
	  var loggedTypeFailures = {};
	  var has = requireHas$1();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1$1 = checkPropTypes;
	return checkPropTypes_1$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers$1;
var hasRequiredFactoryWithTypeCheckers$1;

function requireFactoryWithTypeCheckers$1 () {
	if (hasRequiredFactoryWithTypeCheckers$1) return factoryWithTypeCheckers$1;
	hasRequiredFactoryWithTypeCheckers$1 = 1;

	var ReactIs = requireReactIs$1();
	var assign = requireObjectAssign$1();

	var ReactPropTypesSecret = requireReactPropTypesSecret$1();
	var has = requireHas$1();
	var checkPropTypes = requireCheckPropTypes$1();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers$1 = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims$1;
var hasRequiredFactoryWithThrowingShims$1;

function requireFactoryWithThrowingShims$1 () {
	if (hasRequiredFactoryWithThrowingShims$1) return factoryWithThrowingShims$1;
	hasRequiredFactoryWithThrowingShims$1 = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret$1();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims$1 = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims$1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs$1 = requireReactIs$1();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess$1 = true;
  propTypes$1.exports = requireFactoryWithTypeCheckers$1()(ReactIs$1.isElement, throwOnDirectAccess$1);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes$1.exports = requireFactoryWithThrowingShims$1()();
}

const TextWrapper$1 = styles.styled('span')(({ theme }) => `
      display: inline-block;
      align-items: center;

      &.flexItem {
        display: inline-flex;
      }

      &.MuiText {

        &-black {
          color: ${theme.palette.common.black}
        }

        &-primary {
          color: ${theme.palette.primary.main}
        }

        &-secondary {
          color: ${theme.palette.secondary.main}
        }

        &-success {
          color: ${theme.palette.success.main}
        }

        &-warning {
          color: ${theme.palette.warning.main}
        }

        &-error {
          color: ${theme.palette.error.main}
        }

        &-info {
          color: ${theme.palette.info.main}
        }
      }
`);
const Text$1 = ({ color = 'secondary', flex, children, ...rest }) => {
    return (jsxRuntime.jsx(TextWrapper$1, { className: clsx$1('MuiText-' + color, { flexItem: flex }), ...rest, children: children }));
};
Text$1.propTypes = {
    children: propTypes$1.exports.node,
    className: propTypes$1.exports.string,
    color: propTypes$1.exports.oneOf([
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'black',
    ]),
};

const LogoBox$1 = material.styled(material.Box)(() => `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`);
function SaaSusLogo$1({ width, alt }) {
    return (jsxRuntime.jsx(LogoBox$1, { children: jsxRuntime.jsx(Link__default["default"], { href: "/", children: jsxRuntime.jsx("img", { width: width, src: "/static/images/logo/saasus_logo.svg", alt: alt }) }) }));
}

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem$2$1 = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim$2$1 = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors$2$1 = {
    primary: '#44a574',
    secondary: '#a2a8ab',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#CBCCD2',
    white: '#232a2e',
    primaryAlt: '#232a2e',
    trueWhite: '#ffffff',
};
const colors$2$1 = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 0px 2px #757c82',
        cardSm: '0px 0px 2px #757c82',
        cardLg: '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)',
    },
    layout: {
        general: {
            bodyBg: '#141c23',
        },
        sidebar: {
            background: themeColors$2$1.primaryAlt,
            textColor: themeColors$2$1.secondary,
            dividerBg: '#303e47',
            menuItemColor: '#a1a7ab',
            menuItemColorActive: '#ffffff',
            menuItemBg: themeColors$2$1.primaryAlt,
            menuItemBgActive: themeColors$2$1.primary,
            menuItemIconColor: '#4a5d69',
            menuItemIconColorActive: '#ffffff',
            menuItemHeadingColor: material.darken(themeColors$2$1.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: material.alpha(themeColors$2$1.white, 0.02),
            10: material.alpha(themeColors$2$1.white, 0.1),
            30: material.alpha(themeColors$2$1.white, 0.3),
            50: material.alpha(themeColors$2$1.white, 0.5),
            70: material.alpha(themeColors$2$1.white, 0.7),
            100: themeColors$2$1.white,
        },
        trueWhite: {
            5: material.alpha(themeColors$2$1.trueWhite, 0.02),
            10: material.alpha(themeColors$2$1.trueWhite, 0.1),
            30: material.alpha(themeColors$2$1.trueWhite, 0.3),
            50: material.alpha(themeColors$2$1.trueWhite, 0.5),
            70: material.alpha(themeColors$2$1.trueWhite, 0.7),
            100: themeColors$2$1.trueWhite,
        },
        black: {
            5: material.alpha(themeColors$2$1.black, 0.02),
            10: material.alpha(themeColors$2$1.black, 0.1),
            30: material.alpha(themeColors$2$1.black, 0.3),
            50: material.alpha(themeColors$2$1.black, 0.5),
            70: material.alpha(themeColors$2$1.black, 0.7),
            100: themeColors$2$1.black,
        },
    },
    secondary: {
        lighter: material.alpha(themeColors$2$1.secondary, 0.85),
        light: material.alpha(themeColors$2$1.secondary, 0.6),
        main: themeColors$2$1.secondary,
        dark: material.darken(themeColors$2$1.secondary, 0.2),
    },
    primary: {
        lighter: material.alpha(themeColors$2$1.primary, 0.85),
        light: material.alpha(themeColors$2$1.primary, 0.3),
        main: themeColors$2$1.primary,
        dark: material.darken(themeColors$2$1.primary, 0.2),
    },
    success: {
        lighter: material.alpha(themeColors$2$1.success, 0.85),
        light: material.alpha(themeColors$2$1.success, 0.3),
        main: themeColors$2$1.success,
        dark: material.darken(themeColors$2$1.success, 0.2),
    },
    warning: {
        lighter: material.alpha(themeColors$2$1.warning, 0.85),
        light: material.alpha(themeColors$2$1.warning, 0.3),
        main: themeColors$2$1.warning,
        dark: material.darken(themeColors$2$1.warning, 0.2),
    },
    error: {
        lighter: material.alpha(themeColors$2$1.error, 0.85),
        light: material.alpha(themeColors$2$1.error, 0.3),
        main: themeColors$2$1.error,
        dark: material.darken(themeColors$2$1.error, 0.2),
    },
    info: {
        lighter: material.alpha(themeColors$2$1.info, 0.85),
        light: material.alpha(themeColors$2$1.info, 0.3),
        main: themeColors$2$1.info,
        dark: material.darken(themeColors$2$1.info, 0.2),
    },
};
const SaaSusDarkThemeHighContrast$1 = material.createTheme({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: colors$2$1.gradients.blue1,
            blue2: colors$2$1.gradients.blue2,
            blue3: colors$2$1.gradients.blue3,
            blue4: colors$2$1.gradients.blue4,
            blue5: colors$2$1.gradients.blue5,
            orange1: colors$2$1.gradients.orange1,
            orange2: colors$2$1.gradients.orange2,
            orange3: colors$2$1.gradients.orange3,
            purple1: colors$2$1.gradients.purple1,
            purple3: colors$2$1.gradients.purple3,
            pink1: colors$2$1.gradients.pink1,
            pink2: colors$2$1.gradients.pink2,
            green1: colors$2$1.gradients.green1,
            green2: colors$2$1.gradients.green2,
            black1: colors$2$1.gradients.black1,
            black2: colors$2$1.gradients.black2,
        },
        shadows: {
            success: colors$2$1.shadows.success,
            error: colors$2$1.shadows.error,
            primary: colors$2$1.shadows.primary,
            info: colors$2$1.shadows.info,
            warning: colors$2$1.shadows.warning,
        },
        alpha: {
            white: {
                5: material.alpha(themeColors$2$1.white, 0.02),
                10: material.alpha(themeColors$2$1.white, 0.1),
                30: material.alpha(themeColors$2$1.white, 0.3),
                50: material.alpha(themeColors$2$1.white, 0.5),
                70: material.alpha(themeColors$2$1.white, 0.7),
                100: themeColors$2$1.white,
            },
            trueWhite: {
                5: material.alpha(themeColors$2$1.trueWhite, 0.02),
                10: material.alpha(themeColors$2$1.trueWhite, 0.1),
                30: material.alpha(themeColors$2$1.trueWhite, 0.3),
                50: material.alpha(themeColors$2$1.trueWhite, 0.5),
                70: material.alpha(themeColors$2$1.trueWhite, 0.7),
                100: themeColors$2$1.trueWhite,
            },
            black: {
                5: material.alpha(themeColors$2$1.black, 0.02),
                10: material.alpha(themeColors$2$1.black, 0.1),
                30: material.alpha(themeColors$2$1.black, 0.3),
                50: material.alpha(themeColors$2$1.black, 0.5),
                70: material.alpha(themeColors$2$1.black, 0.7),
                100: themeColors$2$1.black,
            },
        },
        secondary: {
            lighter: material.alpha(themeColors$2$1.secondary, 0.1),
            light: material.alpha(themeColors$2$1.secondary, 0.3),
            main: themeColors$2$1.secondary,
            dark: material.darken(themeColors$2$1.secondary, 0.2),
        },
        primary: {
            lighter: material.alpha(themeColors$2$1.primary, 0.1),
            light: material.alpha(themeColors$2$1.primary, 0.3),
            main: themeColors$2$1.primary,
            dark: material.darken(themeColors$2$1.primary, 0.2),
        },
        success: {
            lighter: material.alpha(themeColors$2$1.success, 0.1),
            light: material.alpha(themeColors$2$1.success, 0.3),
            main: themeColors$2$1.success,
            dark: material.darken(themeColors$2$1.success, 0.2),
        },
        warning: {
            lighter: material.alpha(themeColors$2$1.warning, 0.1),
            light: material.alpha(themeColors$2$1.warning, 0.3),
            main: themeColors$2$1.warning,
            dark: material.darken(themeColors$2$1.warning, 0.2),
        },
        error: {
            lighter: material.alpha(themeColors$2$1.error, 0.1),
            light: material.alpha(themeColors$2$1.error, 0.3),
            main: themeColors$2$1.error,
            dark: material.darken(themeColors$2$1.error, 0.2),
        },
        info: {
            lighter: material.alpha(themeColors$2$1.info, 0.1),
            light: material.alpha(themeColors$2$1.info, 0.3),
            main: themeColors$2$1.info,
            dark: material.darken(themeColors$2$1.info, 0.2),
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors$2$1.layout.sidebar.background,
        textColor: colors$2$1.layout.sidebar.textColor,
        dividerBg: colors$2$1.layout.sidebar.dividerBg,
        menuItemColor: colors$2$1.layout.sidebar.menuItemColor,
        menuItemColorActive: colors$2$1.layout.sidebar.menuItemColorActive,
        menuItemBg: colors$2$1.layout.sidebar.menuItemBg,
        menuItemBgActive: colors$2$1.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors$2$1.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors$2$1.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors$2$1.layout.sidebar.menuItemHeadingColor,
        boxShadow: '1px 0 0 #303e47',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: themeColors$2$1.primaryAlt,
        boxShadow: '0px 1px 0px #303e47',
        textColor: colors$2$1.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors$2$1.alpha.black[100],
            white: colors$2$1.alpha.white[100],
        },
        mode: 'dark',
        primary: {
            light: colors$2$1.primary.light,
            main: colors$2$1.primary.main,
            dark: colors$2$1.primary.dark,
        },
        secondary: {
            light: colors$2$1.secondary.light,
            main: colors$2$1.secondary.main,
            dark: colors$2$1.secondary.dark,
        },
        error: {
            light: colors$2$1.error.light,
            main: colors$2$1.error.main,
            dark: colors$2$1.error.dark,
            contrastText: themeColors$2$1.trueWhite,
        },
        success: {
            light: colors$2$1.success.light,
            main: colors$2$1.success.main,
            dark: colors$2$1.success.dark,
            contrastText: themeColors$2$1.trueWhite,
        },
        info: {
            light: colors$2$1.info.light,
            main: colors$2$1.info.main,
            dark: colors$2$1.info.dark,
            contrastText: themeColors$2$1.trueWhite,
        },
        warning: {
            light: colors$2$1.warning.light,
            main: colors$2$1.warning.main,
            dark: colors$2$1.warning.dark,
            contrastText: themeColors$2$1.trueWhite,
        },
        text: {
            primary: colors$2$1.alpha.black[100],
            secondary: colors$2$1.alpha.black[70],
            disabled: colors$2$1.alpha.black[50],
        },
        background: {
            paper: colors$2$1.alpha.white[100],
            default: colors$2$1.layout.general.bodyBg,
        },
        action: {
            active: colors$2$1.alpha.black[100],
            hover: colors$2$1.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors$2$1.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors$2$1.alpha.black[50],
            disabledBackground: colors$2$1.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors$2$1.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: material.alpha(material.darken('#141c23', 0.5), 0.4),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: 'bold',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: material.darken(themeColors$2$1.primaryAlt, 0.5),
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                },
                summary: {
                    cursor: 'pointer',
                    color: colors$2$1.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors$2$1.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors$2$1.primary.lighter,
                    borderLeftColor: colors$2$1.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors$2$1.primary.lighter +
                        ', 0 0 8px' +
                        colors$2$1.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors$2$1.primary.main,
                    colorScheme: 'dark',
                },
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim$2$1(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem$2$1(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // TODO: Set Color
                    background: 'transparent',
                    border: `1px solid ${colors$2$1.info.light}`,
                    color: colors$2$1.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors$2$1.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$2$1.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$2$1.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors$2$1.alpha.black[5],
                    color: colors$2$1.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: 15,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors$2$1.alpha.black[5],
                    color: colors$2$1.alpha.black[100],
                    '&:hover': {
                        background: colors$2$1.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors$2$1.alpha.black[50],
                    '&:hover': {
                        color: colors$2$1.alpha.black[70],
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                colorDefault: {
                    background: colors$2$1.alpha.black[30],
                    color: colors$2$1.alpha.trueWhite[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors$2$1.alpha.black[10],
                    fontSize: 13,
                    color: colors$2$1.alpha.black[70],
                    fontWeight: 'bold',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors$2$1.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors$2$1.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors$2$1.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors$2$1.secondary.main,
                    color: colors$2$1.alpha.white[100],
                    border: '1px solid ' + colors$2$1.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors$2$1.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors$2$1.alpha.black[5],
                        color: colors$2$1.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors$2$1.primary.main,
                    background: colors$2$1.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: themeColors$2$1.trueWhite,
                        background: colors$2$1.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors$2$1.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors$2$1.alpha.white[100],
                    fontWeight: 'bold',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors$2$1.shadows.card,
                },
                elevation2: {
                    boxShadow: colors$2$1.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors$2$1.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors$2$1.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors$2$1.alpha.black[100],
                        color: colors$2$1.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: colors$2$1.alpha.black[10],
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: material.alpha(colors$2$1.primary.lighter, 0.2),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors$2$1.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors$2$1.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors$2$1.alpha.trueWhite[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors$2$1.alpha.trueWhite[70],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors$2$1.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$2$1.alpha.black[100],
                            background: material.alpha(colors$2$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors$2$1.alpha.black[100],
                        background: material.alpha(colors$2$1.primary.lighter, 0.2),
                    },
                    '&.Mui-selected:hover': {
                        background: material.alpha(colors$2$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors$2$1.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$2$1.alpha.black[100],
                            background: material.alpha(colors$2$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: material.alpha(colors$2$1.error.lighter, 0.2),
                    color: colors$2$1.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: material.alpha(colors$2$1.error.lighter, 0.3),
                    },
                },
                popupIndicator: {
                    color: colors$2$1.alpha.black[70],
                    '&:hover': {
                        background: material.alpha(colors$2$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors$2$1.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: material.alpha(colors$2$1.alpha.black[5], 0.05),
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors$2$1.alpha.black[10],
                    fontSize: 14,
                },
                head: {
                    textTransform: 'uppercase',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: colors$2$1.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14,
                },
                standardInfo: {
                    color: colors$2$1.info.main,
                },
                action: {
                    color: colors$2$1.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors$2$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$2$1.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors$2$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$2$1.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors$2$1.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: material.alpha(colors$2$1.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: 13,
                },
                arrow: {
                    color: material.alpha(colors$2$1.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors$2$1.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors$2$1.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors$2$1.alpha.black[10],
                },
                track: {
                    backgroundColor: colors$2$1.alpha.black[5],
                    border: '1px solid ' + colors$2$1.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors$2$1.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors$2$1.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors$2$1.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors$2$1.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors$2$1.success.main,
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4,
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$2$1(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$2$1(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(14)}`,
            },
            color: colors$2$1.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(13)}`,
            },
            color: colors$2$1.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim$2$1(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(12)}`,
            },
            color: colors$2$1.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim$2$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim$2$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2$1(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem$1$1 = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim$1$1 = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors$1$1 = {
    primary: '#8C7CF0',
    secondary: '#9EA4C1',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#CBCCD2',
    white: '#111633',
    primaryAlt: '#111633',
    trueWhite: '#ffffff',
};
const colors$1$1 = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 0px 2px #6A7199',
        cardSm: '0px 0px 2px #6A7199',
        cardLg: '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)',
    },
    layout: {
        general: {
            bodyBg: '#070C27',
        },
        sidebar: {
            background: themeColors$1$1.primaryAlt,
            textColor: themeColors$1$1.secondary,
            dividerBg: '#272C48',
            menuItemColor: '#9EA4C1',
            menuItemColorActive: '#ffffff',
            menuItemBg: themeColors$1$1.primaryAlt,
            menuItemBgActive: 'rgba(43, 48, 77, .6)',
            menuItemIconColor: '#444A6B',
            menuItemIconColorActive: '#ffffff',
            menuItemHeadingColor: material.darken(themeColors$1$1.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: material.alpha(themeColors$1$1.white, 0.02),
            10: material.alpha(themeColors$1$1.white, 0.1),
            30: material.alpha(themeColors$1$1.white, 0.3),
            50: material.alpha(themeColors$1$1.white, 0.5),
            70: material.alpha(themeColors$1$1.white, 0.7),
            100: themeColors$1$1.white,
        },
        trueWhite: {
            5: material.alpha(themeColors$1$1.trueWhite, 0.02),
            10: material.alpha(themeColors$1$1.trueWhite, 0.1),
            30: material.alpha(themeColors$1$1.trueWhite, 0.3),
            50: material.alpha(themeColors$1$1.trueWhite, 0.5),
            70: material.alpha(themeColors$1$1.trueWhite, 0.7),
            100: themeColors$1$1.trueWhite,
        },
        black: {
            5: material.alpha(themeColors$1$1.black, 0.02),
            10: material.alpha(themeColors$1$1.black, 0.1),
            30: material.alpha(themeColors$1$1.black, 0.3),
            50: material.alpha(themeColors$1$1.black, 0.5),
            70: material.alpha(themeColors$1$1.black, 0.7),
            100: themeColors$1$1.black,
        },
    },
    secondary: {
        lighter: material.alpha(themeColors$1$1.secondary, 0.85),
        light: material.alpha(themeColors$1$1.secondary, 0.6),
        main: themeColors$1$1.secondary,
        dark: material.darken(themeColors$1$1.secondary, 0.2),
    },
    primary: {
        lighter: material.alpha(themeColors$1$1.primary, 0.85),
        light: material.alpha(themeColors$1$1.primary, 0.3),
        main: themeColors$1$1.primary,
        dark: material.darken(themeColors$1$1.primary, 0.2),
    },
    success: {
        lighter: material.alpha(themeColors$1$1.success, 0.85),
        light: material.alpha(themeColors$1$1.success, 0.3),
        main: themeColors$1$1.success,
        dark: material.darken(themeColors$1$1.success, 0.2),
    },
    warning: {
        lighter: material.alpha(themeColors$1$1.warning, 0.85),
        light: material.alpha(themeColors$1$1.warning, 0.3),
        main: themeColors$1$1.warning,
        dark: material.darken(themeColors$1$1.warning, 0.2),
    },
    error: {
        lighter: material.alpha(themeColors$1$1.error, 0.85),
        light: material.alpha(themeColors$1$1.error, 0.3),
        main: themeColors$1$1.error,
        dark: material.darken(themeColors$1$1.error, 0.2),
    },
    info: {
        lighter: material.alpha(themeColors$1$1.info, 0.85),
        light: material.alpha(themeColors$1$1.info, 0.3),
        main: themeColors$1$1.info,
        dark: material.darken(themeColors$1$1.info, 0.2),
    },
};
const SaaSusDarkTheme$1 = material.createTheme({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: colors$1$1.gradients.blue1,
            blue2: colors$1$1.gradients.blue2,
            blue3: colors$1$1.gradients.blue3,
            blue4: colors$1$1.gradients.blue4,
            blue5: colors$1$1.gradients.blue5,
            orange1: colors$1$1.gradients.orange1,
            orange2: colors$1$1.gradients.orange2,
            orange3: colors$1$1.gradients.orange3,
            purple1: colors$1$1.gradients.purple1,
            purple3: colors$1$1.gradients.purple3,
            pink1: colors$1$1.gradients.pink1,
            pink2: colors$1$1.gradients.pink2,
            green1: colors$1$1.gradients.green1,
            green2: colors$1$1.gradients.green2,
            black1: colors$1$1.gradients.black1,
            black2: colors$1$1.gradients.black2,
        },
        shadows: {
            success: colors$1$1.shadows.success,
            error: colors$1$1.shadows.error,
            primary: colors$1$1.shadows.primary,
            info: colors$1$1.shadows.info,
            warning: colors$1$1.shadows.warning,
        },
        alpha: {
            white: {
                5: material.alpha(themeColors$1$1.white, 0.02),
                10: material.alpha(themeColors$1$1.white, 0.1),
                30: material.alpha(themeColors$1$1.white, 0.3),
                50: material.alpha(themeColors$1$1.white, 0.5),
                70: material.alpha(themeColors$1$1.white, 0.7),
                100: themeColors$1$1.white,
            },
            trueWhite: {
                5: material.alpha(themeColors$1$1.trueWhite, 0.02),
                10: material.alpha(themeColors$1$1.trueWhite, 0.1),
                30: material.alpha(themeColors$1$1.trueWhite, 0.3),
                50: material.alpha(themeColors$1$1.trueWhite, 0.5),
                70: material.alpha(themeColors$1$1.trueWhite, 0.7),
                100: themeColors$1$1.trueWhite,
            },
            black: {
                5: material.alpha(themeColors$1$1.black, 0.02),
                10: material.alpha(themeColors$1$1.black, 0.1),
                30: material.alpha(themeColors$1$1.black, 0.3),
                50: material.alpha(themeColors$1$1.black, 0.5),
                70: material.alpha(themeColors$1$1.black, 0.7),
                100: themeColors$1$1.black,
            },
        },
        secondary: {
            lighter: material.alpha(themeColors$1$1.secondary, 0.1),
            light: material.alpha(themeColors$1$1.secondary, 0.3),
            main: themeColors$1$1.secondary,
            dark: material.darken(themeColors$1$1.secondary, 0.2),
        },
        primary: {
            lighter: material.alpha(themeColors$1$1.primary, 0.1),
            light: material.alpha(themeColors$1$1.primary, 0.3),
            main: themeColors$1$1.primary,
            dark: material.darken(themeColors$1$1.primary, 0.2),
        },
        success: {
            lighter: material.alpha(themeColors$1$1.success, 0.1),
            light: material.alpha(themeColors$1$1.success, 0.3),
            main: themeColors$1$1.success,
            dark: material.darken(themeColors$1$1.success, 0.2),
        },
        warning: {
            lighter: material.alpha(themeColors$1$1.warning, 0.1),
            light: material.alpha(themeColors$1$1.warning, 0.3),
            main: themeColors$1$1.warning,
            dark: material.darken(themeColors$1$1.warning, 0.2),
        },
        error: {
            lighter: material.alpha(themeColors$1$1.error, 0.1),
            light: material.alpha(themeColors$1$1.error, 0.3),
            main: themeColors$1$1.error,
            dark: material.darken(themeColors$1$1.error, 0.2),
        },
        info: {
            lighter: material.alpha(themeColors$1$1.info, 0.1),
            light: material.alpha(themeColors$1$1.info, 0.3),
            main: themeColors$1$1.info,
            dark: material.darken(themeColors$1$1.info, 0.2),
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors$1$1.layout.sidebar.background,
        textColor: colors$1$1.layout.sidebar.textColor,
        dividerBg: colors$1$1.layout.sidebar.dividerBg,
        menuItemColor: colors$1$1.layout.sidebar.menuItemColor,
        menuItemColorActive: colors$1$1.layout.sidebar.menuItemColorActive,
        menuItemBg: colors$1$1.layout.sidebar.menuItemBg,
        menuItemBgActive: colors$1$1.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors$1$1.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors$1$1.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors$1$1.layout.sidebar.menuItemHeadingColor,
        boxShadow: '1px 0 0 #272C48',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: themeColors$1$1.primaryAlt,
        boxShadow: '0px 1px 0px #272C48',
        textColor: colors$1$1.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors$1$1.alpha.black[100],
            white: colors$1$1.alpha.white[100],
        },
        mode: 'dark',
        primary: {
            light: colors$1$1.primary.light,
            main: colors$1$1.primary.main,
            dark: colors$1$1.primary.dark,
        },
        secondary: {
            light: colors$1$1.secondary.light,
            main: colors$1$1.secondary.main,
            dark: colors$1$1.secondary.dark,
        },
        error: {
            light: colors$1$1.error.light,
            main: colors$1$1.error.main,
            dark: colors$1$1.error.dark,
            contrastText: themeColors$1$1.trueWhite,
        },
        success: {
            light: colors$1$1.success.light,
            main: colors$1$1.success.main,
            dark: colors$1$1.success.dark,
            contrastText: themeColors$1$1.trueWhite,
        },
        info: {
            light: colors$1$1.info.light,
            main: colors$1$1.info.main,
            dark: colors$1$1.info.dark,
            contrastText: themeColors$1$1.trueWhite,
        },
        warning: {
            light: colors$1$1.warning.light,
            main: colors$1$1.warning.main,
            dark: colors$1$1.warning.dark,
            contrastText: themeColors$1$1.trueWhite,
        },
        text: {
            primary: colors$1$1.alpha.black[100],
            secondary: colors$1$1.alpha.black[70],
            disabled: colors$1$1.alpha.black[50],
        },
        background: {
            paper: colors$1$1.alpha.white[100],
            default: colors$1$1.layout.general.bodyBg,
        },
        action: {
            active: colors$1$1.alpha.black[100],
            hover: colors$1$1.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors$1$1.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors$1$1.alpha.black[50],
            disabledBackground: colors$1$1.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors$1$1.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: material.alpha(material.darken('#070C27', 0.5), 0.4),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: 'bold',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: material.darken(themeColors$1$1.primaryAlt, 0.5),
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                },
                summary: {
                    cursor: 'pointer',
                    color: colors$1$1.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors$1$1.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors$1$1.primary.lighter,
                    borderLeftColor: colors$1$1.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors$1$1.primary.lighter +
                        ', 0 0 8px' +
                        colors$1$1.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors$1$1.primary.main,
                    colorScheme: 'dark',
                },
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim$1$1(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem$1$1(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // TODO: Set Color
                    background: 'transparent',
                    border: `1px solid ${colors$1$1.info.light}`,
                    color: colors$1$1.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors$1$1.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$1$1.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$1$1.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors$1$1.alpha.black[5],
                    color: colors$1$1.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: 15,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors$1$1.alpha.black[5],
                    color: colors$1$1.alpha.black[100],
                    '&:hover': {
                        background: colors$1$1.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors$1$1.alpha.black[50],
                    '&:hover': {
                        color: colors$1$1.alpha.black[70],
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                colorDefault: {
                    background: colors$1$1.alpha.black[30],
                    color: colors$1$1.alpha.trueWhite[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors$1$1.alpha.black[10],
                    fontSize: 13,
                    color: colors$1$1.alpha.black[70],
                    fontWeight: 'bold',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors$1$1.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors$1$1.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors$1$1.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors$1$1.secondary.main,
                    color: colors$1$1.alpha.white[100],
                    border: '1px solid ' + colors$1$1.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors$1$1.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors$1$1.alpha.black[5],
                        color: colors$1$1.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors$1$1.primary.main,
                    background: colors$1$1.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: themeColors$1$1.trueWhite,
                        background: colors$1$1.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors$1$1.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors$1$1.alpha.white[100],
                    fontWeight: 'bold',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors$1$1.shadows.card,
                },
                elevation2: {
                    boxShadow: colors$1$1.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors$1$1.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors$1$1.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors$1$1.alpha.black[100],
                        color: colors$1$1.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: colors$1$1.alpha.black[10],
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: material.alpha(colors$1$1.primary.lighter, 0.2),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors$1$1.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors$1$1.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors$1$1.alpha.trueWhite[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors$1$1.alpha.trueWhite[70],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors$1$1.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$1$1.alpha.black[100],
                            background: material.alpha(colors$1$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors$1$1.alpha.black[100],
                        background: material.alpha(colors$1$1.primary.lighter, 0.2),
                    },
                    '&.Mui-selected:hover': {
                        background: material.alpha(colors$1$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors$1$1.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$1$1.alpha.black[100],
                            background: material.alpha(colors$1$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: material.alpha(colors$1$1.error.lighter, 0.2),
                    color: colors$1$1.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: material.alpha(colors$1$1.error.lighter, 0.3),
                    },
                },
                popupIndicator: {
                    color: colors$1$1.alpha.black[70],
                    '&:hover': {
                        background: material.alpha(colors$1$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors$1$1.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: material.alpha(colors$1$1.alpha.black[5], 0.05),
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors$1$1.alpha.black[10],
                    fontSize: 14,
                },
                head: {
                    textTransform: 'uppercase',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: colors$1$1.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14,
                },
                standardInfo: {
                    color: colors$1$1.info.main,
                },
                action: {
                    color: colors$1$1.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors$1$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$1$1.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors$1$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$1$1.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors$1$1.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: material.alpha(colors$1$1.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: 13,
                },
                arrow: {
                    color: material.alpha(colors$1$1.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors$1$1.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors$1$1.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors$1$1.alpha.black[10],
                },
                track: {
                    backgroundColor: colors$1$1.alpha.black[5],
                    border: '1px solid ' + colors$1$1.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors$1$1.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors$1$1.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors$1$1.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors$1$1.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors$1$1.success.main,
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4,
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$1$1(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$1$1(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(14)}`,
            },
            color: colors$1$1.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(13)}`,
            },
            color: colors$1$1.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim$1$1(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(12)}`,
            },
            color: colors$1$1.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim$1$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim$1$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1$1(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem$3 = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim$3 = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors$3 = {
    primary: '#1A75FF',
    secondary: '#6E759F',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57',
};
const colors$3 = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(28, 52, 140, 0.25), 0px 3px 12px 2px rgba(28, 52, 140, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        cardSm: '0px 2px 3px rgba(159, 162, 191, .18), 0px 1px 1px rgba(159, 162, 191, 0.32)',
        cardLg: '0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)',
    },
    layout: {
        general: {
            bodyBg: '#F8F8F8',
        },
        sidebar: {
            background: themeColors$3.white,
            textColor: themeColors$3.black,
            dividerBg: '#f2f5f9',
            menuItemColor: '#242E6F',
            menuItemColorActive: themeColors$3.primary,
            menuItemBg: themeColors$3.white,
            menuItemBgActive: '#f2f5f9',
            menuItemIconColor: material.lighten(themeColors$3.secondary, 0.3),
            menuItemIconColorActive: themeColors$3.primary,
            menuItemHeadingColor: material.darken(themeColors$3.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: material.alpha(themeColors$3.white, 0.02),
            10: material.alpha(themeColors$3.white, 0.1),
            30: material.alpha(themeColors$3.white, 0.3),
            50: material.alpha(themeColors$3.white, 0.5),
            70: material.alpha(themeColors$3.white, 0.7),
            100: themeColors$3.white,
        },
        trueWhite: {
            5: material.alpha(themeColors$3.white, 0.02),
            10: material.alpha(themeColors$3.white, 0.1),
            30: material.alpha(themeColors$3.white, 0.3),
            50: material.alpha(themeColors$3.white, 0.5),
            70: material.alpha(themeColors$3.white, 0.7),
            100: themeColors$3.white,
        },
        black: {
            5: material.alpha(themeColors$3.black, 0.02),
            10: material.alpha(themeColors$3.black, 0.1),
            30: material.alpha(themeColors$3.black, 0.3),
            50: material.alpha(themeColors$3.black, 0.5),
            70: material.alpha(themeColors$3.black, 0.7),
            100: themeColors$3.black,
        },
    },
    secondary: {
        lighter: material.lighten(themeColors$3.secondary, 0.85),
        light: material.lighten(themeColors$3.secondary, 0.25),
        main: themeColors$3.secondary,
        dark: material.darken(themeColors$3.secondary, 0.2),
    },
    primary: {
        lighter: material.lighten(themeColors$3.primary, 0.85),
        light: material.lighten(themeColors$3.primary, 0.3),
        main: themeColors$3.primary,
        dark: material.darken(themeColors$3.primary, 0.2),
    },
    success: {
        lighter: material.lighten(themeColors$3.success, 0.85),
        light: material.lighten(themeColors$3.success, 0.3),
        main: themeColors$3.success,
        dark: material.darken(themeColors$3.success, 0.2),
    },
    warning: {
        lighter: material.lighten(themeColors$3.warning, 0.85),
        light: material.lighten(themeColors$3.warning, 0.3),
        main: themeColors$3.warning,
        dark: material.darken(themeColors$3.warning, 0.2),
    },
    error: {
        lighter: material.lighten(themeColors$3.error, 0.85),
        light: material.lighten(themeColors$3.error, 0.3),
        main: themeColors$3.error,
        dark: material.darken(themeColors$3.error, 0.2),
    },
    info: {
        lighter: material.lighten(themeColors$3.info, 0.85),
        light: material.lighten(themeColors$3.info, 0.3),
        main: themeColors$3.info,
        dark: material.darken(themeColors$3.info, 0.2),
    },
};
const SaaSusTheme$1 = material.createTheme({
    colors: {
        gradients: {
            blue1: colors$3.gradients.blue1,
            blue2: colors$3.gradients.blue2,
            blue3: colors$3.gradients.blue3,
            blue4: colors$3.gradients.blue4,
            blue5: colors$3.gradients.blue5,
            orange1: colors$3.gradients.orange1,
            orange2: colors$3.gradients.orange2,
            orange3: colors$3.gradients.orange3,
            purple1: colors$3.gradients.purple1,
            purple3: colors$3.gradients.purple3,
            pink1: colors$3.gradients.pink1,
            pink2: colors$3.gradients.pink2,
            green1: colors$3.gradients.green1,
            green2: colors$3.gradients.green2,
            black1: colors$3.gradients.black1,
            black2: colors$3.gradients.black2,
        },
        shadows: {
            success: colors$3.shadows.success,
            error: colors$3.shadows.error,
            primary: colors$3.shadows.primary,
            info: colors$3.shadows.info,
            warning: colors$3.shadows.warning,
        },
        alpha: {
            white: {
                5: material.alpha(themeColors$3.white, 0.02),
                10: material.alpha(themeColors$3.white, 0.1),
                30: material.alpha(themeColors$3.white, 0.3),
                50: material.alpha(themeColors$3.white, 0.5),
                70: material.alpha(themeColors$3.white, 0.7),
                100: themeColors$3.white,
            },
            trueWhite: {
                5: material.alpha(themeColors$3.white, 0.02),
                10: material.alpha(themeColors$3.white, 0.1),
                30: material.alpha(themeColors$3.white, 0.3),
                50: material.alpha(themeColors$3.white, 0.5),
                70: material.alpha(themeColors$3.white, 0.7),
                100: themeColors$3.white,
            },
            black: {
                5: material.alpha(themeColors$3.black, 0.02),
                10: material.alpha(themeColors$3.black, 0.1),
                30: material.alpha(themeColors$3.black, 0.3),
                50: material.alpha(themeColors$3.black, 0.5),
                70: material.alpha(themeColors$3.black, 0.7),
                100: themeColors$3.black,
            },
        },
        secondary: {
            lighter: material.alpha(themeColors$3.secondary, 0.1),
            light: material.lighten(themeColors$3.secondary, 0.3),
            main: themeColors$3.secondary,
            dark: material.darken(themeColors$3.secondary, 0.2),
        },
        primary: {
            lighter: material.alpha(themeColors$3.primary, 0.1),
            light: material.lighten(themeColors$3.primary, 0.3),
            main: themeColors$3.primary,
            dark: material.darken(themeColors$3.primary, 0.2),
        },
        success: {
            lighter: material.alpha(themeColors$3.success, 0.1),
            light: material.lighten(themeColors$3.success, 0.3),
            main: themeColors$3.success,
            dark: material.darken(themeColors$3.success, 0.2),
        },
        warning: {
            lighter: material.alpha(themeColors$3.warning, 0.1),
            light: material.lighten(themeColors$3.warning, 0.3),
            main: themeColors$3.warning,
            dark: material.darken(themeColors$3.warning, 0.2),
        },
        error: {
            lighter: material.alpha(themeColors$3.error, 0.1),
            light: material.lighten(themeColors$3.error, 0.3),
            main: themeColors$3.error,
            dark: material.darken(themeColors$3.error, 0.2),
        },
        info: {
            lighter: material.alpha(themeColors$3.info, 0.1),
            light: material.lighten(themeColors$3.info, 0.3),
            main: themeColors$3.info,
            dark: material.darken(themeColors$3.info, 0.2),
        },
        turquoise: {
            main: '#00838f',
            dark: '#005662',
            light: '#76C4CB',
        },
        coral: {
            main: '#FF8052',
            dark: '#BF603E',
            light: '#FBC2AD',
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors$3.layout.sidebar.background,
        textColor: colors$3.layout.sidebar.textColor,
        dividerBg: colors$3.layout.sidebar.dividerBg,
        menuItemColor: colors$3.layout.sidebar.menuItemColor,
        menuItemColorActive: colors$3.layout.sidebar.menuItemColorActive,
        menuItemBg: colors$3.layout.sidebar.menuItemBg,
        menuItemBgActive: colors$3.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors$3.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors$3.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors$3.layout.sidebar.menuItemHeadingColor,
        boxShadow: '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: colors$3.alpha.white[100],
        boxShadow: colors$3.shadows.cardSm,
        textColor: colors$3.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors$3.alpha.black[100],
            white: colors$3.alpha.white[100],
        },
        mode: 'light',
        primary: {
            lighter: colors$3.primary.lighter,
            light: colors$3.primary.light,
            main: colors$3.primary.main,
            dark: colors$3.primary.dark,
        },
        secondary: {
            lighter: colors$3.secondary.lighter,
            light: colors$3.secondary.light,
            main: colors$3.secondary.main,
            dark: colors$3.secondary.dark,
        },
        error: {
            lighter: colors$3.error.lighter,
            light: colors$3.error.light,
            main: colors$3.error.main,
            dark: colors$3.error.dark,
            contrastText: colors$3.alpha.white[100],
        },
        success: {
            lighter: colors$3.success.lighter,
            light: colors$3.success.light,
            main: colors$3.success.main,
            dark: colors$3.success.dark,
            contrastText: colors$3.alpha.white[100],
        },
        info: {
            lighter: colors$3.info.lighter,
            light: colors$3.info.light,
            main: colors$3.info.main,
            dark: colors$3.info.dark,
            contrastText: colors$3.alpha.white[100],
        },
        warning: {
            lighter: colors$3.warning.lighter,
            light: colors$3.warning.light,
            main: colors$3.warning.main,
            dark: colors$3.warning.dark,
            contrastText: colors$3.alpha.white[100],
        },
        text: {
            primary: colors$3.alpha.black[100],
            secondary: colors$3.alpha.black[70],
            disabled: colors$3.alpha.black[50],
        },
        background: {
            paper: colors$3.alpha.white[100],
            default: colors$3.layout.general.bodyBg,
        },
        action: {
            active: colors$3.alpha.black[100],
            hover: colors$3.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors$3.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors$3.alpha.black[50],
            disabledBackground: colors$3.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors$3.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
        tonalOffset: 0.5,
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: material.alpha(material.darken(themeColors$3.primaryAlt, 0.4), 0.2),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    // FIXME! ヘルパーテキストポジション
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: '700',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    // TODO: Baseフォントサイズ
                    // fontSize: 16 // FIXME! フォントサイズ
                },
                summary: {
                    cursor: 'pointer',
                    color: colors$3.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors$3.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors$3.primary.lighter,
                    borderLeftColor: colors$3.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors$3.primary.lighter +
                        ', 0 0 8px' +
                        colors$3.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors$3.primary.main,
                },
                // FIXME! Codeタグはグローバルに
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim$3(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem$3(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // background: colors.info.lighter,
                    background: 'transparent',
                    border: `1px solid ${colors$3.info.dark}`,
                    color: colors$3.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors$3.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        // TODO: フォームUIカスタム
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$3.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$3.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors$3.alpha.black[5],
                    color: colors$3.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: '0.9375rem',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors$3.alpha.black[5],
                    color: colors$3.alpha.black[100],
                    '&:hover': {
                        background: colors$3.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors$3.error.light,
                    '&:hover': {
                        color: colors$3.error.main,
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    fontWeight: '700',
                },
                colorDefault: {
                    background: colors$3.alpha.black[30],
                    color: colors$3.alpha.white[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors$3.alpha.black[10],
                    fontSize: '0.8125rem',
                    color: colors$3.alpha.black[70],
                    fontWeight: '700',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors$3.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors$3.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors$3.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: '700',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    minWidth: 160,
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    '&.MuiButton-contained.MuiButton-containedPrimary': {
                        '&:not(.Mui-disabled)': {
                            boxShadow: '0 2px 4px rgba(180, 180, 180, 0.5)',
                        },
                    },
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors$3.secondary.main,
                    color: colors$3.alpha.white[100],
                    border: '1px solid ' + colors$3.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors$3.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors$3.alpha.black[5],
                        color: colors$3.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors$3.primary.main,
                    background: colors$3.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: colors$3.alpha.white[100],
                        background: colors$3.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors$3.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors$3.alpha.white[100],
                    fontWeight: '700',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors$3.shadows.card,
                },
                elevation2: {
                    boxShadow: colors$3.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors$3.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors$3.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors$3.alpha.black[100],
                        color: colors$3.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: material.alpha(colors$3.primary.lighter, 0.4),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: material.alpha(colors$3.primary.lighter, 0.4),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors$3.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors$3.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors$3.alpha.white[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors$3.alpha.black[100],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: '0.875rem',
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors$3.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$3.alpha.black[100],
                            background: material.alpha(colors$3.primary.lighter, 0.4),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors$3.alpha.black[100],
                        background: material.alpha(colors$3.primary.lighter, 0.4),
                    },
                    '&.Mui-selected:hover': {
                        background: material.alpha(colors$3.primary.lighter, 0.4),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors$3.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$3.alpha.black[100],
                            background: material.lighten(colors$3.primary.lighter, 0.5),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: colors$3.error.lighter,
                    color: colors$3.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: colors$3.error.lighter,
                        color: colors$3.error.dark,
                    },
                },
                popupIndicator: {
                    color: colors$3.alpha.black[50],
                    '&:hover': {
                        background: colors$3.primary.lighter,
                        color: colors$3.primary.main,
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors$3.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: colors$3.alpha.black[5],
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                // FIXME! TableCell
                root: {
                    borderBottomColor: colors$3.alpha.black[10],
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                },
                head: {
                    // textTransform: 'uppercase',
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    color: colors$3.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: '0.875rem',
                },
                standardInfo: {
                    color: colors$3.info.main,
                },
                action: {
                    color: colors$3.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors$3.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$3.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors$3.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$3.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors$3.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: material.alpha(colors$3.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: '0.8125rem',
                },
                arrow: {
                    color: material.alpha(colors$3.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors$3.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors$3.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors$3.alpha.black[10],
                },
                track: {
                    backgroundColor: colors$3.alpha.black[5],
                    border: '1px solid ' + colors$3.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors$3.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors$3.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors$3.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors$3.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors$3.success.main,
                    },
                },
            },
        },
        // TODO: 構造の周知
        // INFO: headingの使い方
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: '0.25rem',
                },
                paragraph: {
                    // fontSize: 17,
                    fontSize: '1rem',
                    lineHeight: 1.5,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$3(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$3(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(14)}`,
            },
            color: colors$3.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$3(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(13)}`,
            },
            color: colors$3.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim$3(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(12)}`,
            },
            color: colors$3.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim$3(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim$3(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$3(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

function themeCreator$1(theme) {
    return themeMap$1[theme];
}
const themeMap$1 = {
    SaaSusTheme: SaaSusTheme$1,
    SaaSusDarkTheme: SaaSusDarkTheme$1,
    SaaSusDarkThemeHighContrast: SaaSusDarkThemeHighContrast$1,
};

const ThemeContext$1 = react.createContext({
    theme: null,
    setThemeName: null,
});
const ThemeProviderWrapper$1 = ({ lang = 'ja', children, }) => {
    const [themeName, _setThemeName] = react.useState('SaaSusTheme');
    react.useEffect(() => {
        const curThemeName = 'SaaSusTheme';
        _setThemeName(curThemeName);
    }, []);
    react.useEffect(() => {
        // change language
        i18n__default["default"].changeLanguage(lang);
    }, [lang]);
    const theme = themeCreator$1(themeName);
    const setThemeName = (themeName) => {
        window.localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    };
    return (jsxRuntime.jsx(styles$1.StylesProvider, { injectFirst: true, children: jsxRuntime.jsx(ThemeContext$1.Provider, { value: { theme, setThemeName }, children: jsxRuntime.jsx(styles.ThemeProvider, { theme: theme, children: children }) }) }));
};

dist.AccordionWrap = AccordionWrap$1;
dist.BoxContent = BoxContent$1;
dist.BoxWrap = BoxWrap$1;
dist.ButtonWrap = ButtonWrap$1;
dist.CustomAlert = CustomAlert$1;
dist.CustomButton = CustomButton$1;
dist.CustomContainer = CustomContainer$1;
dist.CustomLabel = CustomLabel$1;
dist.CustomTable = CustomTable;
var CustomTableCell_1 = dist.CustomTableCell = CustomTableCell;
dist.CustomTableCellAction = CustomTableCellAction;
dist.CustomTableCellActionBody = CustomTableCellActionBody;
dist.CustomTableContainer = CustomTableContainer;
dist.CustomTableHeader = CustomTableHeader;
var CustomTableRow_1 = dist.CustomTableRow = CustomTableRow;
dist.CustomTooltip = CustomTooltip$1;
dist.DeleteDialog = DeleteDialog$1;
dist.MainTitleSet = MainTitleSet$1;
dist.RadioButton = RadioButton$1;
dist.SaaSusLogo = SaaSusLogo$1;
dist.SaaSusThemeProvider = ThemeProviderWrapper$1;
dist.TableHeightSwitch = TableHeightSwitch$1;
dist.Text = Text$1;
dist.ThemeContext = ThemeContext$1;
dist.TitleSet = TitleSet$1;
dist.themeCreator = themeCreator$1;

const CustomTableFilterResult = ({ text }) => {
    return (require$$0.jsx(require$$1.TableBody, { children: require$$0.jsx(CustomTableRow_1, { children: require$$0.jsx(CustomTableCell_1, { colSpan: 100, children: require$$0.jsx(require$$1.Box, { sx: {
                        p: 4,
                        whiteSpace: 'nowrap',
                        textAlign: 'center',
                        fontSize: 24,
                    }, children: require$$0.jsx("b", { children: text || '検索結果はありませんでした' }) }) }) }) }));
};

const CustomTableFilter = ({ onChange, placeholder, value }) => {
    return (require$$0.jsx(require$$1.Box, { children: require$$0.jsx(require$$1.TextField, { sx: {
                mx: 0,
                my: 2,
            }, InputProps: {
                startAdornment: (require$$0.jsx(require$$1.InputAdornment, { position: "start", children: require$$0.jsx(SearchTwoToneIcon__default["default"], {}) })),
            }, onChange: () => onChange, placeholder: placeholder, value: value, size: "small", fullWidth: true, margin: "normal", variant: "outlined" }) }));
};

const TableHeightSwitch = ({ checked, onChange, sxStyle, label, ...props }) => {
    return (require$$0.jsx(require$$1.FormControlLabel, { control: require$$0.jsx(require$$1.Switch, { checked: checked, onChange: onChange }), label: label, labelPlacement: "end", sx: sxStyle, style: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'end',
            margin: '0 8px -8px 0',
        }, ...props }));
};

//  テストコメント2
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    ja: {
        saasusTheme: {
            help: 'ヘルプ',
        },
    },
    en: {
        saasusTheme: {
            help: 'Help',
        },
    },
};
const i18nNamespace = 'saasusTheme';
i18n__default$1["default"]
    .use(require$$7.initReactI18next) // passes i18n down to react-i18next
    .init({
    defaultNS: i18nNamespace,
    fallbackNS: i18nNamespace,
    ns: [i18nNamespace],
    resources,
    lng: 'ja',
    fallbackLng: 'ja',
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

const CustomTooltip = ({ TooltipTitleIconComponent, TooltipComponent, }) => {
    const { t } = require$$7.useTranslation(i18nNamespace, { i18n: i18n__default$1["default"] });
    // TooltipComponentが定義されていない場合、
    // スクリーンリーダーにButtonと読まれてしまうのでaria-labelを設定
    const toolTipAriaLabel = TooltipComponent ? undefined : t('help');
    return (require$$0.jsx(require$$0.Fragment, { children: TooltipTitleIconComponent && (require$$0.jsx(require$$1.Tooltip, { title: require$$0.jsx(require$$1.Box, { sx: { textAlign: 'justify' }, children: TooltipTitleIconComponent }), arrow: true, placement: "top-start", children: require$$0.jsx(require$$1.Button, { sx: {
                    margin: '0 0 .2em 0',
                    '&.MuiButton-root': {
                        margin: '0 2px 4px',
                        minWidth: 'fit-content',
                        padding: '2px 4px',
                        borderRadius: '6px',
                    },
                }, "aria-label": toolTipAriaLabel, children: TooltipComponent ? (TooltipComponent) : (require$$0.jsx(require$$5__default["default"], { fontSize: "small" })) }) })) }));
};

const AccordionStyle = require$$1.styled((props) => (require$$0.jsx(require$$1.Accordion, { disableGutters: true, elevation: 0, square: true, ...props })))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    transition: '0ms',
    '&:before': {
        display: 'none',
    },
    // 重複border非表示
    '.MuiAccordionDetails-root': { border: 'none !important' },
}));
// Stylings アコーディオン見出し、トリガー部分
const AccordionSummaryStyle = require$$1.styled((props) => (require$$0.jsx(require$$1.AccordionSummary, { ...props })))(({ theme }) => ({
    padding: '8px 16px',
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
const AccordionDetailsStyle = require$$1.styled(require$$1.AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3, 3, 4),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '0 0 10px 10px',
}));
const AccordionWrap = ({ 
// 見出し
accordionTitle, variant, component, accordionSubTitle, variantSubTitle, 
// アコーディオン開閉ステータス
defaultExpanded, expanded, onChange, 
// 一意の値が必要であれば、id関連をこの値に兼用させる
id, 
// Style
AccordionSx, AccordionSummarySx, DetailsSx, BorderNone, spacing, 
// コンテンツ
children, disabled, AdditionalProps, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, }) => {
    return (require$$0.jsx(require$$1.Paper, { sx: { p: 0, mb: spacing ? spacing : 4 }, children: require$$0.jsxs(AccordionStyle, { expanded: expanded, onChange: onChange, sx: AccordionSx, defaultExpanded: defaultExpanded, children: [require$$0.jsx(AccordionSummaryStyle, { expandIcon: require$$0.jsx(require$$4__default["default"], {}), "aria-controls": id, id: id, disabled: disabled, sx: AccordionSummarySx, style: {
                        border: BorderNone && 'none',
                        background: BorderNone && 'none',
                    }, children: require$$0.jsxs(require$$1.Box, { sx: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            width: '100%',
                            pr: 5,
                        }, children: [require$$0.jsxs(require$$1.Box, { children: [require$$0.jsxs(require$$1.Box, { sx: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'end',
                                        }, children: [require$$0.jsx(require$$1.Typography, { variant: variant ? variant : 'h3', component: component ? component : 'div', children: accordionTitle }), require$$0.jsx(CustomTooltip, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent })] }), require$$0.jsx(require$$1.Box, { children: require$$0.jsx(require$$1.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', children: accordionSubTitle }) })] }), require$$0.jsx(require$$1.Box, { children: AdditionalProps })] }) }), require$$0.jsx(AccordionDetailsStyle, { sx: DetailsSx, style: {
                        marginTop: BorderNone ? '-16px' : '',
                    }, children: children })] }) }));
};

const AlertInner = require$$1.styled(require$$1.Alert)(({ theme }) => `
    padding: ${theme.spacing(1, 4)};
    box-shadow: 0 2px 4px ${theme.colors.alpha.black[10]};

    .MuiAlert-message {
      padding: 7px 0;
    }

    .MuiTypography-root.MuiAlertTitle-root {
      margin: 0;
      font-size: 1em;
      line-height: 1.75;
    }

    .MuiAlert-icon {
      margin-right: ${theme.spacing(1)};
    }

    &.MuiAlert-standardError, &.MuiAlert-outlinedError {
      color: ${theme.colors.error.dark};
    }
    &.MuiAlert-standardWarning, &.MuiAlert-outlinedWarning {
      color: ${theme.colors.warning.dark};
    }
    &.MuiAlert-standardInfo, &.MuiAlert-outlinedInfo {
      color: ${theme.colors.info.dark};
    }
    &.MuiAlert-standardSuccess, &.MuiAlert-outlinedSuccess {
      color: ${theme.colors.success.dark};
    }

  `);
const CustomAlert = ({ severity, variant, alertHeadingTitle, children, square, action, sx, }) => {
    return (require$$0.jsx(require$$1.Stack, { spacing: 4, children: require$$0.jsxs(AlertInner, { severity: severity || 'error', variant: variant || 'standard', style: {
                borderRadius: square ? 0 : '',
            }, sx: sx, action: action, children: [require$$0.jsx(require$$1.AlertTitle, { children: require$$0.jsx("strong", { children: alertHeadingTitle }) }), children] }) }));
};

// ----- extend Container -----
const StyledContainer = require$$1.styled(require$$1.Container)(({ theme }) => `
    padding: ${theme.spacing(0, 0, 0, 0)};
  `);
const CustomContainer = ({ children, maxWidth, fixed, sx, addGutter, mb, style, }) => {
    return (
    // margin-bottom or デフォルトmargin-bottom
    require$$0.jsx(require$$1.Box, { sx: { mb: mb || 4 }, children: require$$0.jsx(StyledContainer, { maxWidth: maxWidth, sx: sx, style: style, 
            // 段階的な横幅指定
            fixed: fixed, 
            // 両横の溝=paddingの有無 defaultは無しに指定
            disableGutters: addGutter ? false : true, children: children }) }));
};

// 中見出しとサブタイトル
const TitleSet = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, sxHeader, sxSubTitle, sx, gutterBottom, noMargin, mbSmall, mbLarge, style, 
// ヘルプアイコンとツールチップ
TooltipTitleIconComponent, TooltipComponent, 
// 下線
divider, dividerSx, }) => {
    const theme = require$$1.useTheme();
    return (require$$0.jsxs(require$$1.Box, { sx: {
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
        }, children: [require$$0.jsxs(require$$1.Grid, { container: true, justifyContent: "space-between", alignItems: "center", sx: { mb: noMargin ? 0 : 1 }, columnSpacing: 2, children: [require$$0.jsxs(require$$1.Grid, { item: true, sx: style, flex: 1, children: [require$$0.jsxs(require$$1.Typography, { variant: variant, component: component ? component : 'div', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.5 }, children: [headingText, require$$0.jsx(CustomTooltip, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent })] }), require$$0.jsx(require$$1.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle2', sx: sxSubTitle, style: { lineHeight: 1.4, textAlign: 'justify' }, children: subtitleText })] }), AdditionalProps && require$$0.jsx(require$$1.Grid, { item: true, children: AdditionalProps })] }), divider && require$$0.jsx(require$$1.Divider, { sx: dividerSx })] }));
};

const BoxOuter = require$$1.styled(require$$1.Box)(({ theme }) => `
  margin-bottom: ${theme.spacing(4)};

  &:last-child {
    margin-bottom: 0;
  }
  `);
const BoxInner$1 = require$$1.styled(require$$1.Box)(({ theme }) => `
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
TooltipTitleIconComponent, TooltipComponent, 
// 右端オプション
AdditionalProps, 
// 全体sx
sx, }) => {
    // const theme = useTheme()
    return (require$$0.jsx(BoxOuter, { sx: sx, children: require$$0.jsxs(BoxInner$1, { sx: {
                ...boxInnerSx,
            }, children: [addTitle ? (require$$0.jsx(TitleSet
                // 見出しフォントサイズ htmlElement設定 サブタイトル
                , { 
                    // 見出しフォントサイズ htmlElement設定 サブタイトル
                    headingText: headingText, variant: variant ? variant : 'h4', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                    // 見出し直下の余白具合
                    noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                    // カスタムCSSがあれば設置
                    sx: titleSx, 
                    // ヘルプアイコンとツールチップ
                    TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent, AdditionalProps: AdditionalProps, divider: divider, dividerSx: dividerSx })) : (''), children] }) }));
};

const BoxInner = require$$1.styled(require$$1.Paper)(({ theme }) => ({
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
TooltipTitleIconComponent, TooltipComponent, 
// 右端オプション
AdditionalProps, 
// 全体sx
sx, }) => {
    const theme = require$$1.useTheme();
    return (require$$0.jsx(require$$1.Box, { sx: sx, children: require$$0.jsxs(BoxInner, { elevation: 1, sx: {
                padding: divider ? theme.spacing(1.5, 3, 3) : theme.spacing(3),
                ...boxInnerSx,
            }, children: [addTitle && (require$$0.jsx(TitleSet
                // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                , { 
                    // 見出しフォントサイズ htmlElement設定 デフォルト値 サブタイトル設定
                    headingText: headingText, variant: variant ? variant : 'h3', component: component ? component : 'div', subtitleText: subtitleText, variantSubTitle: variantSubTitle ? variantSubTitle : 'subtitle2', 
                    // 見出し直下の余白具合
                    noMargin: noMargin, mbSmall: mbSmall, mbLarge: mbLarge, 
                    // カスタムCSSがあれば設置
                    sx: titleSx, 
                    // ヘルプアイコンとツールチップ
                    TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent, AdditionalProps: AdditionalProps, 
                    // 下線
                    divider: divider, 
                    // 下線がある時は見出し内の余白をタイトにする。横幅を合わせる
                    dividerSx: { my: 1.5, mx: -3 } })), children] }) }));
};

// {`theme.breakpoints.up('sm') matches: ${matches}`}
const StackButtonWrap = require$$1.styled(require$$1.Stack)(() => ({
    display: 'grid',
    gap: 8,
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))',
    // テーマブレイクポイントのsm
    '@media (min-width: 600px)': {
        gap: 24,
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), auto))',
    },
}));
const ButtonWrap = ({ mt, mb, sx, children, justifyContent }) => {
    return (require$$0.jsx(StackButtonWrap, { justifyContent: justifyContent ? justifyContent : 'flex-start', sx: {
            mt: mt || 4,
            mb: mb || 2,
            ...sx,
        }, children: children }));
};

const CustomButton = ({ color, variant, size, type, startIcon, endIcon, disabled, onClick, sx, children, }) => {
    return (require$$0.jsx(require$$1.Button, { color: color, size: size, variant: variant ? variant : 'contained', type: type ? type : 'submit', onClick: onClick, startIcon: startIcon, endIcon: endIcon, disabled: disabled, sx: sx, children: children }));
};

const DialogWrapper = require$$1.styled(require$$1.Dialog)(() => `
      .MuiDialog-paper {
        overflow: visible;
      }
`);
const AvatarError = require$$1.styled(require$$1.Avatar)(({ theme }) => `
    background-color: ${theme.colors.error.lighter};
    color: ${theme.colors.error.main};
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};

    .MuiSvgIcon-root {
      font-size: ${theme.typography.pxToRem(45)};
    }
  `);
const ButtonError = require$$1.styled(require$$1.Button)(({ theme }) => `
    background: ${theme.colors.error.main};
    color: ${theme.palette.error.contrastText};

    &:hover {
      background: ${theme.colors.error.dark};
    }
  `);
const DeleteDialog = ({ open, DeleteItem, handleDeleteCompleted, closeDeleteDialog, }) => {
    return (require$$0.jsx(DialogWrapper, { open: open, maxWidth: "sm", fullWidth: true, keepMounted: true, onClose: closeDeleteDialog, children: require$$0.jsxs(require$$1.Box, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", p: 5, children: [require$$0.jsx(AvatarError, { children: require$$0.jsx(require$$8__default["default"], {}) }), require$$0.jsxs(require$$1.Typography, { align: "center", sx: {
                        pt: 4,
                    }, variant: "h3", children: [DeleteItem, require$$0.jsx("br", {}), "\u3092\u524A\u9664\u3057\u307E\u3059"] }), require$$0.jsx(require$$1.Typography, { align: "center", sx: {
                        py: 4,
                    }, children: "\u4E00\u5EA6\u524A\u9664\u3059\u308B\u3068\u5143\u306B\u623B\u305B\u307E\u305B\u3093" }), require$$0.jsxs(require$$1.Box, { children: [require$$0.jsx(require$$1.Button, { variant: "text", size: "large", sx: {
                                mx: 1,
                            }, onClick: closeDeleteDialog, "data-testid": "cancel", children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), require$$0.jsx(ButtonError, { onClick: handleDeleteCompleted, size: "large", sx: {
                                mx: 1,
                                px: 3,
                            }, variant: "contained", "data-testid": "deleteButton", children: "\u524A\u9664" })] })] }) }));
};

const Label = require$$1.styled(require$$1.InputLabel)(() => ({
    fontSize: '14px',
    position: 'initial',
    textAlign: 'left',
    transform: 'none',
    minHeight: '1.85em',
    '&.MuiFormLabel-root.MuiInputLabel-root': {
        fontSize: 14,
    },
}));
const CustomLabel = ({ id, TooltipTitleIconComponent, TooltipComponent, children, OptionalChip, chipLabel, color, size, sx, variant, mt, }) => {
    return (require$$0.jsxs(Label, { htmlFor: id, sx: { mt: mt || 3 }, children: [children, require$$0.jsx(CustomTooltip, { TooltipTitleIconComponent: TooltipTitleIconComponent, TooltipComponent: TooltipComponent }), OptionalChip && (require$$0.jsx(require$$1.Chip, { size: size ? size : 'small', color: color, variant: variant, label: chipLabel ? chipLabel : '任意', sx: sx, style: {
                    borderRadius: 4,
                    margin: `0px 4px 4px`,
                    padding: `1px 8px 0`,
                } }))] }));
};

// ヘルパーテキストまで含めたラッピング
const WrapButtonlUI = require$$1.styled(require$$1.Stack)(() => `
  flexDirectiom: column;
  & + .MuiFormHelperText-root.MuiFormHelperText-contained.MuiFormHelperText-root {
    margin: -4px 12px 4px 12px;
  }
  `);
const MinWidth = 200;
const MinHeight = 70;
const FontWeight = 600;
const ClickableElement = `
  position: absolute;
  content: '';
  display: block;
  overflow: hidden;
  min-width: ${MinWidth};
`;
const ButtonlUI = require$$1.styled(require$$1.Button)(({ theme }) => `
  margin: ${theme.spacing(1)};

  // Button Style
  &.MuiButtonBase-root {

    &.MuiButton-root {
      min-width: ${MinWidth}px;
      min-height: ${MinHeight}px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 44px;
      padding-bottom: 0px;

      &.Mui-disabled {
        background-color: ${theme.colors.secondary.lighter};
        border: none;
      }

      .MuiButtonBase-root.MuiRadio-root {
        top: 0;
        bottom: 0;
        width: 100%;
        padding-left: 12px;

        // Checked Style
        &.Mui-checked {
          min-width: ${MinWidth}px;
          background-color: ${theme.colors.primary.lighter};
          border: 2px solid ${theme.colors.primary.main};
          height: 100%;
          border-radius: 9px;
          overflow: hidden;

          &:after{
            ${ClickableElement}
            left: -24px;
          }
        }
      }
    }
  }

  // Label Style
  span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.MuiTypography-root {
    font-weight: ${FontWeight};
    color: ${theme.colors.secondary.dark};
    padding-left: 4px;

    &.MuiTypography-body1.MuiTypography-root {
      margin: 0px 0px -24px 0px;
    }
  }

  .MuiTypography-root.MuiTypography-body1.MuiTypography-root+.MuiTypography-root.MuiTypography-body1.MuiTypography-root {
    color: ${theme.colors.secondary.dark};
    font-size: 14px;
  }

  .MuiFormControlLabel-root {
    margin-left: -4px;

    &.MuiFormControlLabel-label {
      fontWeight: 600,
      min-width: ${MinWidth}px;
      font-weight: ${FontWeight};
      text-align: left;
      z-index: 1;
    }

    .MuiButtonBase-root.MuiRadio-root {
      left: 0;
      position: absolute;
      width: 100%;
      justify-content: flex-start;

      &:hover {
        min-width: ${MinWidth}px;
        height: 100%;
        border-radius: 0;
        overflow: hidden;
      }
    }
  }

  .MuiTouchRipple-root.MuiTouchRipple-root {
    min-width: ${MinWidth}px;
    min-height: ${MinHeight}px;
    background-color: ${theme.colors.primary.lighter};
    min-width: ${MinWidth};
    min-height: 100px;
    padding: 0;
    margin-top: -12px;
    margin-left: -4px;
    border-radius: 0;
    overflow: hidden;
    opacity: 0.5;
  }
  `);
const FormControlUI = require$$1.styled(require$$1.FormControlLabel)(() => `
    min-width: ${MinWidth}px;
    `);
const OptionComponent = require$$1.styled(require$$1.Typography)(({ theme }) => `
      color: ${theme.colors.primary.main};
      font-weight: ${FontWeight};
      position: absolute;
      right: 10px;
      top: 8px;
      font-size: 12px !important;
      text-align: right;
    `);
const RadioButton = ({ label, value, disabled, AdditionalProps, helperText, onClick, checked, }) => {
    return (require$$0.jsx(WrapButtonlUI, { children: require$$0.jsxs(ButtonlUI, { variant: "outlined", disabled: disabled, onClick: onClick, children: [require$$0.jsx(FormControlUI, { control: require$$0.jsx(require$$1.Radio, {}), label: label, value: value, checked: checked }), require$$0.jsx(require$$1.Typography, { children: require$$0.jsx(OptionComponent, { children: AdditionalProps }) }), require$$0.jsx(require$$1.Typography, { children: helperText })] }) }));
};

// 大見出しとサブタイトル
const MainTitleSet = ({ variant, component, headingText, variantSubTitle, subtitleText, AdditionalProps, 
// TitleWrapNone,
sxHeader, sxSubTitle, gutterBottom, mb, }) => {
    const theme = require$$1.useTheme();
    return (require$$0.jsx(require$$1.Box, { sx: [
            {
                p: theme.spacing(3, 4),
                mb: mb || theme.spacing(2),
            },
        ], children: require$$0.jsxs(require$$1.Grid, { container: true, justifyContent: "space-between", alignItems: "center", columnSpacing: 2, children: [require$$0.jsxs(require$$1.Grid, { item: true, flex: 1, children: [require$$0.jsx(require$$1.Typography, { variant: variant ? variant : 'h1', component: component ? component : 'h1', sx: sxHeader, gutterBottom: gutterBottom, style: { lineHeight: 1.4 }, children: headingText }), require$$0.jsx(require$$1.Typography, { variant: variantSubTitle ? variantSubTitle : 'subtitle1', sx: sxSubTitle, style: { lineHeight: 1.4, textAlign: 'justify' }, children: subtitleText })] }), AdditionalProps && require$$0.jsx(require$$1.Grid, { item: true, children: AdditionalProps })] }) }));
};

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min();
		} else {
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

const TextWrapper = require$$9.styled('span')(({ theme }) => `
      display: inline-block;
      align-items: center;

      &.flexItem {
        display: inline-flex;
      }

      &.MuiText {

        &-black {
          color: ${theme.palette.common.black}
        }

        &-primary {
          color: ${theme.palette.primary.main}
        }

        &-secondary {
          color: ${theme.palette.secondary.main}
        }

        &-success {
          color: ${theme.palette.success.main}
        }

        &-warning {
          color: ${theme.palette.warning.main}
        }

        &-error {
          color: ${theme.palette.error.main}
        }

        &-info {
          color: ${theme.palette.info.main}
        }
      }
`);
const Text = ({ color = 'secondary', flex, children, ...rest }) => {
    return (require$$0.jsx(TextWrapper, { className: clsx('MuiText-' + color, { flexItem: flex }), ...rest, children: children }));
};
Text.propTypes = {
    children: propTypes.exports.node,
    className: propTypes.exports.string,
    color: propTypes.exports.oneOf([
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'black',
    ]),
};

const LogoBox = require$$1.styled(require$$1.Box)(() => `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`);
function SaaSusLogo({ width, alt }) {
    return (require$$0.jsx(LogoBox, { children: require$$0.jsx(require$$10__default["default"], { href: "/", children: require$$0.jsx("img", { width: width, src: "/static/images/logo/saasus_logo.svg", alt: alt }) }) }));
}

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem$2 = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim$2 = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors$2 = {
    primary: '#44a574',
    secondary: '#a2a8ab',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#CBCCD2',
    white: '#232a2e',
    primaryAlt: '#232a2e',
    trueWhite: '#ffffff',
};
const colors$2 = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 0px 2px #757c82',
        cardSm: '0px 0px 2px #757c82',
        cardLg: '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)',
    },
    layout: {
        general: {
            bodyBg: '#141c23',
        },
        sidebar: {
            background: themeColors$2.primaryAlt,
            textColor: themeColors$2.secondary,
            dividerBg: '#303e47',
            menuItemColor: '#a1a7ab',
            menuItemColorActive: '#ffffff',
            menuItemBg: themeColors$2.primaryAlt,
            menuItemBgActive: themeColors$2.primary,
            menuItemIconColor: '#4a5d69',
            menuItemIconColorActive: '#ffffff',
            menuItemHeadingColor: require$$1.darken(themeColors$2.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: require$$1.alpha(themeColors$2.white, 0.02),
            10: require$$1.alpha(themeColors$2.white, 0.1),
            30: require$$1.alpha(themeColors$2.white, 0.3),
            50: require$$1.alpha(themeColors$2.white, 0.5),
            70: require$$1.alpha(themeColors$2.white, 0.7),
            100: themeColors$2.white,
        },
        trueWhite: {
            5: require$$1.alpha(themeColors$2.trueWhite, 0.02),
            10: require$$1.alpha(themeColors$2.trueWhite, 0.1),
            30: require$$1.alpha(themeColors$2.trueWhite, 0.3),
            50: require$$1.alpha(themeColors$2.trueWhite, 0.5),
            70: require$$1.alpha(themeColors$2.trueWhite, 0.7),
            100: themeColors$2.trueWhite,
        },
        black: {
            5: require$$1.alpha(themeColors$2.black, 0.02),
            10: require$$1.alpha(themeColors$2.black, 0.1),
            30: require$$1.alpha(themeColors$2.black, 0.3),
            50: require$$1.alpha(themeColors$2.black, 0.5),
            70: require$$1.alpha(themeColors$2.black, 0.7),
            100: themeColors$2.black,
        },
    },
    secondary: {
        lighter: require$$1.alpha(themeColors$2.secondary, 0.85),
        light: require$$1.alpha(themeColors$2.secondary, 0.6),
        main: themeColors$2.secondary,
        dark: require$$1.darken(themeColors$2.secondary, 0.2),
    },
    primary: {
        lighter: require$$1.alpha(themeColors$2.primary, 0.85),
        light: require$$1.alpha(themeColors$2.primary, 0.3),
        main: themeColors$2.primary,
        dark: require$$1.darken(themeColors$2.primary, 0.2),
    },
    success: {
        lighter: require$$1.alpha(themeColors$2.success, 0.85),
        light: require$$1.alpha(themeColors$2.success, 0.3),
        main: themeColors$2.success,
        dark: require$$1.darken(themeColors$2.success, 0.2),
    },
    warning: {
        lighter: require$$1.alpha(themeColors$2.warning, 0.85),
        light: require$$1.alpha(themeColors$2.warning, 0.3),
        main: themeColors$2.warning,
        dark: require$$1.darken(themeColors$2.warning, 0.2),
    },
    error: {
        lighter: require$$1.alpha(themeColors$2.error, 0.85),
        light: require$$1.alpha(themeColors$2.error, 0.3),
        main: themeColors$2.error,
        dark: require$$1.darken(themeColors$2.error, 0.2),
    },
    info: {
        lighter: require$$1.alpha(themeColors$2.info, 0.85),
        light: require$$1.alpha(themeColors$2.info, 0.3),
        main: themeColors$2.info,
        dark: require$$1.darken(themeColors$2.info, 0.2),
    },
};
const SaaSusDarkThemeHighContrast = require$$1.createTheme({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: colors$2.gradients.blue1,
            blue2: colors$2.gradients.blue2,
            blue3: colors$2.gradients.blue3,
            blue4: colors$2.gradients.blue4,
            blue5: colors$2.gradients.blue5,
            orange1: colors$2.gradients.orange1,
            orange2: colors$2.gradients.orange2,
            orange3: colors$2.gradients.orange3,
            purple1: colors$2.gradients.purple1,
            purple3: colors$2.gradients.purple3,
            pink1: colors$2.gradients.pink1,
            pink2: colors$2.gradients.pink2,
            green1: colors$2.gradients.green1,
            green2: colors$2.gradients.green2,
            black1: colors$2.gradients.black1,
            black2: colors$2.gradients.black2,
        },
        shadows: {
            success: colors$2.shadows.success,
            error: colors$2.shadows.error,
            primary: colors$2.shadows.primary,
            info: colors$2.shadows.info,
            warning: colors$2.shadows.warning,
        },
        alpha: {
            white: {
                5: require$$1.alpha(themeColors$2.white, 0.02),
                10: require$$1.alpha(themeColors$2.white, 0.1),
                30: require$$1.alpha(themeColors$2.white, 0.3),
                50: require$$1.alpha(themeColors$2.white, 0.5),
                70: require$$1.alpha(themeColors$2.white, 0.7),
                100: themeColors$2.white,
            },
            trueWhite: {
                5: require$$1.alpha(themeColors$2.trueWhite, 0.02),
                10: require$$1.alpha(themeColors$2.trueWhite, 0.1),
                30: require$$1.alpha(themeColors$2.trueWhite, 0.3),
                50: require$$1.alpha(themeColors$2.trueWhite, 0.5),
                70: require$$1.alpha(themeColors$2.trueWhite, 0.7),
                100: themeColors$2.trueWhite,
            },
            black: {
                5: require$$1.alpha(themeColors$2.black, 0.02),
                10: require$$1.alpha(themeColors$2.black, 0.1),
                30: require$$1.alpha(themeColors$2.black, 0.3),
                50: require$$1.alpha(themeColors$2.black, 0.5),
                70: require$$1.alpha(themeColors$2.black, 0.7),
                100: themeColors$2.black,
            },
        },
        secondary: {
            lighter: require$$1.alpha(themeColors$2.secondary, 0.1),
            light: require$$1.alpha(themeColors$2.secondary, 0.3),
            main: themeColors$2.secondary,
            dark: require$$1.darken(themeColors$2.secondary, 0.2),
        },
        primary: {
            lighter: require$$1.alpha(themeColors$2.primary, 0.1),
            light: require$$1.alpha(themeColors$2.primary, 0.3),
            main: themeColors$2.primary,
            dark: require$$1.darken(themeColors$2.primary, 0.2),
        },
        success: {
            lighter: require$$1.alpha(themeColors$2.success, 0.1),
            light: require$$1.alpha(themeColors$2.success, 0.3),
            main: themeColors$2.success,
            dark: require$$1.darken(themeColors$2.success, 0.2),
        },
        warning: {
            lighter: require$$1.alpha(themeColors$2.warning, 0.1),
            light: require$$1.alpha(themeColors$2.warning, 0.3),
            main: themeColors$2.warning,
            dark: require$$1.darken(themeColors$2.warning, 0.2),
        },
        error: {
            lighter: require$$1.alpha(themeColors$2.error, 0.1),
            light: require$$1.alpha(themeColors$2.error, 0.3),
            main: themeColors$2.error,
            dark: require$$1.darken(themeColors$2.error, 0.2),
        },
        info: {
            lighter: require$$1.alpha(themeColors$2.info, 0.1),
            light: require$$1.alpha(themeColors$2.info, 0.3),
            main: themeColors$2.info,
            dark: require$$1.darken(themeColors$2.info, 0.2),
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors$2.layout.sidebar.background,
        textColor: colors$2.layout.sidebar.textColor,
        dividerBg: colors$2.layout.sidebar.dividerBg,
        menuItemColor: colors$2.layout.sidebar.menuItemColor,
        menuItemColorActive: colors$2.layout.sidebar.menuItemColorActive,
        menuItemBg: colors$2.layout.sidebar.menuItemBg,
        menuItemBgActive: colors$2.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors$2.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors$2.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors$2.layout.sidebar.menuItemHeadingColor,
        boxShadow: '1px 0 0 #303e47',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: themeColors$2.primaryAlt,
        boxShadow: '0px 1px 0px #303e47',
        textColor: colors$2.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors$2.alpha.black[100],
            white: colors$2.alpha.white[100],
        },
        mode: 'dark',
        primary: {
            light: colors$2.primary.light,
            main: colors$2.primary.main,
            dark: colors$2.primary.dark,
        },
        secondary: {
            light: colors$2.secondary.light,
            main: colors$2.secondary.main,
            dark: colors$2.secondary.dark,
        },
        error: {
            light: colors$2.error.light,
            main: colors$2.error.main,
            dark: colors$2.error.dark,
            contrastText: themeColors$2.trueWhite,
        },
        success: {
            light: colors$2.success.light,
            main: colors$2.success.main,
            dark: colors$2.success.dark,
            contrastText: themeColors$2.trueWhite,
        },
        info: {
            light: colors$2.info.light,
            main: colors$2.info.main,
            dark: colors$2.info.dark,
            contrastText: themeColors$2.trueWhite,
        },
        warning: {
            light: colors$2.warning.light,
            main: colors$2.warning.main,
            dark: colors$2.warning.dark,
            contrastText: themeColors$2.trueWhite,
        },
        text: {
            primary: colors$2.alpha.black[100],
            secondary: colors$2.alpha.black[70],
            disabled: colors$2.alpha.black[50],
        },
        background: {
            paper: colors$2.alpha.white[100],
            default: colors$2.layout.general.bodyBg,
        },
        action: {
            active: colors$2.alpha.black[100],
            hover: colors$2.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors$2.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors$2.alpha.black[50],
            disabledBackground: colors$2.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors$2.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: require$$1.alpha(require$$1.darken('#141c23', 0.5), 0.4),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: 'bold',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: require$$1.darken(themeColors$2.primaryAlt, 0.5),
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                },
                summary: {
                    cursor: 'pointer',
                    color: colors$2.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors$2.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors$2.primary.lighter,
                    borderLeftColor: colors$2.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors$2.primary.lighter +
                        ', 0 0 8px' +
                        colors$2.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors$2.primary.main,
                    colorScheme: 'dark',
                },
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim$2(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem$2(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // TODO: Set Color
                    background: 'transparent',
                    border: `1px solid ${colors$2.info.light}`,
                    color: colors$2.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors$2.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$2.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$2.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors$2.alpha.black[5],
                    color: colors$2.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: 15,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors$2.alpha.black[5],
                    color: colors$2.alpha.black[100],
                    '&:hover': {
                        background: colors$2.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors$2.alpha.black[50],
                    '&:hover': {
                        color: colors$2.alpha.black[70],
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                colorDefault: {
                    background: colors$2.alpha.black[30],
                    color: colors$2.alpha.trueWhite[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors$2.alpha.black[10],
                    fontSize: 13,
                    color: colors$2.alpha.black[70],
                    fontWeight: 'bold',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors$2.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors$2.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors$2.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors$2.secondary.main,
                    color: colors$2.alpha.white[100],
                    border: '1px solid ' + colors$2.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors$2.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors$2.alpha.black[5],
                        color: colors$2.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors$2.primary.main,
                    background: colors$2.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: themeColors$2.trueWhite,
                        background: colors$2.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors$2.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors$2.alpha.white[100],
                    fontWeight: 'bold',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors$2.shadows.card,
                },
                elevation2: {
                    boxShadow: colors$2.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors$2.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors$2.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors$2.alpha.black[100],
                        color: colors$2.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: colors$2.alpha.black[10],
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: require$$1.alpha(colors$2.primary.lighter, 0.2),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors$2.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors$2.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors$2.alpha.trueWhite[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors$2.alpha.trueWhite[70],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors$2.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$2.alpha.black[100],
                            background: require$$1.alpha(colors$2.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors$2.alpha.black[100],
                        background: require$$1.alpha(colors$2.primary.lighter, 0.2),
                    },
                    '&.Mui-selected:hover': {
                        background: require$$1.alpha(colors$2.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors$2.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$2.alpha.black[100],
                            background: require$$1.alpha(colors$2.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: require$$1.alpha(colors$2.error.lighter, 0.2),
                    color: colors$2.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: require$$1.alpha(colors$2.error.lighter, 0.3),
                    },
                },
                popupIndicator: {
                    color: colors$2.alpha.black[70],
                    '&:hover': {
                        background: require$$1.alpha(colors$2.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors$2.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: require$$1.alpha(colors$2.alpha.black[5], 0.05),
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors$2.alpha.black[10],
                    fontSize: 14,
                },
                head: {
                    textTransform: 'uppercase',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: colors$2.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14,
                },
                standardInfo: {
                    color: colors$2.info.main,
                },
                action: {
                    color: colors$2.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors$2.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$2.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors$2.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$2.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors$2.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: require$$1.alpha(colors$2.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: 13,
                },
                arrow: {
                    color: require$$1.alpha(colors$2.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors$2.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors$2.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors$2.alpha.black[10],
                },
                track: {
                    backgroundColor: colors$2.alpha.black[5],
                    border: '1px solid ' + colors$2.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors$2.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors$2.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors$2.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors$2.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors$2.success.main,
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4,
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$2(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$2(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(14)}`,
            },
            color: colors$2.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$2(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(13)}`,
            },
            color: colors$2.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim$2(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(12)}`,
            },
            color: colors$2.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim$2(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim$2(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$2(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem$1 = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim$1 = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors$1 = {
    primary: '#8C7CF0',
    secondary: '#9EA4C1',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#CBCCD2',
    white: '#111633',
    primaryAlt: '#111633',
    trueWhite: '#ffffff',
};
const colors$1 = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 0px 2px #6A7199',
        cardSm: '0px 0px 2px #6A7199',
        cardLg: '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)',
    },
    layout: {
        general: {
            bodyBg: '#070C27',
        },
        sidebar: {
            background: themeColors$1.primaryAlt,
            textColor: themeColors$1.secondary,
            dividerBg: '#272C48',
            menuItemColor: '#9EA4C1',
            menuItemColorActive: '#ffffff',
            menuItemBg: themeColors$1.primaryAlt,
            menuItemBgActive: 'rgba(43, 48, 77, .6)',
            menuItemIconColor: '#444A6B',
            menuItemIconColorActive: '#ffffff',
            menuItemHeadingColor: require$$1.darken(themeColors$1.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: require$$1.alpha(themeColors$1.white, 0.02),
            10: require$$1.alpha(themeColors$1.white, 0.1),
            30: require$$1.alpha(themeColors$1.white, 0.3),
            50: require$$1.alpha(themeColors$1.white, 0.5),
            70: require$$1.alpha(themeColors$1.white, 0.7),
            100: themeColors$1.white,
        },
        trueWhite: {
            5: require$$1.alpha(themeColors$1.trueWhite, 0.02),
            10: require$$1.alpha(themeColors$1.trueWhite, 0.1),
            30: require$$1.alpha(themeColors$1.trueWhite, 0.3),
            50: require$$1.alpha(themeColors$1.trueWhite, 0.5),
            70: require$$1.alpha(themeColors$1.trueWhite, 0.7),
            100: themeColors$1.trueWhite,
        },
        black: {
            5: require$$1.alpha(themeColors$1.black, 0.02),
            10: require$$1.alpha(themeColors$1.black, 0.1),
            30: require$$1.alpha(themeColors$1.black, 0.3),
            50: require$$1.alpha(themeColors$1.black, 0.5),
            70: require$$1.alpha(themeColors$1.black, 0.7),
            100: themeColors$1.black,
        },
    },
    secondary: {
        lighter: require$$1.alpha(themeColors$1.secondary, 0.85),
        light: require$$1.alpha(themeColors$1.secondary, 0.6),
        main: themeColors$1.secondary,
        dark: require$$1.darken(themeColors$1.secondary, 0.2),
    },
    primary: {
        lighter: require$$1.alpha(themeColors$1.primary, 0.85),
        light: require$$1.alpha(themeColors$1.primary, 0.3),
        main: themeColors$1.primary,
        dark: require$$1.darken(themeColors$1.primary, 0.2),
    },
    success: {
        lighter: require$$1.alpha(themeColors$1.success, 0.85),
        light: require$$1.alpha(themeColors$1.success, 0.3),
        main: themeColors$1.success,
        dark: require$$1.darken(themeColors$1.success, 0.2),
    },
    warning: {
        lighter: require$$1.alpha(themeColors$1.warning, 0.85),
        light: require$$1.alpha(themeColors$1.warning, 0.3),
        main: themeColors$1.warning,
        dark: require$$1.darken(themeColors$1.warning, 0.2),
    },
    error: {
        lighter: require$$1.alpha(themeColors$1.error, 0.85),
        light: require$$1.alpha(themeColors$1.error, 0.3),
        main: themeColors$1.error,
        dark: require$$1.darken(themeColors$1.error, 0.2),
    },
    info: {
        lighter: require$$1.alpha(themeColors$1.info, 0.85),
        light: require$$1.alpha(themeColors$1.info, 0.3),
        main: themeColors$1.info,
        dark: require$$1.darken(themeColors$1.info, 0.2),
    },
};
const SaaSusDarkTheme = require$$1.createTheme({
    // direction: i18n.dir(),
    colors: {
        gradients: {
            blue1: colors$1.gradients.blue1,
            blue2: colors$1.gradients.blue2,
            blue3: colors$1.gradients.blue3,
            blue4: colors$1.gradients.blue4,
            blue5: colors$1.gradients.blue5,
            orange1: colors$1.gradients.orange1,
            orange2: colors$1.gradients.orange2,
            orange3: colors$1.gradients.orange3,
            purple1: colors$1.gradients.purple1,
            purple3: colors$1.gradients.purple3,
            pink1: colors$1.gradients.pink1,
            pink2: colors$1.gradients.pink2,
            green1: colors$1.gradients.green1,
            green2: colors$1.gradients.green2,
            black1: colors$1.gradients.black1,
            black2: colors$1.gradients.black2,
        },
        shadows: {
            success: colors$1.shadows.success,
            error: colors$1.shadows.error,
            primary: colors$1.shadows.primary,
            info: colors$1.shadows.info,
            warning: colors$1.shadows.warning,
        },
        alpha: {
            white: {
                5: require$$1.alpha(themeColors$1.white, 0.02),
                10: require$$1.alpha(themeColors$1.white, 0.1),
                30: require$$1.alpha(themeColors$1.white, 0.3),
                50: require$$1.alpha(themeColors$1.white, 0.5),
                70: require$$1.alpha(themeColors$1.white, 0.7),
                100: themeColors$1.white,
            },
            trueWhite: {
                5: require$$1.alpha(themeColors$1.trueWhite, 0.02),
                10: require$$1.alpha(themeColors$1.trueWhite, 0.1),
                30: require$$1.alpha(themeColors$1.trueWhite, 0.3),
                50: require$$1.alpha(themeColors$1.trueWhite, 0.5),
                70: require$$1.alpha(themeColors$1.trueWhite, 0.7),
                100: themeColors$1.trueWhite,
            },
            black: {
                5: require$$1.alpha(themeColors$1.black, 0.02),
                10: require$$1.alpha(themeColors$1.black, 0.1),
                30: require$$1.alpha(themeColors$1.black, 0.3),
                50: require$$1.alpha(themeColors$1.black, 0.5),
                70: require$$1.alpha(themeColors$1.black, 0.7),
                100: themeColors$1.black,
            },
        },
        secondary: {
            lighter: require$$1.alpha(themeColors$1.secondary, 0.1),
            light: require$$1.alpha(themeColors$1.secondary, 0.3),
            main: themeColors$1.secondary,
            dark: require$$1.darken(themeColors$1.secondary, 0.2),
        },
        primary: {
            lighter: require$$1.alpha(themeColors$1.primary, 0.1),
            light: require$$1.alpha(themeColors$1.primary, 0.3),
            main: themeColors$1.primary,
            dark: require$$1.darken(themeColors$1.primary, 0.2),
        },
        success: {
            lighter: require$$1.alpha(themeColors$1.success, 0.1),
            light: require$$1.alpha(themeColors$1.success, 0.3),
            main: themeColors$1.success,
            dark: require$$1.darken(themeColors$1.success, 0.2),
        },
        warning: {
            lighter: require$$1.alpha(themeColors$1.warning, 0.1),
            light: require$$1.alpha(themeColors$1.warning, 0.3),
            main: themeColors$1.warning,
            dark: require$$1.darken(themeColors$1.warning, 0.2),
        },
        error: {
            lighter: require$$1.alpha(themeColors$1.error, 0.1),
            light: require$$1.alpha(themeColors$1.error, 0.3),
            main: themeColors$1.error,
            dark: require$$1.darken(themeColors$1.error, 0.2),
        },
        info: {
            lighter: require$$1.alpha(themeColors$1.info, 0.1),
            light: require$$1.alpha(themeColors$1.info, 0.3),
            main: themeColors$1.info,
            dark: require$$1.darken(themeColors$1.info, 0.2),
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors$1.layout.sidebar.background,
        textColor: colors$1.layout.sidebar.textColor,
        dividerBg: colors$1.layout.sidebar.dividerBg,
        menuItemColor: colors$1.layout.sidebar.menuItemColor,
        menuItemColorActive: colors$1.layout.sidebar.menuItemColorActive,
        menuItemBg: colors$1.layout.sidebar.menuItemBg,
        menuItemBgActive: colors$1.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors$1.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors$1.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors$1.layout.sidebar.menuItemHeadingColor,
        boxShadow: '1px 0 0 #272C48',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: themeColors$1.primaryAlt,
        boxShadow: '0px 1px 0px #272C48',
        textColor: colors$1.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors$1.alpha.black[100],
            white: colors$1.alpha.white[100],
        },
        mode: 'dark',
        primary: {
            light: colors$1.primary.light,
            main: colors$1.primary.main,
            dark: colors$1.primary.dark,
        },
        secondary: {
            light: colors$1.secondary.light,
            main: colors$1.secondary.main,
            dark: colors$1.secondary.dark,
        },
        error: {
            light: colors$1.error.light,
            main: colors$1.error.main,
            dark: colors$1.error.dark,
            contrastText: themeColors$1.trueWhite,
        },
        success: {
            light: colors$1.success.light,
            main: colors$1.success.main,
            dark: colors$1.success.dark,
            contrastText: themeColors$1.trueWhite,
        },
        info: {
            light: colors$1.info.light,
            main: colors$1.info.main,
            dark: colors$1.info.dark,
            contrastText: themeColors$1.trueWhite,
        },
        warning: {
            light: colors$1.warning.light,
            main: colors$1.warning.main,
            dark: colors$1.warning.dark,
            contrastText: themeColors$1.trueWhite,
        },
        text: {
            primary: colors$1.alpha.black[100],
            secondary: colors$1.alpha.black[70],
            disabled: colors$1.alpha.black[50],
        },
        background: {
            paper: colors$1.alpha.white[100],
            default: colors$1.layout.general.bodyBg,
        },
        action: {
            active: colors$1.alpha.black[100],
            hover: colors$1.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors$1.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors$1.alpha.black[50],
            disabledBackground: colors$1.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors$1.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: require$$1.alpha(require$$1.darken('#070C27', 0.5), 0.4),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: 'bold',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: require$$1.darken(themeColors$1.primaryAlt, 0.5),
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                },
                summary: {
                    cursor: 'pointer',
                    color: colors$1.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors$1.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors$1.primary.lighter,
                    borderLeftColor: colors$1.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors$1.primary.lighter +
                        ', 0 0 8px' +
                        colors$1.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors$1.primary.main,
                    colorScheme: 'dark',
                },
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim$1(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem$1(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // TODO: Set Color
                    background: 'transparent',
                    border: `1px solid ${colors$1.info.light}`,
                    color: colors$1.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors$1.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$1.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors$1.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors$1.alpha.black[5],
                    color: colors$1.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: 15,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors$1.alpha.black[5],
                    color: colors$1.alpha.black[100],
                    '&:hover': {
                        background: colors$1.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors$1.alpha.black[50],
                    '&:hover': {
                        color: colors$1.alpha.black[70],
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 'bold',
                },
                colorDefault: {
                    background: colors$1.alpha.black[30],
                    color: colors$1.alpha.trueWhite[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors$1.alpha.black[10],
                    fontSize: 13,
                    color: colors$1.alpha.black[70],
                    fontWeight: 'bold',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors$1.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors$1.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors$1.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors$1.secondary.main,
                    color: colors$1.alpha.white[100],
                    border: '1px solid ' + colors$1.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors$1.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors$1.alpha.black[5],
                        color: colors$1.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors$1.primary.main,
                    background: colors$1.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: themeColors$1.trueWhite,
                        background: colors$1.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors$1.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors$1.alpha.white[100],
                    fontWeight: 'bold',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors$1.shadows.card,
                },
                elevation2: {
                    boxShadow: colors$1.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors$1.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors$1.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors$1.alpha.black[100],
                        color: colors$1.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: colors$1.alpha.black[10],
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: require$$1.alpha(colors$1.primary.lighter, 0.2),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors$1.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors$1.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors$1.alpha.trueWhite[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors$1.alpha.trueWhite[70],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: 14,
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors$1.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$1.alpha.black[100],
                            background: require$$1.alpha(colors$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors$1.alpha.black[100],
                        background: require$$1.alpha(colors$1.primary.lighter, 0.2),
                    },
                    '&.Mui-selected:hover': {
                        background: require$$1.alpha(colors$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors$1.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors$1.alpha.black[100],
                            background: require$$1.alpha(colors$1.primary.lighter, 0.2),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: require$$1.alpha(colors$1.error.lighter, 0.2),
                    color: colors$1.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: require$$1.alpha(colors$1.error.lighter, 0.3),
                    },
                },
                popupIndicator: {
                    color: colors$1.alpha.black[70],
                    '&:hover': {
                        background: require$$1.alpha(colors$1.primary.lighter, 0.2),
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors$1.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: require$$1.alpha(colors$1.alpha.black[5], 0.05),
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomColor: colors$1.alpha.black[10],
                    fontSize: 14,
                },
                head: {
                    textTransform: 'uppercase',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: colors$1.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: 14,
                },
                standardInfo: {
                    color: colors$1.info.main,
                },
                action: {
                    color: colors$1.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$1.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors$1.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors$1.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors$1.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: require$$1.alpha(colors$1.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: 13,
                },
                arrow: {
                    color: require$$1.alpha(colors$1.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors$1.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors$1.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors$1.alpha.black[10],
                },
                track: {
                    backgroundColor: colors$1.alpha.black[5],
                    border: '1px solid ' + colors$1.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors$1.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors$1.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors$1.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors$1.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors$1.success.main,
                    },
                },
            },
        },
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: 4,
                },
                paragraph: {
                    fontSize: 17,
                    lineHeight: 1.7,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$1(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim$1(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(14)}`,
            },
            color: colors$1.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(13)}`,
            },
            color: colors$1.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim$1(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(12)}`,
            },
            color: colors$1.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim$1(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim$1(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem$1(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

/***
 * @param fontPxToRem pxからrem変換計算用
 *  ユーザーのブラウザ設定に応じ、基準サイズをユーザーが意図した表示サイズに追従させ得るための対応
 *  例：fontPxToRem(24) -> fontSize:1.5rem 見た目上24pxのrem
 * @param fontPxToRemMinim レスポンシブ対応の縮小サイズ用 現在85%
 *  モバイルファースト設計で先にこちらが優先され、ブレイクポイント（現在960px）以上の画面幅になれば100%になる仕様です
 *  レスポンシブ設計は必要応じてアップデートを見込んでいます。
 */
const fontPxToRem = (px) => {
    return px / 16 + 'rem';
};
// レスポンシブ対応の縮小サイズ用
const fontPxToRemMinim = (px) => {
    return (px / 16) * 0.85 + 'rem';
};
const themeColors = {
    primary: '#1A75FF',
    secondary: '#6E759F',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57',
};
const colors = {
    gradients: {
        blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
        blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
        blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
        orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
        orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
        orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
        purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
        pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
        green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
        green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
        black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
        black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    },
    shadows: {
        success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
        error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
        info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
        primary: '0px 1px 4px rgba(28, 52, 140, 0.25), 0px 3px 12px 2px rgba(28, 52, 140, 0.35)',
        warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
        card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
        cardSm: '0px 2px 3px rgba(159, 162, 191, .18), 0px 1px 1px rgba(159, 162, 191, 0.32)',
        cardLg: '0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)',
    },
    layout: {
        general: {
            bodyBg: '#F8F8F8',
        },
        sidebar: {
            background: themeColors.white,
            textColor: themeColors.black,
            dividerBg: '#f2f5f9',
            menuItemColor: '#242E6F',
            menuItemColorActive: themeColors.primary,
            menuItemBg: themeColors.white,
            menuItemBgActive: '#f2f5f9',
            menuItemIconColor: require$$1.lighten(themeColors.secondary, 0.3),
            menuItemIconColorActive: themeColors.primary,
            menuItemHeadingColor: require$$1.darken(themeColors.secondary, 0.3),
        },
    },
    alpha: {
        white: {
            5: require$$1.alpha(themeColors.white, 0.02),
            10: require$$1.alpha(themeColors.white, 0.1),
            30: require$$1.alpha(themeColors.white, 0.3),
            50: require$$1.alpha(themeColors.white, 0.5),
            70: require$$1.alpha(themeColors.white, 0.7),
            100: themeColors.white,
        },
        trueWhite: {
            5: require$$1.alpha(themeColors.white, 0.02),
            10: require$$1.alpha(themeColors.white, 0.1),
            30: require$$1.alpha(themeColors.white, 0.3),
            50: require$$1.alpha(themeColors.white, 0.5),
            70: require$$1.alpha(themeColors.white, 0.7),
            100: themeColors.white,
        },
        black: {
            5: require$$1.alpha(themeColors.black, 0.02),
            10: require$$1.alpha(themeColors.black, 0.1),
            30: require$$1.alpha(themeColors.black, 0.3),
            50: require$$1.alpha(themeColors.black, 0.5),
            70: require$$1.alpha(themeColors.black, 0.7),
            100: themeColors.black,
        },
    },
    secondary: {
        lighter: require$$1.lighten(themeColors.secondary, 0.85),
        light: require$$1.lighten(themeColors.secondary, 0.25),
        main: themeColors.secondary,
        dark: require$$1.darken(themeColors.secondary, 0.2),
    },
    primary: {
        lighter: require$$1.lighten(themeColors.primary, 0.85),
        light: require$$1.lighten(themeColors.primary, 0.3),
        main: themeColors.primary,
        dark: require$$1.darken(themeColors.primary, 0.2),
    },
    success: {
        lighter: require$$1.lighten(themeColors.success, 0.85),
        light: require$$1.lighten(themeColors.success, 0.3),
        main: themeColors.success,
        dark: require$$1.darken(themeColors.success, 0.2),
    },
    warning: {
        lighter: require$$1.lighten(themeColors.warning, 0.85),
        light: require$$1.lighten(themeColors.warning, 0.3),
        main: themeColors.warning,
        dark: require$$1.darken(themeColors.warning, 0.2),
    },
    error: {
        lighter: require$$1.lighten(themeColors.error, 0.85),
        light: require$$1.lighten(themeColors.error, 0.3),
        main: themeColors.error,
        dark: require$$1.darken(themeColors.error, 0.2),
    },
    info: {
        lighter: require$$1.lighten(themeColors.info, 0.85),
        light: require$$1.lighten(themeColors.info, 0.3),
        main: themeColors.info,
        dark: require$$1.darken(themeColors.info, 0.2),
    },
};
const SaaSusTheme = require$$1.createTheme({
    colors: {
        gradients: {
            blue1: colors.gradients.blue1,
            blue2: colors.gradients.blue2,
            blue3: colors.gradients.blue3,
            blue4: colors.gradients.blue4,
            blue5: colors.gradients.blue5,
            orange1: colors.gradients.orange1,
            orange2: colors.gradients.orange2,
            orange3: colors.gradients.orange3,
            purple1: colors.gradients.purple1,
            purple3: colors.gradients.purple3,
            pink1: colors.gradients.pink1,
            pink2: colors.gradients.pink2,
            green1: colors.gradients.green1,
            green2: colors.gradients.green2,
            black1: colors.gradients.black1,
            black2: colors.gradients.black2,
        },
        shadows: {
            success: colors.shadows.success,
            error: colors.shadows.error,
            primary: colors.shadows.primary,
            info: colors.shadows.info,
            warning: colors.shadows.warning,
        },
        alpha: {
            white: {
                5: require$$1.alpha(themeColors.white, 0.02),
                10: require$$1.alpha(themeColors.white, 0.1),
                30: require$$1.alpha(themeColors.white, 0.3),
                50: require$$1.alpha(themeColors.white, 0.5),
                70: require$$1.alpha(themeColors.white, 0.7),
                100: themeColors.white,
            },
            trueWhite: {
                5: require$$1.alpha(themeColors.white, 0.02),
                10: require$$1.alpha(themeColors.white, 0.1),
                30: require$$1.alpha(themeColors.white, 0.3),
                50: require$$1.alpha(themeColors.white, 0.5),
                70: require$$1.alpha(themeColors.white, 0.7),
                100: themeColors.white,
            },
            black: {
                5: require$$1.alpha(themeColors.black, 0.02),
                10: require$$1.alpha(themeColors.black, 0.1),
                30: require$$1.alpha(themeColors.black, 0.3),
                50: require$$1.alpha(themeColors.black, 0.5),
                70: require$$1.alpha(themeColors.black, 0.7),
                100: themeColors.black,
            },
        },
        secondary: {
            lighter: require$$1.alpha(themeColors.secondary, 0.1),
            light: require$$1.lighten(themeColors.secondary, 0.3),
            main: themeColors.secondary,
            dark: require$$1.darken(themeColors.secondary, 0.2),
        },
        primary: {
            lighter: require$$1.alpha(themeColors.primary, 0.1),
            light: require$$1.lighten(themeColors.primary, 0.3),
            main: themeColors.primary,
            dark: require$$1.darken(themeColors.primary, 0.2),
        },
        success: {
            lighter: require$$1.alpha(themeColors.success, 0.1),
            light: require$$1.lighten(themeColors.success, 0.3),
            main: themeColors.success,
            dark: require$$1.darken(themeColors.success, 0.2),
        },
        warning: {
            lighter: require$$1.alpha(themeColors.warning, 0.1),
            light: require$$1.lighten(themeColors.warning, 0.3),
            main: themeColors.warning,
            dark: require$$1.darken(themeColors.warning, 0.2),
        },
        error: {
            lighter: require$$1.alpha(themeColors.error, 0.1),
            light: require$$1.lighten(themeColors.error, 0.3),
            main: themeColors.error,
            dark: require$$1.darken(themeColors.error, 0.2),
        },
        info: {
            lighter: require$$1.alpha(themeColors.info, 0.1),
            light: require$$1.lighten(themeColors.info, 0.3),
            main: themeColors.info,
            dark: require$$1.darken(themeColors.info, 0.2),
        },
        turquoise: {
            main: '#00838f',
            dark: '#005662',
            light: '#76C4CB',
        },
        coral: {
            main: '#FF8052',
            dark: '#BF603E',
            light: '#FBC2AD',
        },
    },
    general: {
        reactFrameworkColor: '#00D8FF',
        borderRadiusSm: '6px',
        borderRadius: '10px',
        borderRadiusLg: '12px',
        borderRadiusXl: '16px',
    },
    sidebar: {
        background: colors.layout.sidebar.background,
        textColor: colors.layout.sidebar.textColor,
        dividerBg: colors.layout.sidebar.dividerBg,
        menuItemColor: colors.layout.sidebar.menuItemColor,
        menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
        menuItemBg: colors.layout.sidebar.menuItemBg,
        menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
        menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
        menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
        menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
        boxShadow: '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
        width: '180px',
    },
    header: {
        height: 'auto',
        background: colors.alpha.white[100],
        boxShadow: colors.shadows.cardSm,
        textColor: colors.secondary.main,
    },
    spacing: 8,
    palette: {
        common: {
            black: colors.alpha.black[100],
            white: colors.alpha.white[100],
        },
        mode: 'light',
        primary: {
            lighter: colors.primary.lighter,
            light: colors.primary.light,
            main: colors.primary.main,
            dark: colors.primary.dark,
        },
        secondary: {
            lighter: colors.secondary.lighter,
            light: colors.secondary.light,
            main: colors.secondary.main,
            dark: colors.secondary.dark,
        },
        error: {
            lighter: colors.error.lighter,
            light: colors.error.light,
            main: colors.error.main,
            dark: colors.error.dark,
            contrastText: colors.alpha.white[100],
        },
        success: {
            lighter: colors.success.lighter,
            light: colors.success.light,
            main: colors.success.main,
            dark: colors.success.dark,
            contrastText: colors.alpha.white[100],
        },
        info: {
            lighter: colors.info.lighter,
            light: colors.info.light,
            main: colors.info.main,
            dark: colors.info.dark,
            contrastText: colors.alpha.white[100],
        },
        warning: {
            lighter: colors.warning.lighter,
            light: colors.warning.light,
            main: colors.warning.main,
            dark: colors.warning.dark,
            contrastText: colors.alpha.white[100],
        },
        text: {
            primary: colors.alpha.black[100],
            secondary: colors.alpha.black[70],
            disabled: colors.alpha.black[50],
        },
        background: {
            paper: colors.alpha.white[100],
            default: colors.layout.general.bodyBg,
        },
        action: {
            active: colors.alpha.black[100],
            hover: colors.primary.lighter,
            hoverOpacity: 0.1,
            selected: colors.alpha.black[10],
            selectedOpacity: 0.1,
            disabled: colors.alpha.black[50],
            disabledBackground: colors.alpha.black[5],
            disabledOpacity: 0.38,
            focus: colors.alpha.black[10],
            focusOpacity: 0.05,
            activatedOpacity: 0.12,
        },
        tonalOffset: 0.5,
    },
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: require$$1.alpha(require$$1.darken(themeColors.primaryAlt, 0.4), 0.2),
                    backdropFilter: 'blur(2px)',
                    '&.MuiBackdrop-invisible': {
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(2px)',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    // FIXME! ヘルパーテキストポジション
                    marginLeft: 8,
                    marginRight: 8,
                    fontWeight: '700',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                    breakWord: 'break-word',
                    // FIXME! 定義
                    lineHeight: 1.75,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    // TODO: Baseフォントサイズ
                    // fontSize: 16 // FIXME! フォントサイズ
                },
                summary: {
                    cursor: 'pointer',
                    color: colors.primary.main,
                },
                '.child-popover .MuiPaper-root .MuiList-root': {
                    flexDirection: 'column',
                },
                '#nprogress': {
                    pointerEvents: 'none',
                },
                '#nprogress .bar': {
                    background: colors.primary.lighter,
                },
                '#nprogress .spinner-icon': {
                    borderTopColor: colors.primary.lighter,
                    borderLeftColor: colors.primary.lighter,
                },
                '#nprogress .peg': {
                    boxShadow: '0 0 15px ' +
                        colors.primary.lighter +
                        ', 0 0 8px' +
                        colors.primary.light,
                },
                ':root': {
                    '--swiper-theme-color': colors.primary.main,
                },
                // FIXME! Codeタグはグローバルに
                code: {
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: `${fontPxToRemMinim(14)}`,
                    '@media (min-width: 960px)': {
                        fontSize: `${fontPxToRem(14)}`,
                    },
                    lineHeight: 1.5,
                    margin: '0 0.1ch',
                    paddingLeft: 6,
                    paddingRight: 6,
                    paddingTop: 1,
                    paddingBottom: 2,
                    borderRadius: 4,
                    // background: colors.info.lighter,
                    background: 'transparent',
                    border: `1px solid ${colors.info.dark}`,
                    color: colors.info.dark,
                },
                '@keyframes pulse': {
                    '0%': {
                        transform: 'scale(.75)',
                    },
                    '20%': {
                        transform: 'scale(1.1)',
                    },
                    '40%': {
                        transform: 'scale(.75)',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                    },
                    '80%': {
                        transform: 'scale(.75)',
                    },
                    '100%': {
                        transform: 'scale(.75)',
                    },
                },
                '@keyframes ripple': {
                    '0%': {
                        transform: 'scale(.8)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'scale(2.8)',
                        opacity: 0,
                    },
                },
                '@keyframes float': {
                    '0%': {
                        transform: 'translate(0%, 0%)',
                    },
                    '100%': {
                        transform: 'translate(3%, 3%)',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                iconOutlined: {
                    color: colors.alpha.black[50],
                },
                icon: {
                    top: 'calc(50% - 14px)',
                },
            },
        },
        // TODO: フォームUIカスタム
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
                        paddingRight: 6,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.alpha.black[50],
                    },
                    '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.primary.main,
                    },
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                colorPrimary: {
                    fontWeight: '700',
                    lineHeight: '40px',
                    fontSize: '0.8125rem',
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[70],
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                action: {
                    marginTop: -5,
                    marginBottom: -5,
                },
                title: {
                    fontSize: '0.9375rem',
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                colorSecondary: {
                    background: colors.alpha.black[5],
                    color: colors.alpha.black[100],
                    '&:hover': {
                        background: colors.alpha.black[10],
                    },
                },
                deleteIcon: {
                    color: colors.error.light,
                    '&:hover': {
                        color: colors.error.main,
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: 0,
                    },
                    '&::before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    fontWeight: '700',
                },
                colorDefault: {
                    background: colors.alpha.black[30],
                    color: colors.alpha.white[100],
                },
            },
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                },
                avatar: {
                    background: colors.alpha.black[10],
                    fontSize: '0.8125rem',
                    color: colors.alpha.black[70],
                    fontWeight: '700',
                    '&:first-of-type': {
                        border: 0,
                        background: 'transparent',
                    },
                },
            },
        },
        MuiListItemAvatar: {
            styleOverrides: {
                alignItemsFlexStart: {
                    marginTop: 0,
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                page: {
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    transition: 'all .2s',
                },
                textPrimary: {
                    '&.Mui-selected': {
                        boxShadow: colors.shadows.primary,
                    },
                    '&.MuiButtonBase-root:hover': {
                        background: colors.alpha.black[5],
                    },
                    '&.Mui-selected.MuiButtonBase-root:hover': {
                        background: colors.primary.main,
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontWeight: '700',
                    textTransform: 'none',
                    paddingLeft: 16,
                    paddingRight: 16,
                    minWidth: 160,
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    '&.MuiButton-contained.MuiButton-containedPrimary': {
                        '&:not(.Mui-disabled)': {
                            boxShadow: '0 2px 4px rgba(180, 180, 180, 0.5)',
                        },
                    },
                    '.MuiSvgIcon-root': {
                        transition: 'all .2s',
                    },
                },
                endIcon: {
                    marginRight: -8,
                },
                containedSecondary: {
                    backgroundColor: colors.secondary.main,
                    color: colors.alpha.white[100],
                    border: '1px solid ' + colors.alpha.black[30],
                },
                outlinedSecondary: {
                    backgroundColor: colors.alpha.white[100],
                    '&:hover, &.MuiSelected': {
                        backgroundColor: colors.alpha.black[5],
                        color: colors.alpha.black[100],
                    },
                },
                sizeSmall: {
                    padding: '6px 16px',
                    lineHeight: 1.5,
                },
                sizeMedium: {
                    padding: '8px 20px',
                },
                sizeLarge: {
                    padding: '11px 24px',
                },
                textSizeSmall: {
                    padding: '7px 12px',
                },
                textSizeMedium: {
                    padding: '9px 16px',
                },
                textSizeLarge: {
                    padding: '12px 16px',
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    color: colors.primary.main,
                    background: colors.alpha.white[100],
                    transition: 'all .2s',
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        color: colors.alpha.white[100],
                        background: colors.primary.main,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: 8,
                    '& .MuiTouchRipple-root': {
                        borderRadius: 8,
                    },
                },
                sizeSmall: {
                    padding: 4,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '& .MuiTouchRipple-root': {
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: colors.alpha.black[10],
                    border: 0,
                    height: 1,
                },
                vertical: {
                    height: 'auto',
                    width: 1,
                    '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
                        height: 'auto',
                    },
                    '&.MuiDivider-absolute.MuiDivider-fullWidth': {
                        height: '100%',
                    },
                },
                withChildren: {
                    '&:before, &:after': {
                        border: 0,
                    },
                },
                wrapper: {
                    background: colors.alpha.white[100],
                    fontWeight: '700',
                    height: 24,
                    lineHeight: '24px',
                    marginTop: -12,
                    color: 'inherit',
                    textTransform: 'uppercase',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: 0,
                },
                elevation0: {
                    boxShadow: 'none',
                },
                elevation: {
                    boxShadow: colors.shadows.card,
                },
                elevation2: {
                    boxShadow: colors.shadows.cardSm,
                },
                elevation24: {
                    boxShadow: colors.shadows.cardLg,
                },
                outlined: {
                    boxShadow: colors.shadows.card,
                },
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    height: 6,
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
                        transform: 'none',
                    },
                    '& .MuiSlider-valueLabel': {
                        borderRadius: 6,
                        background: colors.alpha.black[100],
                        color: colors.alpha.white[100],
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    '& .MuiListItem-button': {
                        transition: 'all .2s',
                        '& > .MuiSvgIcon-root': {
                            minWidth: 34,
                        },
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                    },
                    '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
                        backgroundColor: require$$1.alpha(colors.primary.lighter, 0.4),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root:active': {
                        backgroundColor: require$$1.alpha(colors.primary.lighter, 0.4),
                    },
                    '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
                        opacity: 0.2,
                    },
                },
                padding: {
                    padding: '12px',
                    '& .MuiListItem-button': {
                        borderRadius: 6,
                        margin: '1px 0',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    height: 38,
                    minHeight: 38,
                    overflow: 'visible',
                },
                indicator: {
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    border: '1px solid ' + colors.primary.dark,
                    boxShadow: '0px 2px 10px ' + colors.primary.light,
                },
                scrollableX: {
                    overflow: 'visible !important',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    height: 38,
                    minHeight: 38,
                    borderRadius: 6,
                    transition: 'color .2s',
                    textTransform: 'capitalize',
                    '&.MuiButtonBase-root': {
                        minWidth: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 4,
                    },
                    '&.Mui-selected, &.Mui-selected:hover': {
                        color: colors.alpha.white[100],
                        zIndex: 5,
                    },
                    '&:hover': {
                        color: colors.alpha.black[100],
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    padding: 12,
                },
                list: {
                    padding: 12,
                    '& .MuiMenuItem-root.MuiButtonBase-root': {
                        fontSize: '0.875rem',
                        marginTop: 1,
                        marginBottom: 1,
                        transition: 'all .2s',
                        color: colors.alpha.black[70],
                        '& .MuiTouchRipple-root': {
                            opacity: 0.2,
                        },
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors.alpha.black[100],
                            background: require$$1.alpha(colors.primary.lighter, 0.4),
                        },
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: 'transparent',
                    transition: 'all .2s',
                    '&:hover, &:active, &.active, &.Mui-selected': {
                        color: colors.alpha.black[100],
                        background: require$$1.alpha(colors.primary.lighter, 0.4),
                    },
                    '&.Mui-selected:hover': {
                        background: require$$1.alpha(colors.primary.lighter, 0.4),
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.MuiButtonBase-root': {
                        color: colors.secondary.main,
                        '&:hover, &:active, &.active, &.Mui-selected': {
                            color: colors.alpha.black[100],
                            background: require$$1.lighten(colors.primary.lighter, 0.5),
                        },
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    margin: 1,
                },
                root: {
                    '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
                        right: 14,
                    },
                },
                clearIndicator: {
                    background: colors.error.lighter,
                    color: colors.error.main,
                    marginRight: 8,
                    '&:hover': {
                        background: colors.error.lighter,
                        color: colors.error.dark,
                    },
                },
                popupIndicator: {
                    color: colors.alpha.black[50],
                    '&:hover': {
                        background: colors.primary.lighter,
                        color: colors.primary.main,
                    },
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                toolbar: {
                    '& .MuiIconButton-root': {
                        padding: 8,
                    },
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    minHeight: '0 !important',
                    padding: '0 !important',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: colors.alpha.black[5],
                },
                root: {
                    transition: 'background-color .2s',
                    '&.MuiTableRow-hover:hover': {
                        backgroundColor: colors.alpha.black[5],
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                // FIXME! TableCell
                root: {
                    borderBottomColor: colors.alpha.black[10],
                    fontSize: '1rem',
                    padding: '0.75rem 1rem',
                },
                head: {
                    // textTransform: 'uppercase',
                    fontSize: '0.8125rem',
                    fontWeight: '700',
                    color: colors.alpha.black[70],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                message: {
                    lineHeight: 1.5,
                    fontSize: '0.875rem',
                },
                standardInfo: {
                    color: colors.info.main,
                },
                action: {
                    color: colors.alpha.black[70],
                },
            },
        },
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    margin: 0,
                    zIndex: 5,
                    position: 'absolute',
                    top: '50%',
                    marginTop: -6,
                    left: -6,
                },
                outlined: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors.alpha.white[100],
                },
                outlinedPrimary: {
                    backgroundColor: colors.alpha.white[100],
                    boxShadow: '0 0 0 6px ' + colors.alpha.white[100],
                },
            },
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    borderRadius: 50,
                    backgroundColor: colors.alpha.black[10],
                },
            },
        },
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    minHeight: 0,
                    padding: '8px 0',
                    '&:before': {
                        display: 'none',
                    },
                },
                missingOppositeContent: {
                    '&:before': {
                        display: 'none',
                    },
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: require$$1.alpha(colors.alpha.black['100'], 0.95),
                    padding: '8px 16px',
                    fontSize: '0.8125rem',
                },
                arrow: {
                    color: require$$1.alpha(colors.alpha.black['100'], 0.95),
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    height: 33,
                    overflow: 'visible',
                    '& .MuiButtonBase-root': {
                        position: 'absolute',
                        padding: 6,
                        transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& .MuiIconButton-root': {
                        borderRadius: 100,
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        opacity: 0.3,
                    },
                },
                thumb: {
                    border: '1px solid ' + colors.alpha.black[30],
                    boxShadow: '0px 9px 14px ' +
                        colors.alpha.black[10] +
                        ', 0px 2px 2px ' +
                        colors.alpha.black[10],
                },
                track: {
                    backgroundColor: colors.alpha.black[5],
                    border: '1px solid ' + colors.alpha.black[10],
                    boxShadow: 'inset 0px 1px 1px ' + colors.alpha.black[10],
                    opacity: 1,
                },
                colorPrimary: {
                    '& .MuiSwitch-thumb': {
                        backgroundColor: colors.alpha.white[100],
                    },
                    '&.Mui-checked .MuiSwitch-thumb': {
                        backgroundColor: colors.primary.main,
                    },
                },
            },
        },
        MuiStepper: {
            styleOverrides: {
                root: {
                    paddingTop: 20,
                    paddingBottom: 20,
                    background: colors.alpha.black[5],
                },
            },
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    '&.MuiStepIcon-completed': {
                        color: colors.success.main,
                    },
                },
            },
        },
        // TODO: 構造の周知
        // INFO: headingの使い方
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'div',
                    h4: 'div',
                    h5: 'div',
                    h6: 'div',
                    subtitle1: 'div',
                    subtitle2: 'div',
                    body1: 'div',
                    body2: 'div',
                },
            },
            styleOverrides: {
                gutterBottom: {
                    marginBottom: '0.25rem',
                },
                paragraph: {
                    // fontSize: 17,
                    fontSize: '1rem',
                    lineHeight: 1.5,
                },
            },
        },
    },
    shape: {
        borderRadius: 10,
    },
    /***
     * @param breakpoints ブレイクポイントの設定
     * 現状md:960をフォントサイズ用途で利用中
     * TODO:どこかで値を正式に決める
     * TODO:breakpointsのvaluesのキー名としてmedia(min-width:xx)の中では埋め込めなかったので、一旦数値を直書き。対応方法のリサーチをする
     */
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1840,
        },
    },
    typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto Sans JP", sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        // 見出し用
        h1: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(24)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(24)}`,
            },
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(22)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(22)}`,
            },
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(20)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(20)}`,
            },
        },
        h4: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim(18)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(18)}`,
            },
        },
        h5: {
            fontWeight: 700,
            fontSize: `${fontPxToRemMinim(16)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(16)}`,
            },
        },
        h6: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(15)}`,
            },
        },
        // Text本文 Utility用
        body1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(15)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(15)}`,
            },
        },
        body2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(14)}`,
            },
        },
        // サブタイトル用
        subtitle1: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(14)}`,
            },
            color: colors.alpha.black[70],
        },
        subtitle2: {
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: `${fontPxToRemMinim(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(13)}`,
            },
            color: colors.alpha.black[70],
        },
        // Text Utility用
        caption: {
            fontWeigt: 400,
            fontSize: `${fontPxToRemMinim(12)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(12)}`,
            },
            color: colors.alpha.black[70],
        },
        overline: {
            fontWeight: 400,
            fontSize: `${fontPxToRemMinim(13)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(13)}`,
            },
            textTransform: 'none',
        },
        // TODO:用途のリサーチ/ボタン用？
        button: {
            fontWeigt: 500,
            fontSize: `${fontPxToRemMinim(14)}`,
            '@media (min-width: 960px)': {
                fontSize: `${fontPxToRem(14)}`,
            },
            textTransform: 'none',
        },
    },
    // シャドーの初期化？ TODO: 何の配列なのかリサーチ
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
});

function themeCreator(theme) {
    return themeMap[theme];
}
const themeMap = {
    SaaSusTheme,
    SaaSusDarkTheme,
    SaaSusDarkThemeHighContrast,
};

const ThemeContext = require$$13.createContext({
    theme: null,
    setThemeName: null,
});
const ThemeProviderWrapper = ({ lang = 'ja', children, }) => {
    const [themeName, _setThemeName] = require$$13.useState('SaaSusTheme');
    require$$13.useEffect(() => {
        const curThemeName = 'SaaSusTheme';
        _setThemeName(curThemeName);
    }, []);
    require$$13.useEffect(() => {
        // change language
        i18n__default$1["default"].changeLanguage(lang);
    }, [lang]);
    const theme = themeCreator(themeName);
    const setThemeName = (themeName) => {
        window.localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    };
    return (require$$0.jsx(require$$12.StylesProvider, { injectFirst: true, children: require$$0.jsx(ThemeContext.Provider, { value: { theme, setThemeName }, children: require$$0.jsx(require$$9.ThemeProvider, { theme: theme, children: children }) }) }));
};

exports.AccordionWrap = AccordionWrap;
exports.BoxContent = BoxContent;
exports.BoxWrap = BoxWrap;
exports.ButtonWrap = ButtonWrap;
exports.CustomAlert = CustomAlert;
exports.CustomButton = CustomButton;
exports.CustomContainer = CustomContainer;
exports.CustomLabel = CustomLabel;
exports.CustomTable = CustomTable$1;
exports.CustomTableCell = CustomTableCell$1;
exports.CustomTableCellAction = CustomTableCellAction$1;
exports.CustomTableCellActionBody = CustomTableCellActionBody$1;
exports.CustomTableContainer = CustomTableContainer$1;
exports.CustomTableFilter = CustomTableFilter;
exports.CustomTableFilterResult = CustomTableFilterResult;
exports.CustomTableHeader = CustomTableHeader$1;
exports.CustomTableRow = CustomTableRow$1;
exports.CustomTooltip = CustomTooltip;
exports.DeleteDialog = DeleteDialog;
exports.MainTitleSet = MainTitleSet;
exports.RadioButton = RadioButton;
exports.SaaSusLogo = SaaSusLogo;
exports.SaaSusThemeProvider = ThemeProviderWrapper;
exports.TableHeightSwitch = TableHeightSwitch;
exports.Text = Text;
exports.ThemeContext = ThemeContext;
exports.TitleSet = TitleSet;
exports.themeCreator = themeCreator;
