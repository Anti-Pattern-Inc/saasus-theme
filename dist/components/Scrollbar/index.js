import { jsx as _jsx } from "react/jsx-runtime";
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';
const Scrollbar = ({ className, children, ...rest }) => {
    const theme = useTheme();
    return (_jsx(Scrollbars, { autoHide: true, universal: true, renderThumbVertical: () => {
            return (_jsx(Box, { sx: {
                    width: 5,
                    background: `${theme.colors.alpha.black[10]}`,
                    borderRadius: `${theme.general.borderRadiusLg}`,
                    transition: `${theme.transitions.create(['background'])}`,
                    '&:hover': {
                        background: `${theme.colors.alpha.black[30]}`,
                    },
                } }));
        }, ...rest, children: children }));
};
Scrollbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
export default Scrollbar;
//# sourceMappingURL=index.js.map