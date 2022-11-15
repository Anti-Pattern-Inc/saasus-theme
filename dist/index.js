'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react/jsx-runtime');
var require$$1 = require('@mui/material');
var DeleteTwoToneIcon$1 = require('@mui/icons-material/DeleteTwoTone');
var EditTwoToneIcon$1 = require('@mui/icons-material/EditTwoTone');
var SearchTwoToneIcon = require('@mui/icons-material/SearchTwoTone');
var require$$4 = require('@mui/icons-material/ExpandMore');
var require$$5 = require('@mui/icons-material/HelpOutline');
var require$$6 = require('react-i18next');
var require$$7 = require('@mui/icons-material/Close');
var require$$8 = require('@mui/material/styles');
var require$$9 = require('next/link');
require('@mui/lab/themeAugmentation');
var require$$11 = require('@mui/styles');
var require$$12 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var DeleteTwoToneIcon__default$1 = /*#__PURE__*/_interopDefaultLegacy(DeleteTwoToneIcon$1);
var EditTwoToneIcon__default$1 = /*#__PURE__*/_interopDefaultLegacy(EditTwoToneIcon$1);
var SearchTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchTwoToneIcon);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$5__default = /*#__PURE__*/_interopDefaultLegacy(require$$5);
var require$$6__default = /*#__PURE__*/_interopDefaultLegacy(require$$6);
var require$$7__default = /*#__PURE__*/_interopDefaultLegacy(require$$7);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var require$$9__default = /*#__PURE__*/_interopDefaultLegacy(require$$9);
var require$$11__default = /*#__PURE__*/_interopDefaultLegacy(require$$11);
var require$$12__default = /*#__PURE__*/_interopDefaultLegacy(require$$12);

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

const CustomTableFilter = ({ onChange, placeholder, value }) => {
    return (require$$0.jsx(require$$1.Box, { children: require$$0.jsx(require$$1.TextField, { sx: {
                mx: 0,
                my: 2,
            }, InputProps: {
                startAdornment: (require$$0.jsx(require$$1.InputAdornment, { position: "start", children: require$$0.jsx(SearchTwoToneIcon__default["default"], {}) })),
            }, onChange: () => onChange, placeholder: placeholder, value: value, size: "small", fullWidth: true, margin: "normal", variant: "outlined" }) }));
};

var dist = {};

Object.defineProperty(dist, '__esModule', { value: true });

var jsxRuntime = require$$0__default["default"];
var material = require$$1__default["default"];
var DeleteTwoToneIcon = DeleteTwoToneIcon__default$1["default"];
var EditTwoToneIcon = EditTwoToneIcon__default$1["default"];
var ExpandMoreIcon = require$$4__default["default"];
var HelpOutlineIcon = require$$5__default["default"];
var reactI18next = require$$6__default["default"];
var CloseIcon = require$$7__default["default"];
var styles = require$$8__default["default"];
var Link = require$$9__default["default"];

var styles$1 = require$$11__default["default"];
var react = require$$12__default["default"];

function _interopDefaultLegacy$1 (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var DeleteTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(DeleteTwoToneIcon);
var EditTwoToneIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(EditTwoToneIcon);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(ExpandMoreIcon);
var HelpOutlineIcon__default = /*#__PURE__*/_interopDefaultLegacy$1(HelpOutlineIcon);
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

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf$1(o, p);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray$1(arr) {
  return _arrayWithHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest$1();
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var consoleLogger$1 = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger$1 = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass$1(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger$1;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread$7(_objectSpread$7({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }]);

  return Logger;
}();

var baseLogger$1 = new Logger$1();

var EventEmitter$1 = function () {
  function EventEmitter() {
    _classCallCheck$1(this, EventEmitter);

    this.observers = {};
  }

  _createClass$1(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer$1() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString$1(object) {
  if (object == null) return '';
  return '' + object;
}
function copy$1(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath$1(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath$1(object, path, newValue) {
  var _getLastOfPath = getLastOfPath$1(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath$1(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath$1(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath$1(object, path) {
  var _getLastOfPath3 = getLastOfPath$1(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults$1(data, defaultData, key) {
  var value = getPath$1(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath$1(defaultData, key);
}
function deepExtend$1(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend$1(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape$1(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap$1 = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape$1(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap$1[s];
    });
  }

  return data;
}
var isIE10$1 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars$1 = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath$1(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars$1.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);

  if (!matched) {
    var ki = key.indexOf(keySeparator);

    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }

  return matched;
}

function ownKeys$1$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function deepFind$1(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;

    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (mix === null) return null;

      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }

      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind$1(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore$1 = function (_EventEmitter) {
  _inherits$1(ResourceStore, _EventEmitter);

  var _super = _createSuper$4(ResourceStore);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck$1(this, ResourceStore);

    _this = _super.call(this);

    if (isIE10$1) {
      EventEmitter$1.call(_assertThisInitialized$1(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  _createClass$1(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath$1(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind$1(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath$1(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath$1(this.data, path) || {};

      if (deep) {
        deepExtend$1(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1$1(_objectSpread$1$1({}, pack), resources);
      }

      setPath$1(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$1$1(_objectSpread$1$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter$1);

var postProcessor$1 = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

function ownKeys$2$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var checkedLoadedFor$1 = {};

var Translator$1 = function (_EventEmitter) {
  _inherits$1(Translator, _EventEmitter);

  var _super = _createSuper$1$1(Translator);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Translator);

    _this = _super.call(this);

    if (isIE10$1) {
      EventEmitter$1.call(_assertThisInitialized$1(_this));
    }

    copy$1(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized$1(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger$1.create('translator');
    return _this;
  }

  _createClass$1(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };

      if (key === undefined || key === null) {
        return false;
      }

      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath$1(key, nsSeparator, keySeparator);

      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (_typeof$1(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;

          if (returnDetails) {
            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
            return resolved;
          }

          return "".concat(namespace).concat(nsSeparator).concat(key);
        }

        if (returnDetails) {
          resolved.res = key;
          return resolved;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }

          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2$1(_objectSpread$2$1({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");

          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }

          return r;
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$2$1(_objectSpread$2$1({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2$1(_objectSpread$2$1({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);

        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== 'v1') {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }

      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$2$1(_objectSpread$2$1({}, options), {
          interpolation: _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation), options.interpolation)
        }));
        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$2$1(_objectSpread$2$1({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor$1.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2$1({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor$1["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor$1["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKeys = [key];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = '_zero';

              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);

                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }

              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);

                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);

                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter$1);

function capitalize$1(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil$1 = function () {
  function LanguageUtil(options) {
    _classCallCheck$1(this, LanguageUtil);

    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger$1.create('languageUtils');
  }

  _createClass$1(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize$1(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize$1(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets$1 = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes$1 = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions$1 = ['v1', 'v2', 'v3'];
var suffixesOrder$1 = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};

function createRules$1() {
  var rules = {};
  sets$1.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes$1[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver$1 = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger$1.create('pluralResolver');

    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }

    this.rules = createRules$1();
  }

  _createClass$1(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }

      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }

      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (!rule) {
        return [];
      }

      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder$1[pluralCategory1] - suffixesOrder$1[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);

      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }

        return this.getSuffixRetroCompatible(rule, count);
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }

      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions$1.includes(this.options.compatibilityJSON);
    }
  }]);

  return PluralResolver;
}();

function ownKeys$3$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Interpolator$1 = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$1(this, Interpolator);

    this.logger = baseLogger$1.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  _createClass$1(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape$1;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape$1(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape$1(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape$1(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape$1('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape$1(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape$1(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults$1(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3$1(_objectSpread$3$1(_objectSpread$3$1({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults$1(data, defaultData, k), f, lng, _objectSpread$3$1(_objectSpread$3$1(_objectSpread$3$1({}, options), data), {}, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString$1(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread$3$1({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3$1(_objectSpread$3$1({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString$1(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, _objectSpread$3$1(_objectSpread$3$1({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function ownKeys$4$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseFormatStr$1(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};

  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);

    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;

        var _opt$split = opt.split(':'),
            _opt$split2 = _toArray$1(_opt$split),
            key = _opt$split2[0],
            rest = _opt$split2.slice(1);

        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }

  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}

var Formatter$1 = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$1(this, Formatter);

    this.logger = baseLogger$1.create('formatter');
    this.options = options;
    this.formats = {
      number: function number(val, lng, options) {
        return new Intl.NumberFormat(lng, options).format(val);
      },
      currency: function currency(val, lng, options) {
        return new Intl.NumberFormat(lng, _objectSpread$4$1(_objectSpread$4$1({}, options), {}, {
          style: 'currency'
        })).format(val);
      },
      datetime: function datetime(val, lng, options) {
        return new Intl.DateTimeFormat(lng, _objectSpread$4$1({}, options)).format(val);
      },
      relativetime: function relativetime(val, lng, options) {
        return new Intl.RelativeTimeFormat(lng, _objectSpread$4$1({}, options)).format(val, options.range || 'day');
      },
      list: function list(val, lng, options) {
        return new Intl.ListFormat(lng, _objectSpread$4$1({}, options)).format(val);
      }
    };
    this.init(options);
  }

  _createClass$1(Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;

      var formats = _format.split(this.formatSeparator);

      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr$1(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;

        if (_this.formats[formatName]) {
          var formatted = mem;

          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4$1(_objectSpread$4$1(_objectSpread$4$1({}, formatOptions), options), valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }

          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }

        return mem;
      }, value);
      return result;
    }
  }]);

  return Formatter;
}();

function ownKeys$5$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$2$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function removePending$1(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}

var Connector$1 = function (_EventEmitter) {
  _inherits$1(Connector, _EventEmitter);

  var _super = _createSuper$2$1(Connector);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck$1(this, Connector);

    _this = _super.call(this);

    if (isIE10$1) {
      EventEmitter$1.call(_assertThisInitialized$1(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger$1.create('backendConnector');
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass$1(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending[name] === undefined) pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === undefined) pending[name] = true;
            if (toLoad[name] === undefined) toLoad[name] = true;
            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
      });

      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending: pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath$1(q.loaded, [lng], ns);
        removePending$1(q, name);
        if (err) q.errors.push(err);

        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = {};
            var loadedKeys = q.loaded[l];

            if (loadedKeys.length) {
              loadedKeys.forEach(function (ns) {
                if (loaded[l][ns] === undefined) loaded[l][ns] = true;
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});

      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: lng,
          ns: ns,
          fcName: fcName,
          tried: tried,
          wait: wait,
          callback: callback
        });
        return;
      }

      this.readingCalls++;
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        _this3.readingCalls--;

        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();

          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5$1(_objectSpread$5$1({}, options), {}, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter$1);

function get$1() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof$1(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof$1(args[2]) === 'object' || _typeof$1(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions$1(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function ownKeys$6$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$3$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop$1() {}

function bindMemberFunctions$1(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}

var I18n$1 = function (_EventEmitter) {
  _inherits$1(I18n, _EventEmitter);

  var _super = _createSuper$3$1(I18n);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$1(this, I18n);

    _this = _super.call(this);

    if (isIE10$1) {
      EventEmitter$1.call(_assertThisInitialized$1(_this));
    }

    _this.options = transformOptions$1(options);
    _this.services = {};
    _this.logger = baseLogger$1;
    _this.modules = {
      external: []
    };
    bindMemberFunctions$1(_assertThisInitialized$1(_this));

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn$1(_this, _assertThisInitialized$1(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass$1(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!options.defaultNS && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }

      var defOpts = get$1();
      this.options = _objectSpread$6$1(_objectSpread$6$1(_objectSpread$6$1({}, defOpts), this.options), transformOptions$1(options));

      if (this.options.compatibilityAPI !== 'v1') {
        this.options.interpolation = _objectSpread$6$1(_objectSpread$6$1({}, defOpts.interpolation), this.options.interpolation);
      }

      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }

      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger$1.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger$1.init(null, this.options);
        }

        var formatter;

        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter$1;
        }

        var lu = new LanguageUtil$1(this.options);
        this.store = new ResourceStore$1(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger$1;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver$1(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });

        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }

        s.interpolator = new Interpolator$1(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector$1(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator$1(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      this.format = this.options.interpolation.format;
      if (!callback) callback = noop$1;

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer$1();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$1;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer$1();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop$1;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor$1.addPostProcessor(module);
      }

      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages) return;
      if (['cimode', 'dev'].indexOf(l) > -1) return;

      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer$1();
      this.emit('languageChanging', lng);

      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;

        _this4.setResolvedLanguage(l);
      };

      var done = function done(err, l) {
        if (l) {
          setLngProps(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof$1(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6$1({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer$1();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer$1();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$1;

      var mergedOptions = _objectSpread$6$1(_objectSpread$6$1(_objectSpread$6$1({}, this.options), options), {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$6$1({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator$1(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);

  return I18n;
}(EventEmitter$1);

_defineProperty$1(I18n$1, "createInstance", function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return new I18n$1(options, callback);
});

var instance$1 = I18n$1.createInstance();
instance$1.createInstance = I18n$1.createInstance;

instance$1.createInstance;
instance$1.init;
instance$1.loadResources;
instance$1.reloadResources;
instance$1.use;
instance$1.changeLanguage;
instance$1.getFixedT;
instance$1.t;
instance$1.exists;
instance$1.setDefaultNamespace;
instance$1.hasLoadedNamespace;
instance$1.loadNamespaces;
instance$1.loadLanguages;

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
instance$1
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
    const { t } = reactI18next.useTranslation(i18nNamespace$1, { i18n: instance$1 });
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
        instance$1.changeLanguage(lang);
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

const TableHeightSwitch = ({ checked, onChange, sxStyle, label, ...props }) => {
    return (require$$0.jsx(require$$1.FormControlLabel, { control: require$$0.jsx(require$$1.Switch, { checked: checked, onChange: onChange }), label: label, labelPlacement: "end", sx: sxStyle, style: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'end',
            margin: '0 8px -8px 0',
        }, ...props }));
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread(_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);

  if (!matched) {
    var ki = key.indexOf(keySeparator);

    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }

  return matched;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;

    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (mix === null) return null;

      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }

      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  var _super = _createSuper(ResourceStore);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck(this, ResourceStore);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  _createClass(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  var _super = _createSuper$1(Translator);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Translator);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };

      if (key === undefined || key === null) {
        return false;
      }

      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;

          if (returnDetails) {
            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
            return resolved;
          }

          return "".concat(namespace).concat(nsSeparator).concat(key);
        }

        if (returnDetails) {
          resolved.res = key;
          return resolved;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }

          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");

          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }

          return r;
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);

        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== 'v1') {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }

      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
          interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
        }));
        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKeys = [key];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = '_zero';

              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);

                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }

              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);

                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);

                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');

    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }

    this.rules = createRules();
  }

  _createClass(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }

      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }

      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (!rule) {
        return [];
      }

      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);

      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }

        return this.getSuffixRetroCompatible(rule, count);
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }

      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);

  return PluralResolver;
}();

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  _createClass(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread$3({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};

  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);

    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;

        var _opt$split = opt.split(':'),
            _opt$split2 = _toArray(_opt$split),
            key = _opt$split2[0],
            rest = _opt$split2.slice(1);

        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }

  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}

var Formatter = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Formatter);

    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: function number(val, lng, options) {
        return new Intl.NumberFormat(lng, options).format(val);
      },
      currency: function currency(val, lng, options) {
        return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
          style: 'currency'
        })).format(val);
      },
      datetime: function datetime(val, lng, options) {
        return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options)).format(val);
      },
      relativetime: function relativetime(val, lng, options) {
        return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options)).format(val, options.range || 'day');
      },
      list: function list(val, lng, options) {
        return new Intl.ListFormat(lng, _objectSpread$4({}, options)).format(val);
      }
    };
    this.init(options);
  }

  _createClass(Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;

      var formats = _format.split(this.formatSeparator);

      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;

        if (_this.formats[formatName]) {
          var formatted = mem;

          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }

          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }

        return mem;
      }, value);
      return result;
    }
  }]);

  return Formatter;
}();

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}

var Connector = function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  var _super = _createSuper$2(Connector);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Connector);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending[name] === undefined) pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === undefined) pending[name] = true;
            if (toLoad[name] === undefined) toLoad[name] = true;
            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
      });

      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending: pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        removePending(q, name);
        if (err) q.errors.push(err);

        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = {};
            var loadedKeys = q.loaded[l];

            if (loadedKeys.length) {
              loadedKeys.forEach(function (ns) {
                if (loaded[l][ns] === undefined) loaded[l][ns] = true;
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});

      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: lng,
          ns: ns,
          fcName: fcName,
          tried: tried,
          wait: wait,
          callback: callback
        });
        return;
      }

      this.readingCalls++;
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        _this3.readingCalls--;

        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();

          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}

var I18n = function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  var _super = _createSuper$3(I18n);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, I18n);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized(_this));

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!options.defaultNS && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }

      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));

      if (this.options.compatibilityAPI !== 'v1') {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }

      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }

      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var formatter;

        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter;
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });

        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }

        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages) return;
      if (['cimode', 'dev'].indexOf(l) > -1) return;

      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;

        _this4.setResolvedLanguage(l);
      };

      var done = function done(err, l) {
        if (l) {
          setLngProps(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey = keyPrefix ? "".concat(keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);

  return I18n;
}(EventEmitter);

_defineProperty(I18n, "createInstance", function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return new I18n(options, callback);
});

var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

instance.createInstance;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;

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
instance
    .use(require$$6.initReactI18next) // passes i18n down to react-i18next
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
    const { t } = require$$6.useTranslation(i18nNamespace, { i18n: instance });
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
    return (require$$0.jsx(DialogWrapper, { open: open, maxWidth: "sm", fullWidth: true, keepMounted: true, onClose: closeDeleteDialog, children: require$$0.jsxs(require$$1.Box, { display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", p: 5, children: [require$$0.jsx(AvatarError, { children: require$$0.jsx(require$$7__default["default"], {}) }), require$$0.jsxs(require$$1.Typography, { align: "center", sx: {
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

const TextWrapper = require$$8.styled('span')(({ theme }) => `
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
    return (require$$0.jsx(LogoBox, { children: require$$0.jsx(require$$9__default["default"], { href: "/", children: require$$0.jsx("img", { width: width, src: "/static/images/logo/saasus_logo.svg", alt: alt }) }) }));
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

const ThemeContext = require$$12.createContext({
    theme: null,
    setThemeName: null,
});
const ThemeProviderWrapper = ({ lang = 'ja', children, }) => {
    const [themeName, _setThemeName] = require$$12.useState('SaaSusTheme');
    require$$12.useEffect(() => {
        const curThemeName = 'SaaSusTheme';
        _setThemeName(curThemeName);
    }, []);
    require$$12.useEffect(() => {
        // change language
        instance.changeLanguage(lang);
    }, [lang]);
    const theme = themeCreator(themeName);
    const setThemeName = (themeName) => {
        window.localStorage.setItem('appTheme', themeName);
        _setThemeName(themeName);
    };
    return (require$$0.jsx(require$$11.StylesProvider, { injectFirst: true, children: require$$0.jsx(ThemeContext.Provider, { value: { theme, setThemeName }, children: require$$0.jsx(require$$8.ThemeProvider, { theme: theme, children: children }) }) }));
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
