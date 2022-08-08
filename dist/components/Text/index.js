import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const TextWrapper = styled('span')(({ theme }) => `
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
const Text = ({ className, color = 'secondary', flex, children, ...rest }) => {
    return (_jsx(TextWrapper, { className: clsx('MuiText-' + color, { flexItem: flex }), ...rest, children: children }));
};
Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'error',
        'warning',
        'success',
        'info',
        'black',
    ]),
};
export default Text;
//# sourceMappingURL=index.js.map