import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, styled } from '@mui/material';
import PropTypes from 'prop-types';
const PageTitle = styled(Box)(({ theme }) => `
        padding: ${theme.spacing(4)};
`);
const PageTitleWrapper = ({ children }) => {
    return (_jsx(_Fragment, { children: _jsx(PageTitle, { className: "MuiPageTitle-wrapper", children: children }) }));
};
PageTitleWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
export default PageTitleWrapper;
//# sourceMappingURL=index.js.map