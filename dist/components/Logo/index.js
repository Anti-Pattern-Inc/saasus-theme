import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, styled, Tooltip } from '@mui/material';
import Link from 'components/Link';
const LogoWrapper = styled(Link)(({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};

        &:hover {
          text-decoration: none;
        }
`);
const LogoSignWrapper = styled(Box)(() => `
        width: 52px;
        height: 38px;
        margin-top: 4px;
        transform: scale(.8);
`);
const LogoSign = styled(Box)(({ theme }) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after,
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.palette.primary.main};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.palette.secondary.main};
        }
`);
const LogoSignInner = styled(Box)(({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`);
const LogoTextWrapper = styled(Box)(({ theme }) => `
        padding-left: ${theme.spacing(1)};
`);
const VersionBadge = styled(Box)(({ theme }) => `
        background: ${theme.palette.success.main};
        color: ${theme.palette.success.contrastText};
        padding: ${theme.spacing(0.4, 1)};
        border-radius: ${theme.general.borderRadiusSm};
        text-align: center;
        display: inline-block;
        line-height: 1;
        font-size: ${theme.typography.pxToRem(11)};
`);
const LogoText = styled(Box)(({ theme }) => `
        font-size: ${theme.typography.pxToRem(15)};
        font-weight: ${theme.typography.fontWeightBold};
`);
function Logo() {
    // TODO 必要に応じて翻訳対応を行う
    const t = (t) => t;
    return (_jsxs(LogoWrapper, { href: "/", children: [_jsx(LogoSignWrapper, { children: _jsx(LogoSign, { children: _jsx(LogoSignInner, {}) }) }), _jsx(Box, { component: "span", sx: {
                    display: { xs: 'none', sm: 'inline-block' },
                }, children: _jsxs(LogoTextWrapper, { children: [_jsx(Tooltip, { title: t('Version') + ' 3.0', arrow: true, placement: "right", children: _jsx(VersionBadge, { children: "3.0" }) }), _jsx(LogoText, { children: "Tokyo" })] }) })] }));
}
export default Logo;
//# sourceMappingURL=index.js.map