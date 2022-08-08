import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import { Box, Button, Divider, Menu, MenuItem, Popover, Stack, styled, Tooltip, Typography, } from '@mui/material';
import Fab from '@mui/material/Fab';
import Link from 'components/Link';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'theme/ThemeProvider';
const ThemeSettingsButton = styled(Box)(({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(8)};

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `);
const ThemeToggleWrapper = styled(Box)(({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `);
const ButtonWrapper = styled(Box)(({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `);
const ColorSchemeWrapper = styled(Box)(({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;

    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.saaSus {
        .primary {
            background: #1A75FF;
        }

        .secondary {
            background: #4CD2FF;
        }
    }

    &.pureLight {
        .primary {
            background: #5569ff;
        }

        .secondary {
            background: #f2f5f9;
        }
    }

    &.greyGoose {
        .primary {
            background: #2442AF;
        }

        .secondary {
            background: #F8F8F8;
        }
    }

    &.purpleFlow {
        .primary {
            background: #9b52e1;
        }

        .secondary {
            background: #00b795;
        }
    }

    &.nebulaFighter {
        .primary {
            background: #8C7CF0;
        }

        .secondary {
            background: #070C27;
        }
    }

    &.greenFields {
        .primary {
            background: #44a574;
        }

        .secondary {
            background: #141c23;
        }
    }

    &.darkSpaces {
        .primary {
            background: #CB3C1D;
        }

        .secondary {
            background: #1C1C1C;
        }
    }

  `);
const CheckSelected = styled(Box)(({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `);
const ThemeSettings = () => {
    // TODO 必要に応じて翻訳対応を行う
    const t = (t) => t;
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { setThemeName } = useContext(ThemeContext);
    useEffect(() => {
        const curThemeName = window.localStorage.getItem('appTheme') || 'PureLightTheme';
        setTheme(curThemeName);
    }, []);
    const [theme, setTheme] = useState('PureLightTheme');
    const changeTheme = (theme) => {
        setTheme(theme);
        setThemeName(theme);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorEl(null);
    };
    return (_jsx(_Fragment, { children: _jsxs(ThemeSettingsButton, { children: [_jsx(Tooltip, { arrow: true, title: t('Theme Settings'), children: _jsx(Fab, { ref: ref, onClick: handleOpen, color: "primary", "aria-label": "add", children: _jsx(SettingsTwoToneIcon, {}) }) }), _jsxs(Popover, { disableScrollLock: true, anchorEl: ref.current, onClose: handleClose, open: isOpen, anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    }, transformOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    }, children: [_jsxs(Box, { p: 2, children: [_jsx(Typography, { sx: {
                                        mb: 2,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                    }, variant: "body1", children: "Layout Blueprints" }), _jsx(Button, { fullWidth: true, size: "large", variant: "outlined", endIcon: _jsx(UnfoldMoreTwoToneIcon, {}), color: "primary", "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: openMenu, children: "Choose layout" }), _jsxs(Menu, { disableScrollLock: true, anchorEl: anchorEl, open: open, onClose: closeMenu, anchorOrigin: {
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }, transformOrigin: {
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }, children: [_jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/dashboards/reports", children: "Extended Sidebar" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/accent-header/dashboards/reports", children: "Accent Header" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/accent-sidebar/dashboards/reports", children: "Accent Sidebar" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/boxed-sidebar/dashboards/reports", children: "Boxed Sidebar" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/collapsed-sidebar/dashboards/reports", children: "Collapsed Sidebar" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/bottom-navigation/dashboards/reports", children: "Bottom Navigation" }), _jsx(MenuItem, { sx: { fontWeight: 'bold' }, component: Link, href: "/blueprints/top-navigation/dashboards/reports", children: "Top Navigation" })] })] }), _jsx(Divider, {}), _jsxs(Stack, { direction: "row", divider: _jsx(Divider, { orientation: "vertical", flexItem: true }), children: [_jsxs(ThemeToggleWrapper, { children: [_jsx(Typography, { sx: {
                                                mt: 1,
                                                mb: 3,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                            }, variant: "body1", children: "Light color schemes" }), _jsxs(Stack, { alignItems: "center", spacing: 2, children: [_jsx(Tooltip, { placement: "left", title: "SaaSus", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'SaaSusTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('SaaSusTheme');
                                                        }, children: [theme === 'SaaSusTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper saaSus", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) }), _jsx(Tooltip, { placement: "left", title: "Pure Light", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'PureLightTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('PureLightTheme');
                                                        }, children: [theme === 'PureLightTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper pureLight", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) }), _jsx(Tooltip, { placement: "left", title: "Grey Goose", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'GreyGooseTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('GreyGooseTheme');
                                                        }, children: [theme === 'GreyGooseTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper greyGoose", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) }), _jsx(Tooltip, { placement: "left", title: "Purple Flow", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'PurpleFlowTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('PurpleFlowTheme');
                                                        }, children: [theme === 'PurpleFlowTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper purpleFlow", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) })] })] }), _jsxs(ThemeToggleWrapper, { children: [_jsx(Typography, { sx: {
                                                mt: 1,
                                                mb: 3,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase',
                                            }, variant: "body1", children: "Dark color schemes" }), _jsxs(Stack, { alignItems: "center", spacing: 2, children: [_jsx(Tooltip, { placement: "left", title: "Nebula Fighter", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'NebulaFighterTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('NebulaFighterTheme');
                                                        }, children: [theme === 'NebulaFighterTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper nebulaFighter", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) }), _jsx(Tooltip, { placement: "left", title: "Green Fields", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'GreenFieldsTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('GreenFieldsTheme');
                                                        }, children: [theme === 'GreenFieldsTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper greenFields", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) }), _jsx(Tooltip, { placement: "left", title: "Dark Spaces", arrow: true, children: _jsxs(ButtonWrapper, { className: theme === 'DarkSpacesTheme' ? 'active' : '', onClick: () => {
                                                            changeTheme('DarkSpacesTheme');
                                                        }, children: [theme === 'DarkSpacesTheme' && (_jsx(CheckSelected, { children: _jsx(CheckTwoToneIcon, {}) })), _jsxs(ColorSchemeWrapper, { className: "colorSchemeWrapper darkSpaces", children: [_jsx(Box, { className: "primary" }), _jsx(Box, { className: "secondary" })] })] }) })] })] })] })] })] }) }));
};
export default ThemeSettings;
//# sourceMappingURL=index.js.map