import { jsx as _jsx } from "react/jsx-runtime";
import { Box, styled } from '@mui/material';
import Link from 'next/link';
const LogoBox = styled(Box)(() => `
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
`);
function SaaSusLogo({ width }) {
    return (_jsx(LogoBox, { children: _jsx(Link, { href: "/", children: _jsx("img", { width: width, src: "/static/images/logo/saasus_logo.svg" }) }) }));
}
export default SaaSusLogo;
//# sourceMappingURL=index.js.map