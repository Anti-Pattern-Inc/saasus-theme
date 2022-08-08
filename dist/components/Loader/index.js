import { jsx as _jsx } from "react/jsx-runtime";
import { Box, CircularProgress } from '@mui/material';
function Loader() {
    return (_jsx(Box, { sx: { position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }, display: "flex", alignItems: "center", justifyContent: "center", children: _jsx(CircularProgress, { size: 64, disableShrink: true, thickness: 3 }) }));
}
export default Loader;
//# sourceMappingURL=index.js.map